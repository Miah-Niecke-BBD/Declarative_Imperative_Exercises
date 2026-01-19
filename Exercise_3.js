// 3. Write a function that will calculate the sum the even numbers on the range a to b (inclusive)

function imperativeEvenSum(a, b) {
  let evenSum = 0;

  for (let i = a; i <= b; i++) {
    if (i % 2 == 0) evenSum += i;
  }

  return evenSum;
}

function declarativeEvenSum(a, b) {
  let firstEven = a % 2 === 0 ? a : a + 1;
  let lastEven = b % 2 === 0 ? b : b - 1;

  let n = (lastEven - firstEven) / 2 + 1;

  return (n * (firstEven + lastEven)) / 2;
}