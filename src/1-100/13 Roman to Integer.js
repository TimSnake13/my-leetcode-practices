// 164ms, 76% faster 45.7MB, 40% less space
const romanToNum = (s) => {
  const romanNum = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const array = s.split("");
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    // Check order, behind > current
    if (i + 1 < array.length && romanNum[array[i + 1]] > romanNum[array[i]]) {
      // if true, result += behind - current
      result += romanNum[array[i + 1]] - romanNum[array[i]];
      // skip the next letter
      i++;
    } else {
      // else, result += current
      result += romanNum[array[i]];
    }
  }
  return result;
};
