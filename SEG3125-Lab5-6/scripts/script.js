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

// function to validate a phone number
function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    var filter = /^[(]\d\d\d[)]-\d\d\d-\d\d\d\d$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

// function to validate a credit card
function validateCredit(credit) {
    var a = document.getElementById(credit).value;
    var filter = /^\d\d\d\d-\d\d\d\d-\d\d\d\d-\d\d\d\d$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

// function to validate first name and last name
function onlyLetters(name) {
    var a = document.getElementById(name).value;
    var filter = /^[A-Za-z]+$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

$(document).ready(function(){

    
    // Set the correct available dates corresponding to the expert chosen.
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

    // Jquery tool tip
    $(document).tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });

    // validate given phone number
    $("#givenPhone").on("change", function(){
        if (!validatePhone("givenPhone")){
            alert("Wrong phone number format. Format should be (xxx)-xxx-xxxx where x is a digit from 0-9");
            $("#givenPhone").val("(xxx)-xxx-xxxx");
            $("#givenPhone").addClass("error");
        }
        else {
            $("#givenPhone").removeClass("error");
        }
    });

    // validate given credit card
    $("#credit").on("change", function(){
        if (!validateCredit("credit")){
            alert("Wrong credit card format. Format should be xxxx-xxxx-xxxx-xxxx where x is a digit from 0-9");
            $("#credit").val("xxxx-xxxx-xxxx-xxxx");
            $("#credit").addClass("error");
        }
        else {
            $("#credit").removeClass("error");
        }
    });

    $("#btnSubmit").click(function() {
        var valid = true;
        var selectedDate = document.getElementById("dateInput").value;
        var errorMessage = "";
        if (selectedDate == ""){
            valid = false;
            errorMessage += "You must select a date.";
        }
        if (!onlyLetters("firstName")){
            errorMessage += "\nYou must give a first name containig letters only.";
            valid = false;
        }
        if (!onlyLetters("lastName")){
            errorMessage += "\nYou must give a last name containig letters only.";
            valid = false;
        }
        if (!validatePhone("givenPhone")){
            errorMessage += "\nWrong phone number format. Format should be (xxx)-xxx-xxxx where x is a digit from 0-9";
            valid = false;
            $("#givenPhone").val("(xxx)-xxx-xxxx");
        }

        if (!validateCredit("credit")){
            errorMessage += "\nWrong credit card format. Format should be xxxx-xxxx-xxxx-xxxx where x is a digit from 0-9";
            valid = false;
            $("#credit").val("xxxx-xxxx-xxxx-xxxx");
        }

        if(valid){
            var ccNum = document.getElementById("credit").value;
            var pNum = document.getElementById("givenPhone").value;
            var firstName = document.getElementById("firstName").value;
            var goodDate = document.getElementById("dateInput").value;
            var chosenServiceNum = document.getElementById("serviceChoice").value;
            var chosenService;
            if (chosenServiceNum == 1) {
                chosenService = "Soft Tissue Mobilization - 100$";
            }
            else if (chosenServiceNum == 2) {
                chosenService = "Acupuncture and Dry Needling - 90$";
            }
            else if (chosenServiceNum == 3) {
                chosenService = "Postural Retraining - 120$";
            }
            else if (chosenServiceNum == 4) {
                chosenService = "Exercise Therapy - 80$";
            }
            else if (chosenServiceNum == 5) {
                chosenService = "Gait, Balance and Co-Ordination Training - 150$";
            }

            var chosenDocNum = document.getElementById("selectedDoc").value;
            var goodDoc;
            if (chosenDocNum == 1) {
                goodDoc = "Dalila";
            }
            else if (chosenDocNum == 2) {
                goodDoc = "James";
            }
            else if (chosenDocNum == 3) {
                goodDoc = "John";
            }
            $('#exampleModal').modal('hide');
            alert(firstName + ", you have a booked an appointment on " + goodDate + ". The service you selected is " + chosenService + ". Your physiotherapist will be " + goodDoc + ". If we need to contact you, we will call " + pNum + ". Card " + ccNum + " will be charged.");
        }
        else {
            alert(errorMessage);
        }

      });
});