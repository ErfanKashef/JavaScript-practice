// 1-return only even numbers.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = numbers.filter((number) => number % 2 === 0);

console.log(result);

// 2-Array Flattening
const Flattening = [1, [2, [3, [4]], 5]];

const Newflattening = Flattening.flat(3);

console.log(Newflattening);

// 3-Array Sort

function sortNumber(arr) {
  return arr.sort((a, b) => a - b);
}

console.log(sortNumber([3, 1, 2]));

// 4-Array Sort

function sortByKey(arr) {
  return arr.sort((a, b) => a - b);
}
const number = [5, 2, 1, 3, 4];
console.log(sortByKey(number));

// 5-Array Transformation
function transformArray(arr) {
  return arr.map((str) => {
    return {
      value: str,
      length: str.length,
    };
  });
}

const words = ["erfan", "hamid", "mohamed", "mohammed", "abdel", "abdallah"];
console.log(transformArray(words));

// Element Frequency Counter

function countFrequency(arr) {
  const freq = {};

  for (let item of arr) {
    if (freq[item]) {
      freq[item]++;
    } else {
      freq[item] = 1;
    }
  }

  return freq;
}

const input = ["a", "b", "a", "c", "b", "a"];
console.log(countFrequency(input));
