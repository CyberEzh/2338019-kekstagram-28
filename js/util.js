// Генератор рандомных чисел
const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

export {getRandomInteger};

// Возвращает случайный элемент массива
const getRandomArrayElement = (array) =>
  array[getRandomInteger(0, array.length - 1)];

export {getRandomArrayElement};
