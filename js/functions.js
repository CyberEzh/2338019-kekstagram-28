const CheckLengthString = (text, maxLength) => text.length <= maxLength;

CheckLengthString('проверяемая строка', 20);


const CheckPalindrome = (text) => {
  const textReady = text.toLowerCase().replaceAll(' ', '');
  return textReady.split('').reverse().join('') === textReady;
};

CheckPalindrome('Лёша на полке клопа нашёл ');

const extractNumber = (string) => {
  if (typeof string === 'number') {
    return string;
  }
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      result += string.at(i);
    }
  }
  return parseInt(result, 10);
};

extractNumber('1 кефир, 0.5 батона');

const getString = (string, minLength, pad) => {
  const actualPad = minLength - string.length;
  if (actualPad <= 0) {
    return string;
  }
  return pad.slice(0, actualPad % pad.length) + pad.repeat(actualPad / pad.length) + string;
};

getString('1', 4, '0');
