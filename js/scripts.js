$(document).ready(function(){
  console.log("jQuery is working!")
  $("form#formOne").submit(function(event){
    event.preventDefault();
    var userNumber = parseInt($("input#input").val());
    // countArray.push(userNumber)
    roboCount(userNumber);
    var endResult = roboCheck(newArray);
     $("#output").append(newArray + "<br>");
  })
})



newArray = [ ]
finalArray = []
function roboCount(userNumber) {

  for (var i=1; i <=userNumber; i++) {
       newArray.push(i)
      // console.log(i + userNumber)
       console.log(newArray)
    }
};


function roboCheck(newArray) {

console.log("working")
  for (var i=0; i < newArray.length; i++) {
      if (newArray[i] === 1 || newArray[i] === 11 || newArray[i] === 21 || newArray[i] === 31 || newArray[i] === 41 || newArray[i] === 51 || newArray[i] === 61 || newArray[i] === 71 || newArray[i] === 81 || newArray[i] === 91) {
        newArray[i] = (" Beep")
      } else if (newArray[i] === 2 || newArray[i] === 12 || newArray[i] === 22 || newArray[i] === 32 || newArray[i] === 42 || newArray[i] === 52 || newArray[i] === 62 || newArray[i] === 72 || newArray[i] === 82 || newArray[i] === 92) {
        newArray[i] = (" Boop!")
      } else if (newArray[i] === 3 || newArray[i] === 13 || newArray[i] === 23 || newArray[i] === 33 || newArray[i] === 43 || newArray[i] === 53 || newArray[i] === 63 || newArray[i] === 73 || newArray[i] === 83 || newArray[i] === 93) {
        newArray[i] = (" I'm sorry, Dave. I'm afraid I can't do that.")
      } else if (newArray[i] >= 100) {
        newArray[i] = (" Robo counters batteries are low")
      }
      //  finalArray.push(i)
      // console.log(i + userNumber)
      //  console.log(newArray)
    }
};


    // if (userNumber[i] === NaN) {
    //   return
    // } else if (userNumber[i] === ) {}
  // }
