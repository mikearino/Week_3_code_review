$(document).ready(function(){
  console.log("jQuery is working!")
  $("form#formOne").submit(function(event){
    event.preventDefault();
    var userNumber = parseInt($("input#input").val());
    console.log(userNumber)
    var runBot = roboCount(userNumber);
  })
})
