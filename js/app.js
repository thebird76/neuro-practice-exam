// Practice exam app: start screen, timed exam, and results with review.
// Progress is kept in localStorage so a refresh or closed tab doesn't lose answers.
(function () {
  "use strict";

  const EXAM = window.EXAM;
  const CONFIG = window.EXAM_CONFIG || {};
  const QUESTIONS = EXAM.questions;
  const LETTERS = ["A", "B", "C", "D", "E", "F"];
  const DURATION_SEC = (CONFIG.durationMinutes || 45) * 60;
  const GOAL = CONFIG.goalPercent || 70;
  const STORAGE_KEY = "neuro-exam:" + EXAM.id;

  // ---------- Small helpers ----------

  const $ = (selector) => document.querySelector(selector);

  // el("div", { class: "x", onclick: fn }, child1, "text", ...)
  function el(tag, attrs, ...children) {
    const node = document.createElement(tag);
    for (const [key, value] of Object.entries(attrs || {})) {
      if (value === null || value === undefined || value === false) continue;
      if (key.startsWith("on")) node.addEventListener(key.slice(2), value);
      else if (key === "class") node.className = value;
      else node.setAttribute(key, value === true ? "" : value);
    }
    for (const child of children.flat()) {
      if (child === null || child === undefined || child === false) continue;
      node.append(child instanceof Node ? child : document.createTextNode(String(child)));
    }
    return node;
  }

  function formatTime(totalSeconds) {
    const sec = Math.max(0, Math.round(totalSeconds));
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return m + ":" + String(s).padStart(2, "0");
  }

  function questionNumber(q) {
    return QUESTIONS.indexOf(q) + 1;
  }

  // ---------- Saved state ----------

  function freshState() {
    return {
      name: "",
      startedAt: null,
      submittedAt: null,
      autoSubmitted: false,
      current: 0,
      answers: {},   // question id -> letter
      flags: {},     // question id -> true
      struck: {},    // question id -> [letters]
      timeSpent: {}, // question id -> seconds
      resultSent: false
    };
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? Object.assign(freshState(), JSON.parse(raw)) : freshState();
    } catch (err) {
      return freshState();
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (err) {
      // Private browsing or storage disabled: the exam still works, it just can't resume.
    }
  }

  function clearState() {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (err) { /* ignore */ }
  }

  let state = loadState();
  let tickTimer = null;
  let lastTick = 0;

  // ---------- Screens ----------

  function showScreen(name) {
    for (const screen of document.querySelectorAll(".screen")) {
      screen.hidden = screen.id !== "screen-" + name;
    }
    window.scrollTo(0, 0);
  }

  function remainingSec() {
    if (!state.startedAt) return DURATION_SEC;
    return Math.max(0, DURATION_SEC - (Date.now() - state.startedAt) / 1000);
  }

  // ---------- Start screen ----------

  function renderStart() {
    document.title = EXAM.title;
    $("#exam-title").textContent = EXAM.title;
    $("#exam-subtitle").textContent = EXAM.subtitle;
    $("#fact-count").textContent = QUESTIONS.length;
    $("#fact-time").textContent = Math.round(DURATION_SEC / 60);

    const inProgress = state.startedAt && !state.submittedAt;
    const note = $("#resume-note");
    if (inProgress) {
      const answered = Object.keys(state.answers).length;
      note.textContent = `You have an exam in progress: ${answered} of ${QUESTIONS.length} answered, ${formatTime(remainingSec())} left on the clock.`;
      note.hidden = false;
      $("#name-field").hidden = true;
      $("#start-btn").textContent = "Resume exam";
    }
    showScreen("start");
  }

  $("#start-btn").addEventListener("click", () => {
    if (!state.startedAt) {
      state.name = $("#name-input").value.trim();
      state.startedAt = Date.now();
      saveState();
    }
    beginExam();
  });

  // ---------- Exam screen ----------

  function beginExam() {
    if (remainingSec() <= 0) {
      submitExam(true);
      return;
    }
    showScreen("exam");
    buildNavigator();
    renderQuestion();
    lastTick = Date.now();
    tick();
    tickTimer = setInterval(tick, 1000);
  }

  // Adds the time since the last check to the question on screen.
  function creditTime() {
    const now = Date.now();
    const q = QUESTIONS[state.current];
    state.timeSpent[q.id] = (state.timeSpent[q.id] || 0) + (now - lastTick) / 1000;
    lastTick = now;
  }

  function tick() {
    creditTime();
    const rem = remainingSec();
    const timer = $("#timer");
    timer.textContent = formatTime(rem);
    timer.classList.toggle("warn", rem <= 300 && rem > 60);
    timer.classList.toggle("danger", rem <= 60);

    saveState();
    if (rem <= 0) submitExam(true);
  }

  function renderStem(q) {
    const wrap = el("div", { class: "stem" });
    for (const paragraph of q.stem) wrap.append(el("p", null, paragraph));
    if (q.image) {
      wrap.append(el("figure", { class: "figure" },
        el("img", { src: q.image.src, alt: q.image.alt, width: "520", loading: "lazy" }),
        q.image.caption ? el("figcaption", null, q.image.caption) : null
      ));
    }
    wrap.append(el("p", { class: "lead-in" }, q.question));
    return wrap;
  }

  function renderQuestion() {
    const q = QUESTIONS[state.current];
    const card = $("#question");
    card.replaceChildren(
      el("p", { class: "q-number" },
        `Question ${state.current + 1}`,
        el("span", null, ` of ${QUESTIONS.length}`),
        state.flags[q.id] ? el("span", { class: "tag flag" }, "Flagged") : null
      ),
      renderStem(q),
      el("ol", { class: "choices", id: "choices", "aria-label": "Answer choices" })
    );
    renderChoices();

    const flagged = !!state.flags[q.id];
    $("#flag-btn").setAttribute("aria-pressed", String(flagged));
    $("#flag-btn .flag-label").textContent = flagged ? "Flagged" : "Flag";
    $("#prev-btn").disabled = state.current === 0;
    $("#next-btn").textContent = state.current === QUESTIONS.length - 1 ? "Finish →" : "Next →";
    updateNavigator();
  }

  function renderChoices() {
    const q = QUESTIONS[state.current];
    const list = $("#choices");
    const chosen = state.answers[q.id];
    const struck = state.struck[q.id] || [];
    list.replaceChildren(...q.choices.map((choice, i) => {
      const letter = LETTERS[i];
      const isStruck = struck.includes(letter);
      return el("li", { class: "choice-row" + (isStruck ? " struck" : "") },
        el("button", {
          class: "choice",
          type: "button",
          "aria-pressed": String(chosen === letter),
          onclick: () => chooseAnswer(letter),
          oncontextmenu: (event) => { event.preventDefault(); toggleStrike(letter); }
        },
          el("span", { class: "letter" }, letter),
          el("span", { class: "text" }, choice.text)
        ),
        el("button", {
          class: "strike-btn",
          type: "button",
          title: isStruck ? "Restore choice" : "Cross out choice",
          "aria-label": (isStruck ? "Restore choice " : "Cross out choice ") + letter,
          "aria-pressed": String(isStruck),
          onclick: () => toggleStrike(letter)
        }, isStruck ? "↺" : "✕")
      );
    }));
  }

  function chooseAnswer(letter) {
    const q = QUESTIONS[state.current];
    state.answers[q.id] = letter;
    // Picking a crossed-out choice brings it back.
    if (state.struck[q.id]) state.struck[q.id] = state.struck[q.id].filter((l) => l !== letter);
    saveState();
    renderChoices();
    updateNavigator();
  }

  function toggleStrike(letter) {
    const q = QUESTIONS[state.current];
    const struck = new Set(state.struck[q.id] || []);
    if (struck.has(letter)) struck.delete(letter);
    else struck.add(letter);
    state.struck[q.id] = [...struck];
    saveState();
    renderChoices();
  }

  function toggleFlag() {
    const q = QUESTIONS[state.current];
    if (state.flags[q.id]) delete state.flags[q.id];
    else state.flags[q.id] = true;
    saveState();
    renderQuestion();
  }

  function goTo(index) {
    if (index < 0 || index >= QUESTIONS.length) return;
    creditTime();
    state.current = index;
    saveState();
    renderQuestion();
    window.scrollTo(0, 0);
  }

  // ---------- Navigator ----------

  function buildNavigator() {
    const grid = $("#nav-grid");
    grid.replaceChildren(...QUESTIONS.map((q, i) =>
      el("button", {
        type: "button",
        "data-index": i,
        onclick: () => { goTo(i); closeNavigator(); }
      }, i + 1)
    ));
  }

  function updateNavigator() {
    const buttons = $("#nav-grid").children;
    QUESTIONS.forEach((q, i) => {
      const button = buttons[i];
      const answered = !!state.answers[q.id];
      const flagged = !!state.flags[q.id];
      button.className = [answered && "answered", flagged && "flagged", i === state.current && "current"].filter(Boolean).join(" ");
      button.setAttribute("aria-label", `Question ${i + 1}, ${answered ? "answered" : "unanswered"}${flagged ? ", flagged" : ""}`);
      if (i === state.current) button.setAttribute("aria-current", "true");
      else button.removeAttribute("aria-current");
    });
  }

  function closeNavigator() {
    $("#navigator").classList.remove("open");
    $("#nav-toggle").setAttribute("aria-expanded", "false");
  }

  $("#nav-toggle").addEventListener("click", () => {
    const open = $("#navigator").classList.toggle("open");
    $("#nav-toggle").setAttribute("aria-expanded", String(open));
  });

  $("#prev-btn").addEventListener("click", () => goTo(state.current - 1));
  $("#next-btn").addEventListener("click", () => {
    if (state.current === QUESTIONS.length - 1) openSubmitDialog();
    else goTo(state.current + 1);
  });
  $("#flag-btn").addEventListener("click", toggleFlag);
  $("#submit-btn").addEventListener("click", openSubmitDialog);

  document.addEventListener("keydown", (event) => {
    if ($("#screen-exam").hidden || event.ctrlKey || event.metaKey || event.altKey) return;
    if (document.querySelector("dialog[open]")) return;
    if (event.target.closest("input, textarea, select")) return;

    const key = event.key.toLowerCase();
    const q = QUESTIONS[state.current];
    const letterIndex = LETTERS.indexOf(key.toUpperCase());
    if (key.length === 1 && letterIndex !== -1 && letterIndex < q.choices.length) {
      chooseAnswer(LETTERS[letterIndex]);
    } else if (key === "arrowright") {
      goTo(state.current + 1);
    } else if (key === "arrowleft") {
      goTo(state.current - 1);
    } else if (key === "f") {
      toggleFlag();
    } else {
      return;
    }
    event.preventDefault();
  });

  // ---------- Submitting ----------

  function openSubmitDialog() {
    const unanswered = QUESTIONS.filter((q) => !state.answers[q.id]).length;
    const flagged = QUESTIONS.filter((q) => state.flags[q.id]).length;
    const parts = [];
    if (unanswered) parts.push(`${unanswered} unanswered question${unanswered === 1 ? "" : "s"}`);
    if (flagged) parts.push(`${flagged} flagged question${flagged === 1 ? "" : "s"}`);
    const status = parts.length ? `You have ${parts.join(" and ")}.` : "All questions are answered.";
    $("#submit-summary").textContent = `${status} ${formatTime(remainingSec())} is left on the clock. You can't change answers after submitting.`;
    $("#submit-dialog").showModal();
  }

  $("#cancel-submit").addEventListener("click", () => $("#submit-dialog").close());
  $("#confirm-submit").addEventListener("click", () => {
    $("#submit-dialog").close();
    submitExam(false);
  });

  function submitExam(auto) {
    if (state.submittedAt) return;
    if (tickTimer) {
      clearInterval(tickTimer);
      tickTimer = null;
      creditTime();
    }
    const dialog = $("#submit-dialog");
    if (dialog.open) dialog.close();
    state.submittedAt = Math.min(Date.now(), state.startedAt + DURATION_SEC * 1000);
    state.autoSubmitted = auto;
    saveState();
    renderResults();
  }

  // ---------- Grading ----------

  function grade() {
    const rows = QUESTIONS.map((q, i) => {
      const chosen = state.answers[q.id] || null;
      return {
        n: i + 1,
        q,
        chosen,
        isCorrect: chosen === q.answer,
        flagged: !!state.flags[q.id],
        sec: state.timeSpent[q.id] || 0
      };
    });
    const correct = rows.filter((r) => r.isCorrect).length;
    const byTopic = EXAM.topics
      .map((topic) => {
        const inTopic = rows.filter((r) => r.q.topic === topic);
        return { topic, total: inTopic.length, correct: inTopic.filter((r) => r.isCorrect).length };
      })
      .filter((t) => t.total > 0);
    const bySource = ["Curriculum", "Step 1"].map((source) => {
      const inSource = rows.filter((r) => r.q.source === source);
      return { source, total: inSource.length, correct: inSource.filter((r) => r.isCorrect).length };
    });
    const timeUsed = Math.min(DURATION_SEC, (state.submittedAt - state.startedAt) / 1000);
    return {
      rows,
      correct,
      total: rows.length,
      percent: Math.round((correct / rows.length) * 100),
      byTopic,
      bySource,
      timeUsed
    };
  }

  function verdictFor(percent) {
    if (percent >= 85) return "Excellent work. You're in great shape for Friday.";
    if (percent >= GOAL) return "Solid. You're at the goal; the review below will tighten up the rest.";
    if (percent >= GOAL - 10) return "Close to the goal. The topics below show exactly where to focus.";
    return "Lots to gain from the review. Start with the topics at the bottom of the breakdown.";
  }

  // ---------- Results screen ----------

  let reviewFilter = "all";
  let reviewTopic = "";

  function renderResults() {
    const result = grade();
    const screen = $("#screen-results");
    const answeredCount = result.rows.filter((r) => r.chosen).length;
    const avg = result.rows.reduce((sum, r) => sum + r.sec, 0) / result.total;

    const head = el("div", { class: "results-head" },
      el("div", { class: "score-ring", style: `--pct:${result.percent}` },
        el("div", null, el("div", null, el("strong", null, `${result.correct}/${result.total}`), el("span", null, `${result.percent}%`)))
      ),
      el("div", null,
        el("h1", null, state.name ? `Nice work, ${state.name}.` : "Exam complete."),
        el("p", { class: "verdict" }, verdictFor(result.percent)),
        el("div", { class: "goal-bar", role: "img", "aria-label": `Score ${result.percent}%, goal ${GOAL}%` },
          el("div", { class: "fill", style: `width:${result.percent}%` }),
          el("div", { class: "goal", style: `left:${GOAL}%` })
        ),
        el("div", { class: "goal-caption" }, `Practice goal: ${GOAL}%`),
        el("p", { class: "save-status", id: "save-status", hidden: !CONFIG.resultsUrl })
      )
    );

    const stats = el("div", { class: "stat-row" },
      stat(formatTime(result.timeUsed), `time used of ${formatTime(DURATION_SEC)}`),
      stat(formatTime(avg), "average per question"),
      stat(`${answeredCount}/${result.total}`, "answered"),
      stat(String(result.rows.filter((r) => r.flagged).length), "flagged")
    );

    const topics = el("section", { class: "panel" },
      el("h2", null, "By topic"),
      el("p", { class: "sub" }, "Sorted from weakest to strongest."),
      el("ul", { class: "topic-list" },
        [...result.byTopic]
          .sort((a, b) => a.correct / a.total - b.correct / b.total)
          .map((t) => {
            const pct = Math.round((t.correct / t.total) * 100);
            const level = pct >= GOAL ? "good" : pct >= 50 ? "mid" : "low";
            return el("li", { class: "topic-row" },
              el("span", null, t.topic),
              el("div", { class: "bar" }, el("div", { class: level, style: `width:${Math.max(pct, 2)}%` })),
              el("span", { class: "count" }, `${t.correct}/${t.total}`)
            );
          })
      ),
      el("p", { class: "source-split" },
        result.bySource.map((s) => `${s.source === "Step 1" ? "Step 1 extras" : "From your curriculum"}: ${s.correct}/${s.total}`).join("  ·  ")
      )
    );

    const slowest = [...result.rows].sort((a, b) => b.sec - a.sec).slice(0, 3);
    const timing = el("section", { class: "panel" },
      el("h2", null, "Timing"),
      el("p", { class: "sub" },
        state.autoSubmitted
          ? "Time ran out, so the exam was submitted automatically."
          : `You finished with ${formatTime(DURATION_SEC - result.timeUsed)} to spare. The NBME pace is about 1:30 per question.`
      ),
      el("ol", { class: "slow-list" },
        slowest.map((r) => el("li", null,
          el("button", { class: "link-btn", type: "button", onclick: () => openReviewItem(r.n) }, `Question ${r.n}`),
          ` took ${formatTime(r.sec)} · ${r.isCorrect ? "correct" : "incorrect"}`
        ))
      )
    );

    const review = el("section", { class: "panel" },
      el("h2", null, "Review"),
      el("p", { class: "sub" }, "Open any question to see the answer, why each choice is right or wrong, and the key takeaway."),
      el("div", { class: "review-tools", id: "review-tools" }),
      el("div", { class: "review-list", id: "review-list" })
    );

    const showClosing = CONFIG.closingNote &&
      (!CONFIG.closingNoteName || (state.name || "").toLowerCase() ===CONFIG.closingNoteName.toLowerCase());
    const closing = showClosing
      ? el("p", { class: "closing-note" }, el("span", { "aria-hidden": "true" }, "💛"), CONFIG.closingNote)
      : null;

    const restart = el("div", { class: "restart" },
      el("button", { class: "link-btn", type: "button", onclick: () => $("#restart-dialog").showModal() }, "Start over on this device")
    );

    screen.replaceChildren(head, stats, topics, timing, review, closing, restart);
    renderReviewTools(result);
    renderReviewList(result);
    showScreen("results");
    sendResults(result);
  }

  function stat(value, label) {
    return el("div", { class: "stat" }, el("strong", null, value), el("span", null, label));
  }

  function renderReviewTools(result) {
    const counts = {
      all: result.total,
      wrong: result.rows.filter((r) => !r.isCorrect).length,
      flagged: result.rows.filter((r) => r.flagged).length
    };
    const labels = { all: "All", wrong: "Incorrect", flagged: "Flagged" };
    const tools = $("#review-tools");
    tools.replaceChildren(
      ...Object.keys(labels).map((key) =>
        el("button", {
          class: "chip",
          type: "button",
          "aria-pressed": String(reviewFilter === key),
          onclick: () => { reviewFilter = key; renderReviewTools(result); renderReviewList(result); }
        }, `${labels[key]} (${counts[key]})`)
      ),
      el("select", {
        "aria-label": "Filter by topic",
        onchange: (event) => { reviewTopic = event.target.value; renderReviewList(result); }
      },
        el("option", { value: "" }, "All topics"),
        result.byTopic.map((t) => el("option", { value: t.topic, selected: reviewTopic === t.topic }, t.topic))
      ),
      el("span", { class: "spacer" }),
      el("button", { class: "link-btn", type: "button", onclick: () => setAllOpen(true) }, "Expand all"),
      el("button", { class: "link-btn", type: "button", onclick: () => setAllOpen(false) }, "Collapse all")
    );
  }

  function renderReviewList(result) {
    const rows = result.rows.filter((r) => {
      if (reviewFilter === "wrong" && r.isCorrect) return false;
      if (reviewFilter === "flagged" && !r.flagged) return false;
      if (reviewTopic && r.q.topic !== reviewTopic) return false;
      return true;
    });
    const list = $("#review-list");
    if (!rows.length) {
      list.replaceChildren(el("p", { class: "sub" }, "No questions match this filter."));
      return;
    }
    list.replaceChildren(...rows.map(renderReviewItem));
  }

  function renderReviewItem(r) {
    const q = r.q;
    const snippet = q.stem[0].length > 120 ? q.stem[0].slice(0, 117) + "…" : q.stem[0];
    const item = el("details", { class: "review-item " + (r.isCorrect ? "is-right" : "is-wrong"), id: "review-" + r.n });

    item.append(el("summary", null,
      el("span", { class: "mark", "aria-label": r.isCorrect ? "Correct" : "Incorrect" }, r.isCorrect ? "✓" : "✕"),
      el("div", { class: "sum-main" },
        el("div", { class: "sum-title" }, `Question ${r.n} · ${q.topic}`),
        el("div", { class: "sum-snippet" }, snippet)
      ),
      el("div", { class: "sum-meta" },
        q.source === "Step 1" ? el("span", { class: "tag step1" }, "Step 1") : null,
        r.flagged ? el("span", { class: "tag flag" }, "Flagged") : null,
        el("span", null, formatTime(r.sec))
      )
    ));

    // Build the body the first time the item opens, to keep the page light.
    item.addEventListener("toggle", () => {
      if (!item.open || item.dataset.built) return;
      item.dataset.built = "1";
      item.append(el("div", { class: "review-body" },
        renderStem(q),
        r.chosen ? null : el("p", { class: "unanswered-note" }, "You didn't answer this one."),
        el("ol", { class: "review-choices" }, q.choices.map((choice, i) => {
          const letter = LETTERS[i];
          const isAnswer = letter === q.answer;
          const isPicked = letter === r.chosen;
          let tag = null;
          if (isAnswer && isPicked) tag = "Your answer · Correct";
          else if (isAnswer) tag = "Correct answer";
          else if (isPicked) tag = "Your answer";
          return el("li", { class: isAnswer ? "correct" : isPicked ? "picked-wrong" : "" },
            el("div", { class: "rc-head" },
              el("span", { class: "rc-letter" }, letter + "."),
              el("span", null, choice.text),
              tag ? el("span", { class: "rc-tag" }, tag) : null
            ),
            el("p", { class: "why" }, choice.why)
          );
        })),
        el("div", { class: "explain" }, el("h3", null, "Explanation"), el("p", null, q.explanation)),
        el("p", { class: "takeaway" }, el("strong", null, "Takeaway: "), q.takeaway)
      ));
    });
    return item;
  }

  function setAllOpen(open) {
    for (const item of document.querySelectorAll(".review-item")) item.open = open;
  }

  function openReviewItem(n) {
    reviewFilter = "all";
    reviewTopic = "";
    const result = grade();
    renderReviewTools(result);
    renderReviewList(result);
    const item = document.getElementById("review-" + n);
    if (item) {
      item.open = true;
      item.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  // ---------- Restart ----------

  $("#cancel-restart").addEventListener("click", () => $("#restart-dialog").close());
  $("#confirm-restart").addEventListener("click", () => {
    clearState();
    window.location.reload();
  });

  // ---------- Sending results to the Google Sheet ----------

  async function sendResults(result) {
    const status = $("#save-status");
    if (!CONFIG.resultsUrl || !status) return;
    if (state.resultSent) {
      setStatus(status, "ok", "Your results were saved.");
      return;
    }

    const payload = {
      examId: EXAM.id,
      name: state.name,
      startedAt: new Date(state.startedAt).toISOString(),
      submittedAt: new Date(state.submittedAt).toISOString(),
      autoSubmitted: state.autoSubmitted,
      score: result.correct,
      total: result.total,
      percent: result.percent,
      timeUsed: formatTime(result.timeUsed),
      missed: result.rows.filter((r) => !r.isCorrect).map((r) => r.n).join(", "),
      flagged: result.rows.filter((r) => r.flagged).map((r) => r.n).join(", "),
      byTopic: result.byTopic.map((t) => `${t.topic}: ${t.correct}/${t.total}`).join("; "),
      answers: result.rows.map((r) => ({
        n: r.n,
        id: r.q.id,
        topic: r.q.topic,
        chosen: r.chosen,
        correct: r.q.answer,
        isCorrect: r.isCorrect,
        flagged: r.flagged,
        seconds: Math.round(r.sec)
      }))
    };

    setStatus(status, "", "Saving your results…");
    try {
      // A plain-text body keeps this a "simple" request, which Apps Script accepts without CORS preflight.
      await fetch(CONFIG.resultsUrl, { method: "POST", body: JSON.stringify(payload) });
      state.resultSent = true;
      saveState();
      setStatus(status, "ok", "Results saved ✓");
    } catch (err) {
      setStatus(status, "err", "Couldn't confirm your results were saved. Your score is still shown here.");
      status.append(" ", el("button", { class: "link-btn", type: "button", onclick: () => sendResults(result) }, "Try again"));
    }
  }

  function setStatus(node, kind, text) {
    node.className = "save-status" + (kind ? " " + kind : "");
    node.textContent = text;
  }

  // ---------- Boot ----------

  if (state.submittedAt) renderResults();
  else renderStart();
})();
