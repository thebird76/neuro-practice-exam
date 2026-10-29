# Neuro Practice Exam

A lightweight, timed practice exam for a second-year medical school neuro summative. It's a static website (plain HTML, CSS and JavaScript, no build step), hosted for free on GitHub Pages. Results can be saved to a Google Sheet.

## What's in here

| Path | What it does |
|---|---|
| `index.html` | The page: start screen, exam screen, results screen |
| `css/styles.css` | All styling, including dark mode and phone layout |
| `js/config.js` | Settings: time limit, goal score, results URL, closing note (and the name that unlocks it) |
| `js/questions.js` | The 30 questions, answers and explanations |
| `js/app.js` | Timer, navigation, grading, results and review |
| `images/` | Diagrams used in questions |
| `google-apps-script/Code.gs` | Script that writes results into a Google Sheet |

## Try it locally

Double-click `index.html` to open it in your browser. Everything works except saving to the Google Sheet, which only matters once the site is online.

Progress is stored in the browser, so a refresh doesn't lose answers. To start fresh, use **Start over on this device** at the bottom of the results page.

## Editing questions

Each question in `js/questions.js` looks like this:

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

For a new exam later, copy `questions.js`, give it a new `id` at the top, and point `index.html` at the new file.

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

Each submitted exam adds a row to a **Results** tab with the score, time used, missed and flagged question numbers, the per-topic breakdown, and every answer.

If you later edit `Code.gs`, use **Deploy → Manage deployments → Edit → New version** so the same URL picks up the change.

## Privacy notes

- On a free GitHub account, Pages sites come from public repositories. Anyone with the link can open the exam, and anyone can read this code, including the answers.
- The Google Sheet stays private to you. The web app URL is in the public code, so in theory a stranger could post fake rows; if that ever happens, redeploy the script to get a new URL.
- Nothing personal is stored in the repo. The optional first name typed on the start screen goes only to the sheet.
