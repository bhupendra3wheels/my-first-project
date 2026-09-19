function reverse(str) {
  return str.split('').reverse().join('');
}

function isPalindrome(str) {
  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return clean === reverse(clean);
}

function countWords(str) {
  return str.trim().split(/\s+/).length;
}

module.exports = { reverse, isPalindrome, countWords };
