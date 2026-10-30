// Loads the exam named in the address (exam.html?exam=exam-2), then the app.
// An unknown or missing name sends the visitor back to the homepage.
(function () {
  "use strict";

  const name = new URLSearchParams(window.location.search).get("exam");
  if (!window.EXAM_LIST.includes(name)) {
    window.location.replace("index.html");
    return;
  }

  function loadScript(src, onload) {
    const script = document.createElement("script");
    script.src = src;
    script.onload = onload;
    document.body.append(script);
  }

  loadScript(`js/exams/${name}.js`, () => loadScript("js/app.js"));
})();
