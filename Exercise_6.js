// 6. Write a function that will calculate the sum the numbers based on their remainder
// when divided by n on the range a to b (inclusive) return a map (key being "0 mod n", "1 mod n" ... "(n-1) mod n")

function imperativeRemainderOfNSum(n, a, b) {
  const modDictionary = {};

  for (let i = 0; i < n; i++) {
    modDictionary[`${i} mod ${n}`] = 0;
  }

  for (let i = a; i <= b; i++) {
    modDictionary[`${i % n} mod ${n}`] += i;
  }
  return modDictionary;
}

function declarativeRemainderOfNSum(n, a, b) {
  let array = Array.from({ length: b - a + 1 }, (_, i) => a + i);

  const modDictionary = Object.fromEntries(
    Array.from({ length: n }, (_, i) => [`${i} mod ${n}`, 0]),
  );

   return array.reduce((acc, num) => {
    const key = `${num % n} mod ${n}`;
    acc[key] += num;
    return acc;
  }, modDictionary);
}
