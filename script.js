var currentDay = $("#currentDay");
currentDay.text(moment().format('dddd, MMMM Do')); // shows current date on header of the page
console.log(moment().hour()) // shows current hour in the console to have a better guidance for scheduler

var block = [9,10,11,12,13,14,15,16,17]; // business hours
var i=0;
var currentHour= moment().hour() //function that shows if the events are in the past, present, or future by using Jquery 
$(".row").each(function(){
    if (currentHour>block[i]){
        $(this).children(".col-sm-10").children("textarea").addClass("past")

    }
    else if(currentHour===block[i]){
        $(this).children(".col-sm-10").children("textarea").addClass("present")
    }
    else {
        $(this).children(".col-sm-10").children("textarea").addClass("future")
    }
    $(this).children(".col-sm-10").children("textarea").val(localStorage.getItem(block[i])) // returns the value(events) of the Storage Object item
    i++

})

$("input").on("click",function(){ // function to save events

  //var text=  $(this).parent(".col-sm-1").parent(".row").children(".col-sm-10").children("textarea").val()
  // either jquery way works for this function

  var text= $(this).parent(".col-sm-1").siblings(".col-sm-10").children("textarea").val()
  var id= $(this).parent(".col-sm-1").parent(".row").attr("data-id")
  localStorage.setItem(id,text) // set the values of the specified storage object item
})