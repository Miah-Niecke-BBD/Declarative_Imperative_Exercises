// 2. Write a function that will calculate the sum the numbers on the range a to b (inclusive)

function imperativeSumWithParams(a, b) {
  let sum = 0;

  for (let i = a; i <= b; i++) {
    sum += i;
  }

  return sum;
}

function declarativeSumWithParams(a, b) {
  let array = Array.from({ length: b - a + 1 }, (_, i) => a + i);

  return array.reduce((acc, num) => acc + num, 0);
}
