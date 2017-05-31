// Saves options to chrome.storage
function save_options() {
  var calendarEnabled = document.getElementById('calendar').checked;
  var driveEnabled = document.getElementById('drive').checked;
  var sheetsEnabled = document.getElementById('sheets').checked;
  var docsEnabled = document.getElementById('docs').checked;

//Save the settings
  chrome.storage.sync.set({
      calendar : calendarEnabled,
      drive : driveEnabled,
      sheets : sheetsEnabled,
      docs : docsEnabled
}, function() {
          // Notify that we saved.
          document.getElementById("status").style.display = 'block';
          document.getElementById("status").innerHTML ='Settings saved! Please reload Gmail.';
        });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
    chrome.storage.sync.get({
        calendar: true,
        drive: true,
        sheets : true,
        docs : true
    }, function(items){
        document.getElementById("calendar").checked = items.calendar;
        document.getElementById("drive").checked = items.drive;
        document.getElementById("docs").checked = items.docs;
        document.getElementById("sheets").checked = items.sheets;
    });

    //Get app version from manifest
    var version = chrome.app.getDetails().version;
    //Display app version
    document.getElementById("version").innerHTML = "Version " + version;
}
//Restore setting on DOM load
document.addEventListener('DOMContentLoaded', restore_options);
//Add event to save button click
document.getElementById('save').addEventListener('click', save_options);