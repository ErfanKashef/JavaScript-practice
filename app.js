// return only even numbers.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = numbers.filter((number) => number % 2 === 0);

console.log(result);

// Array Flattening
const Flattening = [1, [2, [3, [4]], 5]];

const Newflattening = Flattening.flat(3);

console.log(Newflattening);

// Array Sort

function sortNumber(arr) {
  return arr.sort((a, b) => a - b);
}

console.log(sortNumber([3, 1, 2]));

// Array Sort

function sortByKey(arr) {
  return arr.sort((a, b) => a - b);
}
const number = [5, 2, 1, 3, 4];
console.log(sortByKey(number));
