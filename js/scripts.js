$(document).ready(function () {
  $('form#formOne').submit(function (event) {
    event.preventDefault();
    var userNumber = parseInt($('input#input').val());
    var returnedArray =  roboCount(userNumber);
    var countForBoops = roboCheck(returnedArray);
    console.log(countForBoops);
    $('#output').text(countForBoops);
  });

  function roboCount(num) {
    var newArray = [];
    for (var i = 0; i <= num; i++) {
      newArray.push(i);
    };

    return newArray;
  };

  function roboCheck(arrayOfNumbers) {
    for (var y = 0; y < arrayOfNumbers.length; y++) {
      var numberString = arrayOfNumbers[y].toString();
      if (numberString.includes(3)) {
        arrayOfNumbers[y] = "That's gonna be a no for me dave"
      } else if (numberString.includes(2)) {
        arrayOfNumbers[y] = 'Boop';
      }  else if (numberString.includes(1)) {
        arrayOfNumbers[y] = "beep";
      }
    }
    return arrayOfNumbers;
  }
});
