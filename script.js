// Displaying today's date and day

var todayDate = moment().format('dddd, MMM Do YYYY');
$ ("#currentDay").html(todayDate);

$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        // Adding values of the description in JQuery
        var text = $(this).siblings(".description").val();

    //Save in local storage
    localStorage.setItem(time, text);

    })

function timeTracker() {
    // Current number of hours
    var timeNow = moment().hour();

    // Looping over timeblocks 
    $("time-block").each(function () {
        var blockTime = parseInt($(this).toLocaleString("id").split("hour")[1]);

        //Checking the time and adding the classes for background indicators



    })
}

})