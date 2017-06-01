$(document).ready(function () {
    //Reload icons config on dom load
    reload();
});

function reload() {
    //Remove all the current icons and then proceed loading them again
    $(".customButton").remove();
    //Get the toolbar element
    var div = $(".gb_ib")[0];
    var buttons = "";
    //Get the current settings saved
    chrome.storage.sync.get({
        calendar: true,
        drive: true,
        sheets: true,
        docs: true
    }, function (items) {
        //Enable/Disable buttons based on the saved settings
        if (items.calendar) {
            var btn = $(".gb_Z:has(a:has(span:contains('Calendar')))");
            if (btn[0] != undefined)
                div.prepend(btn.clone().addClass("customButton")[0]);
        }
        if (items.sheets) {
            var btn = $(".gb_Z:has(a:has(span:contains('Hojas'), :contains('Spread'), :contains('Sheets')))");
            if (btn[0] != undefined)
                div.prepend(btn.clone().addClass("customButton")[0]);
        }
        if (items.docs) {
            var btn = $(".gb_Z:has(a:has(span:contains('Doc')))");
            if (btn[0] != undefined)
                div.prepend(btn.clone().addClass("customButton")[0]);
        }
        if (items.drive) {
            var btn = $(".gb_Z:has(a:has(span:contains('Drive')))");
            if (btn[0] != undefined)
                div.prepend(btn.clone().addClass("customButton")[0]);
        }
        //Align icons and remove text
        $(".customButton").css("height", "80px").css("width", "60px").find(".gb_3").remove();
    });
}