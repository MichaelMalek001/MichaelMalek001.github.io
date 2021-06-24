const setDateFormat = "mm/dd/yy";
var unavailableDates = ["01/29/2021"];
function disableDates(date) {
    // Sunday is Day 0 and Saturday is Day 1, disable all Sundays and Saturdays
    if (date.getDay() === 0 || date.getDay() == 6)
        return [false];
    var choice = document.getElementById("selectedDoc").value;
    if (choice == "1"){
        if (date.getDay() == 2 || date.getDay() == 3 || date.getDay() == 4){
            return [false];
        }
    }
    else if (choice == "2"){
        if (date.getDay() == 1 || date.getDay() == 3 || date.getDay() == 5){
            return [false];
        }
    }
    else{
        if (date.getDay() == 1 || date.getDay() == 2 || date.getDay() == 4 || date.getDay() == 5){
            return [false];
        }
    }
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableDates.indexOf(string) === -1 ]
}

$(document).ready(function(){

    
    $( "#dateInput" ).datepicker(
        {
            dateFormat: setDateFormat,
            // no calendar before June 1rst 2021
            minDate: new Date('06/01/2021'),
            maxDate: '+4M',
            // used to disable some dates
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDates
        }
    );

});