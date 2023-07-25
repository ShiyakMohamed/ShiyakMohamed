function calculateAverage(numbers) {
    if (numbers.length === 0) {
      return 0;
    }
  
    var sum = numbers.reduce(function (acc, num) {
      return acc + num;
    }, 0);
  
    var average = sum / numbers.length;
    return average.toFixed(2); // Round the average to two decimal places
  }
  var myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  var result = calculateAverage(myNumbers);
  console.log(result);
  
  var ArrayNumber = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 20];
  var Result = calculateAverage(ArrayNumber);
  console.log(Result);