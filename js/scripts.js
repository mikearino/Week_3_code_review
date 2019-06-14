$(document).ready(function(){
  console.log("jQuery is working!")
  $("form#formOne").submit(function(event){
    event.preventDefault();
    var userNumber = parseInt($("input#input").val());
    // countArray.push(userNumber)
    roboCount(userNumber);
    roboCheck(newArray);
  })
})



newArray = []
function roboCount(userNumber) {

  for (var i=0; i < userNumber; i++) {
       newArray.push(i)
      // console.log(i + userNumber)
       console.log(newArray)
    }
  };


    // if (userNumber[i] === NaN) {
    //   return
    // } else if (userNumber[i] === ) {}
  // }
