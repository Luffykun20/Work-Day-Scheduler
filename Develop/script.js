var currentDay = $("#currentDay");
currentDay.text(moment())
console.log(moment().hour())

var block = [9,10,11,12,13,14,15,16,17];
var i=0;
var currentHour= moment().hour()
$(".row").each(function(row){
    if (currentHour>block[i]){
        $(this).children(".col-sm-10").children("textarea").addClass("past")

    }
    else if(currentHour===block[i]){
        $(this).children(".col-sm-10").children("textarea").addClass("present")
    }
    else {
        $(this).children(".col-sm-10").children("textarea").addClass("future")
    }
    $(this).children(".col-sm-10").children("textarea").val(localStorage.getItem(block[i]))
    i++

})

$("button").on("click",function(){
  //var text=  $(this).parent(".col-sm-1").parent(".row").children(".col-sm-10").children("textarea").val()
  var text= $(this).parent(".col-sm-1").siblings(".col-sm-10").children("textarea").val()
  alert(text)
  var id= $(this).parent(".col-sm-1").parent(".row").attr("data-id")
  localStorage.setItem(id,text)
})