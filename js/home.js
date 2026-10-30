// Homepage: one card per exam in js/exams/list.js, showing whether it's
// not started, in progress, or finished on this device.
(function () {
  "use strict";

  const CONFIG = window.EXAM_CONFIG || {};
  const MINUTES = CONFIG.durationMinutes || 45;
  const list = document.getElementById("exam-cards");

  function el(tag, attrs, ...children) {
    const node = document.createElement(tag);
    for (const [key, value] of Object.entries(attrs || {})) {
      if (key === "class") node.className = value;
      else node.setAttribute(key, value);
    }
    node.append(...children.filter((child) => child !== null && child !== undefined));
    return node;
  }

  // Each exam file sets window.EXAM, so load them one at a time and read it after each.
  function loadExam(name) {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = `js/exams/${name}.js`;
      script.onload = () => resolve(window.EXAM);
      script.onerror = reject;
      document.body.append(script);
    });
  }

  function savedState(exam) {
    try {
      return JSON.parse(localStorage.getItem("neuro-exam:" + exam.id)) || null;
    } catch (err) {
      return null;
    }
  }

  function statusFor(exam) {
    const state = savedState(exam);
    const total = exam.questions.length;
    if (state && state.submittedAt) {
      const correct = exam.questions.filter((q) => state.answers[q.id] === q.answer).length;
      return { kind: "done", label: `Completed · ${correct}/${total} (${Math.round((correct / total) * 100)}%)`, action: "See results" };
    }
    if (state && state.startedAt) {
      const answered = Object.keys(state.answers || {}).length;
      return { kind: "progress", label: `In progress · ${answered} of ${total} answered`, action: "Resume exam" };
    }
    return { kind: "new", label: "Not started", action: "Start exam" };
  }

  function renderCard(name, exam, index) {
    const status = statusFor(exam);
    return el("li", { class: "exam-card" },
      el("p", { class: "eyebrow" }, `Exam ${index + 1}`),
      el("h2", null, exam.title),
      el("p", { class: "lede" }, exam.subtitle),
      el("p", { class: "exam-meta" }, `${exam.questions.length} questions · ${MINUTES} minutes`),
      el("div", { class: "exam-card-foot" },
        el("span", { class: "status " + status.kind }, status.label),
        el("a", { class: "btn" + (status.kind === "done" ? "" : " primary"), href: `exam.html?exam=${name}` }, status.action)
      )
    );
  }

  (async function () {
    const cards = [];
    for (const [index, name] of window.EXAM_LIST.entries()) {
      try {
        cards.push(renderCard(name, await loadExam(name), index));
      } catch (err) {
        cards.push(el("li", { class: "exam-card" }, el("p", { class: "lede" }, `Couldn't load ${name}.`)));
      }
    }
    list.replaceChildren(...cards);
  })();
})();
