function calculateAverage(numbers) {
    if (numbers.length === 0) {
      return 0;
    }
  
    var sum = numbers.reduce(function (acc, num) {
      return acc + num;
    }, 0);
  
    var average = sum / numbers.length;
    return average;
  }
  var emptyArray = [];
  var emptyResult = calculateAverage(emptyArray);
  console.log(emptyResult);