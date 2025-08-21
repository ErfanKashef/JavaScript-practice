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

// 6-Element Frequency Counter

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

// 7- time converter

function convertTo12Hour(time) {
  let [hour, minute] = time.split(":").map(Number);
  let period = hour >= 12 ? "PM" : "AM";
  hour = hour % 12;
  if (hour === 0) hour = 12;
  return `${hour}:${minute.toString().padStart(2, "0")} ${period}`;
}
console.log(convertTo12Hour("00:15"));
console.log(convertTo12Hour("12:00"));
console.log(convertTo12Hour("18:30"));
console.log(convertTo12Hour("09:05"));

// 8-checks if a number is within a specified range.
function isInRange(num, min, max) {
  return num >= min && num <= max;
}

console.log(isInRange(5, 1, 10)); // true
console.log(isInRange(0, 1, 10)); // false
console.log(isInRange(10, 1, 10)); // true

// 9-calculates Body Mass

function calculateBMI(weight, height) {
  const bmi = weight / (height * height);
  let category;
  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    category = "Normal weight";
  } else if (bmi >= 25 && bmi <= 29.9) {
    category = "Overweight";
  } else {
    category = "Obese";
  }
  return { bmi: bmi.toFixed(2), category };
}
console.log(calculateBMI(60, 1.7));
console.log(calculateBMI(45, 1.6));
console.log(calculateBMI(90, 1.75));
