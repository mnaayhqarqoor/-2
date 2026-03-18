function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  sheet.appendRow([data.name, data.phone, "Participant"]);
  return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
}
