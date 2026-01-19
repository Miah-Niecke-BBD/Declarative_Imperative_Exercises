// 5. Write a function that will calculate the sum of the numbers based on their remainder
// when divided by 3 on the range a to b (inclusive) return a map (key being "0 mod 3" and "1 mod 3" and "2 mod 3")

function imperativeRemainderOfThreeSum(a, b) {
  const modDictionary = {
    "0 mod 3": 0,
    "1 mod 3": 0,
    "2 mod 3": 0,
  };

  for (let i = a; i <= b; i++) {
    if (i % 3 === 0) {
      modDictionary["0 mod 3"] += i;
    } else if (i % 3 === 1) {
      modDictionary["1 mod 3"] += i;
    } else if (i % 3 === 2) {
      modDictionary["2 mod 3"] += i;
    }
  }

  return modDictionary;
}

function declarativeRemainderOfThreeSum(a, b) {
  let array = Array.from({ length: b - a + 1 }, (_, i) => a + i);

  return {
    "0 mod 3": array
      .filter((num) => num % 3 === 0)
      .reduce((acc, num) => acc + num, 0),
    "1 mod 3": array
      .filter((num) => num % 3 === 1)
      .reduce((acc, num) => acc + num, 0),
    "2 mod 3": array
      .filter((num) => num % 3 === 2)
      .reduce((acc, num) => acc + num, 0),
  };
}
