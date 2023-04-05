function letterCombinations(digits) {
  if (!digits) {
    return [];
  }

  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  };

  function backtrack(digits, index, current, result) {
    if (index === digits.length) {
      result.push(current);
      return;
    }

    const letters = map[digits[index]];
    for (let i = 0; i < letters.length; i++) {
      backtrack(digits, index + 1, current + letters[i], result);
    }
  }

  const result = [];
  backtrack(digits, 0, '', result);
  return result.sort();
}
