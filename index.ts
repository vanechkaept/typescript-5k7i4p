export function reverseWords(arr) {
  const first = arr
    .filter((el, i) => i % 2 === 0)
    .reduce((acc, el) => (acc += el), 0);
  const sec = arr
    .filter((el, i) => i % 2 !== 0)
    .reduce((acc, el) => (acc += el), 0);
  return [first, sec];
}


console.log(reverseWords([29, 83, 67, 53, 19, 28, 96]));
