$(document).ready(function () {
    //Reload icons config on dom load
    reload();
});

function reload() {
    //Remove all the current icons and then proceed loading them again
    $(".customButton").remove();
    //Get the current settings saved
    chrome.storage.sync.get({
        calendar: true,
        drive: true,
        sheets: true,
        docs: true
    }, function (items) {
        //Enable/Disable buttons based on the saved settings
        if (items.calendar) {
            appendButton("Calendar", "https://calendar.google.com/calendar/r", "https://www.gstatic.com/images/branding/product/1x/calendar_48dp.png")
        }
        if (items.sheets) {
            appendButton("Sheets", "https://docs.google.com/spreadsheets/u/0/", "https://www.gstatic.com/images/branding/product/1x/sheets_48dp.png")
        }
        if (items.docs) {
            appendButton("Docs", "https://docs.google.com/document/u/0/", "https://www.gstatic.com/images/branding/product/1x/docs_48dp.png")
        }
        if (items.drive) {
            appendButton("Drive", "https://drive.google.com/drive/u/0", "https://www.gstatic.com/images/branding/product/1x/drive_48dp.png")
        }
        //Align icons and remove text
        //$(".customButton").css("height", "80px").css("width", "60px").find(".gb_3").remove();
    });
}

function appendButton(buttonDesc, appLink, imgSrc){
    //Get the toolbar element
    var div = $(".gb_Zc.gb_4d");
    //Append the button
    div.append(
        $('<div class="gb_we gb_ue customButton">').append(
            $('<div class="zo" data-tooltip="'+ buttonDesc +'">').append(
                $('<a class="gb_ze gb_xe gb_tb" href="'+ appLink +'" target="_blank">').append(
                    $('<img style="opacity: 100;" src="'+ imgSrc +'">')
                )
            )  
        )
    );
}