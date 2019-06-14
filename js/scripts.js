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
      if (newArray[i] === 1) {
        newArray[i] = (" Beep")
      } else if (newArray[i] === 2) {
        newArray[i] = (" Boop!")
      } else if (newArray[i] === 3) {
        newArray[i] = (" I'm sorry, Dave. I'm afraid I can't do that.")
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
