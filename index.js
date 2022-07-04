function fibonacciGenerator(n) {
  var fibonacciNumbers = [];
  var i = 1;
  while (i <= n) {
    if (i == 1) {
      fibonacciNumbers.push(i - 1);
    } else if (i == 2) {
      fibonacciNumbers.push(i - 1);
    } else {
      fibonacciNumbers.push(fibonacciNumbers[i - 2] + fibonacciNumbers[i - 3]);
    }
    i++;
  }
  return fibonacciNumbers;
}
