export function reverseWords(str: string): string {
  return str
    .split(' ')
    .map(el =>
      el
        .split('')
        .reverse()
        .join('')
    )
    .join(' ');
}

console.log(reverseWords('Sample Test Cases'));
