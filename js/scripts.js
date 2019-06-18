$(document).ready(function(){
  // console.log("jQuery is working!")
  $("form#formOne").submit(function(event){
    event.preventDefault();
    var userNumber = parseInt($("input#input").val());//33
    var returnedArray =  roboCount(userNumber);//[0...33]

    var mutatedArray = roboCheck(returnedArray);//mutated 0...33
    $("#output").text(mutatedArray);
  })



function roboCount(num) {
  var newArray = []

  for (var i=0; i <=num; i++) {
    newArray.push(i)
    // console.log(newArray)
  }
  return newArray
};

function roboCheck(newArray) {

  // console.log("working")
  for (var i=0; i < newArray.length; i++) {
    //newArray[i]=12
    var numLength = newArray[i].toString().length;

    for(var j=0; j< numLength; j++){
      var num = newArray[i]
      var digit = num[j]
    //newArray[j]=1
    //newArray[j]=2
      if (newArray[j] === 1 ) {
        newArray[i] = (" Beep")
      } else if (newArray[j] === 2 ){
        newArray[i] = (" Boop!")
      } else if (newArray[j] === 3 ){
        newArray[i] = (" I'm sorry, Dave. I'm afraid I can't do that.")
      } else if (newArray[j] >= 100) {
        newArray[i] = (" Funputers batteries are low")
      }
    }
  }
  return newArray
};

var experiment = roboCheck([12, 123, 456]);
console.log(experiment);
})
