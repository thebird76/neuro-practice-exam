# Neuro Practice Exam

A lightweight, timed practice exam for a second-year medical school neuro summative. It's a static website (plain HTML, CSS and JavaScript, no build step), hosted for free on GitHub Pages. Results can be saved to a Google Sheet.

## What's in here

| Path | What it does |
|---|---|
| `index.html` | Homepage that lists the exams (`js/home.js` builds the cards) |
| `exam.html` | The exam page: start screen, exam screen, results screen. Opened as `exam.html?exam=exam-1` |
| `css/styles.css` | All styling, including dark mode and phone layout |
| `js/config.js` | Settings: time limit, goal score, results URL, closing note (and the name that unlocks it) |
| `js/exams/list.js` | Which exams appear on the homepage, in order |
| `js/exams/exam-1.js`, `exam-2.js` | Each exam's questions, answers and explanations |
| `js/exam-loader.js` | Loads the exam named in the address, then the app |
| `js/app.js` | Timer, navigation, grading, results and review |
| `images/` | Diagrams used in questions |
| `google-apps-script/Code.gs` | Script that writes results into a Google Sheet |

## Try it locally

Double-click `index.html` to open it in your browser. Everything works except saving to the Google Sheet, which only matters once the site is online.

Progress is stored in the browser, separately for each exam, so a refresh doesn't lose answers. To start an exam fresh, use **Start over on this device** at the bottom of its results page.

## Editing questions

Each question in `js/exams/exam-1.js` (and the other exam files) looks like this:

```js
{
  id: "q01",                       // must be unique
  topic: "Stroke & vascular",      // must match a name in `topics`
  source: "Curriculum",            // or "Step 1"
  stem: ["Paragraph one.", "Paragraph two."],
  question: "Which artery is occluded?",
  image: { src: "images/x.svg", alt: "...", caption: "..." },   // optional
  choices: [
    { text: "Choice A", why: "Why A is right or wrong" },
    ...
  ],
  answer: "B",
  explanation: "Main teaching point.",
  takeaway: "One-line rule to remember."
}
```

## Adding another exam

1. Copy `js/exams/exam-2.js` to a new file, such as `js/exams/exam-3.js`.
2. At the top of the new file, change `id` (any new, unique text; it keeps saved progress separate), `title` and `subtitle`, then replace the questions.
3. Add `"exam-3"` to the list in `js/exams/list.js`. It shows up on the homepage as a new card.

## Saving results to a Google Sheet

1. Create a new Google Sheet (sheets.new) and name it something like "Neuro exam results".
2. In the sheet, open **Extensions → Apps Script**.
3. Delete what's in the editor, paste in the contents of `google-apps-script/Code.gs`, and save.
4. Click **Deploy → New deployment**. For type, choose **Web app**.
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Click **Deploy** and approve the permissions Google asks for (it's your own script writing to your own sheet).
6. Copy the **Web app URL** (it ends in `/exec`) and paste it into `resultsUrl` in `js/config.js`.
7. Commit and push the change.

Each submitted exam adds a row to a **Results** tab with which exam it was, the score, time used, missed and flagged question numbers, the per-topic breakdown, and every answer.

If you later edit `Code.gs`, use **Deploy → Manage deployments → Edit → New version** so the same URL picks up the change.

## Privacy notes

- On a free GitHub account, Pages sites come from public repositories. Anyone with the link can open the exam, and anyone can read this code, including the answers.
- The Google Sheet stays private to you. The web app URL is in the public code, so in theory a stranger could post fake rows; if that ever happens, redeploy the script to get a new URL.
- Nothing personal is stored in the repo. The optional first name typed on the start screen goes only to the sheet.
