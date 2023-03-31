function letterCombinations(input_digit) {
  //Complete the function
	const map = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  };

  let result = [];

  if (digits.length === 0) {
    return result;
  }

  function backtrack(combination, nextDigits) {
    if (nextDigits.length === 0) {
      result.push(combination);
    } else {
      const digit = nextDigits[0];
      const letters = map[digit];
      for (let i = 0; i < letters.length; i++) {
        const letter = letters[i];
        backtrack(combination + letter, nextDigits.slice(1));
      }
    }
  }

  backtrack('', digits);

  return result.sort();
}

module.exports = letterCombinations;
