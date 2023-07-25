function performCalculations() {
    // Part 1: JavaScript function signature with input parameters and return type
    var number1 = parseFloat(document.getElementById("number1").value);
    var number2 = parseFloat(document.getElementById("number2").value);
    // Part 2: Calculate the sum of the two numbers and assign the result to a variable
    var sum = number1 + number2;
    // Part 3: Implement a conditional statement to check if the first number is divisible by
    the second number
    var isDivisible = number1 % number2 === 0;
    
    // Part 4: Calculate the square root of the second number using a built-in JavaScript
    function
    var squareRoot = Math.sqrt(number2);
    // Part 5: Display the results on the web page
    document.getElementById("result").innerHTML = "Sum: " + sum +
    "<br>First number divisible by the second number: " + (isDivisible ? "Yes" : "No")
    +
    "<br>Square root of the second number: " + squareRoot;
    }