// 1. Write a function that will calculate the sum the numbers on the range 1 to 1 000 000 (inclusive)

function imperativeSum() {
  let sum = 0;

  for (let i = 1; i <= 1000000; i++) {
    sum += i;
  }
  return sum;
}

function declarativeSum() {
  let array = Array.from({ length: 1000000 }, (_, i) => i + 1);

  return array.reduce((acc, num) => acc + num, 0);
}