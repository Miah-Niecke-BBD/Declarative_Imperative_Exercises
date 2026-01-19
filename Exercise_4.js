// 4. Write a function that will calculate the sum of the even and odd numbers (separately)
// on the range a to b (inclusive) return a map (string keys being "even" and "odd")

function imperativeEvenOddSum(a, b) {
  let even = 0;
  let odd = 0;

  for (let i = a; i <= b; i++) {
    if (i % 2 === 0) {
      even += i;
    } else {
      odd += i;
    }
  }

  return { even: even, odd: odd };
}

function declarativeEvenOddSum(a, b) {
  let array = Array.from({ length: b - a + 1 }, (_, i) => a + i);

  return {
    even: array.reduce((acc, num) => {
      if (num % 2 === 0) return acc + num;
      return acc;
    }, 0),
    odd: array
      .filter((num) => num % 2 !== 0)
      .reduce((acc, num) => acc + num, 0),
  };
}
