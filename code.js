
function doGet(e) {
  var htmlOutput =  HtmlService.createTemplateFromFile('UploadFile');
  htmlOutput.message = '';
  return htmlOutput.evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}


function doPost(e) {
  
  Logger.log(JSON.stringify(e));
  
  var destination_id = '1PUiG-zBMRAGUuX7ypHx2-Di6y9rmkFo4';  // ID OF GOOGLE DRIVE DIRECTORY;
  var destination = DriveApp.getFolderById(destination_id);
  
  var data = Utilities.base64Decode(e.parameter.fileData);
  var blob = Utilities.newBlob(data, e.parameter.mimeType, e.parameter.fileName);
  destination.createFile(blob);
  
  var data2 = Utilities.base64Decode(e.parameter.fileData2);
  var blob2= Utilities.newBlob(data2,e.parameter.mimeType2,e.parameter.fileName2);
  destination.createFile(blob2);
  
    var data3 = Utilities.base64Decode(e.parameter.fileData3);
  var blob3= Utilities.newBlob(data3,e.parameter.mimeType3,e.parameter.fileName3);
  destination.createFile(blob3);
  
    var data4 = Utilities.base64Decode(e.parameter.fileData4);
  var blob4= Utilities.newBlob(data4,e.parameter.mimeType4,e.parameter.fileName4);
  destination.createFile(blob4);
  
    var data5 = Utilities.base64Decode(e.parameter.fileData5);
  var blob5= Utilities.newBlob(data5,e.parameter.mimeType5,e.parameter.fileName5);
  destination.createFile(blob5);
  
    var data6 = Utilities.base64Decode(e.parameter.fileData6);
  var blob6= Utilities.newBlob(data6,e.parameter.mimeType6,e.parameter.fileName6);
  destination.createFile(blob6);
  
    var data7 = Utilities.base64Decode(e.parameter.fileData7);
  var blob7= Utilities.newBlob(data7,e.parameter.mimeType7,e.parameter.fileName7);
  destination.createFile(blob7);
  
    var data8 = Utilities.base64Decode(e.parameter.fileData8);
  var blob8= Utilities.newBlob(data8,e.parameter.mimeType8,e.parameter.fileName8);
  destination.createFile(blob8);
  
     var data9 = Utilities.base64Decode(e.parameter.fileData9);
  var blob9= Utilities.newBlob(data9,e.parameter.mimeType9,e.parameter.fileName9);
  destination.createFile(blob9);
  
    var data10 = Utilities.base64Decode(e.parameter.fileData10);
  var blob10= Utilities.newBlob(data10,e.parameter.mimeType10,e.parameter.fileName10);
  destination.createFile(blob10);
  
    var data11 = Utilities.base64Decode(e.parameter.fileData11);
  var blob11= Utilities.newBlob(data11,e.parameter.mimeType11,e.parameter.fileName11);
  destination.createFile(blob11);
  
    var data12 = Utilities.base64Decode(e.parameter.fileData12);
  var blob12= Utilities.newBlob(data12,e.parameter.mimeType12,e.parameter.fileName12);
  destination.createFile(blob12);
  
    var data13 = Utilities.base64Decode(e.parameter.fileData13);
  var blob13= Utilities.newBlob(data13,e.parameter.mimeType13,e.parameter.fileName13);
  destination.createFile(blob13);
  
    var data14 = Utilities.base64Decode(e.parameter.fileData14);
  var blob14= Utilities.newBlob(data14,e.parameter.mimeType14,e.parameter.fileName14);
  destination.createFile(blob14);
  
    var data15 = Utilities.base64Decode(e.parameter.fileData15);
  var blob15= Utilities.newBlob(data15,e.parameter.mimeType15,e.parameter.fileName15);
  destination.createFile(blob15);
  
    var data16 = Utilities.base64Decode(e.parameter.fileData16);
  var blob16= Utilities.newBlob(data16,e.parameter.mimeType16,e.parameter.fileName16);
  destination.createFile(blob16);
  
    
  
    var data17 = Utilities.base64Decode(e.parameter.fileData17);
  var blob17= Utilities.newBlob(data17,e.parameter.mimeType17,e.parameter.fileName17);
  destination.createFile(blob17);
  


  
 

  listRecord(e.parameter.username,e.parameter.department,e.parameter.academicyear,e.parameter.semester, e.parameter.fileName, e.parameter.fileName2,e.parameter.fileName3,e.parameter.fileName4,e.parameter.fileName5,e.parameter.fileName6,e.parameter.fileName7,e.parameter.fileName8,e.parameter.fileName9,e.parameter.fileName10,e.parameter.fileName11,e.parameter.fileName12,e.parameter.fileName13,e.parameter.fileName14,e.parameter.fileName15,e.parameter.fileName16,e.parameter.fileName17); 
  
  var htmlOutput =  HtmlService.createTemplateFromFile('UploadFile');
  htmlOutput.message = 'File Uploaded';
  return htmlOutput.evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  
  
  
}


function listRecord(username,department,academicyear,semester, filename,filename2,filename3,filename4,filename5,filename6,filename7,filename8,filename9,filename10,filename11,filename12,filename13,filename14,filename15,filename16,filename17)
{
  var url = 'https://docs.google.com/spreadsheets/d/1VqGFXZtmTFvYnvXRO-8M0m3iB1w9tLlRnw6TEz6yOs0/edit#gid=0'; 
  var ss= SpreadsheetApp.openByUrl(url);
  var recordsSheet = ss.getSheetByName("Records");
  recordsSheet.appendRow([username,department,academicyear,semester, filename,filename2,filename3,filename4,filename5,filename6,filename7,filename8,filename9,filename10,filename11,filename12,filename13,filename14,filename15,filename16,filename17, new Date()]);
}

function getUrl() {
 var url = ScriptApp.getService().getUrl();
 return url;
}
