function calculateAverage(numbers) {
    if (numbers.length === 0) {
      return 0;
    }
  
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
  
    var average = sum / numbers.length;
    return average;
  }
  const averageNumber = (array) => array.reduce((a, b) => a + b) / array.length;
  console.log(averageNumber([1, 2, 3, 4, 5, 6, 7, 8, 9,10,11]));