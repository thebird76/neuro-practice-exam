// Receives exam results from the practice exam page and adds one row per attempt
// to a "Results" tab in the Google Sheet this script is attached to.
// Setup steps are in README.md, "Saving results to a Google Sheet".

const HEADERS = [
  "Submitted",
  "Name",
  "Score",
  "Percent",
  "Time used",
  "Auto-submitted",
  "Missed questions",
  "Flagged questions",
  "By topic",
  "Answers (JSON)"
];

function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  const sheet = getResultsSheet_();
  sheet.appendRow([
    new Date(data.submittedAt),
    data.name || "(no name)",
    data.score + " / " + data.total,
    data.percent + "%",
    data.timeUsed,
    data.autoSubmitted ? "Yes" : "No",
    data.missed || "none",
    data.flagged || "none",
    data.byTopic,
    JSON.stringify(data.answers)
  ]);
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

// Visiting the web app URL in a browser shows this, which is a handy way to check the deployment.
function doGet() {
  return ContentService.createTextOutput("The practice exam results endpoint is running.");
}

function getResultsSheet_() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet.getSheetByName("Results") || spreadsheet.insertSheet("Results");
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
  }
  return sheet;
}
