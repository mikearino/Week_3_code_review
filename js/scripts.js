$(document).ready(function() {
  // console.log("jQuery is working!")
  $('form#formOne').submit(function(event) {
    event.preventDefault();
    var userNumber = parseInt($('input#input').val());//33
    var returnedArray =  roboCount(userNumber);//[0...33]
    var countForBoops = roboCheck(returnedArray);
    console.log(countForBoops)



    $('#output').text(countForBoops);
  });

  function roboCount(num) {
    var newArray = [];


    for (var i = 0; i <= num; i++) {
      newArray.push(i);
    }

    return newArray;
  };
  function roboCheck(arrayOfNumbers) {


    // console.log("working")
    for (var y = 0; y < arrayOfNumbers.length; y++) {
      //newArray[i]=12
      // var stringNow = newArray[i].toString()
      // var arrayIntoString = input.toString()
      // var stringNow = [i].length.toString()
      var numberString = arrayOfNumbers[y].toString();
      
      if (numberString.includes(3)) {
        arrayOfNumbers[y] = "That's gonna be a no for me dave"
      } else if (numberString.includes(2)) {
        arrayOfNumbers[y] = 'Boop';
      }  else if (numberString.includes(1)) {
        arrayOfNumbers[y] = "beep";
      }
    }
    return arrayOfNumbers
  }
  //newArray[j]=1
  //newArray[j]=2

  // else if (newArray[j] === 2 ){
  //   newArray[i] = (" Boop!")
  // } else if (newArray[j] === 3 ){
  //   newArray[i] = (" I'm sorry, Dave. I'm afraid I can't do that.")
  // } else if (newArray[j] >= 100) {
  //   newArray[i] = (" Funputers batteries are low")
  // return input;

  //       }
  //     }
  // //   }
  // // };

  // var experiment = roboCheck([12, 123, 456, 444]);
  // console.log(experiment);
  //   }
  // }
});








// // console.log("working")
// for (var i=0; i < newArray.length; i++) {
  //   //newArray[i]=12
  //   var numLength = newArray[i].toString().length;
  //
  //   for(var j=0; j< numLength; j++){
    //     var num = newArray[i]
    //     var digit = num[j]
    //   //newArray[j]=1
    //   //newArray[j]=2
