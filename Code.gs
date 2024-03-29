function doGet() {
  return HtmlService.createHtmlOutputFromFile("index")
                    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function adderFile(data){
  var myFile = Utilities.newBlob(Utilities.base64Decode(data.data), data.mimeType, data.fileName);
  var newName = data.name + '_' + data.batch + '_' + data.resourceType + '_' + data.courseNo + '_' + data.teacherName + '_' + data.fileName;
  var folderId = "#"; // Replace "YOUR_FOLDER_ID" with the ID of your desired folder
  var folder = DriveApp.getFolderById(folderId);
  var fileAdded = folder.createFile(myFile).setName(newName);
  var response = {
    'url': fileAdded.getUrl(),
    'name': newName
  };
  return response;
}
