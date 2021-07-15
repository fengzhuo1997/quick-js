const arrA = [1, 1];
const arrB = ["D", "C", "R", "B"];
const arrC = [1, null];

function isArrEqual(arrA, arrB) {
  return arrA.length === arrB.length && arrA.every((ele) => arrB.includes(ele));
}

// console.log(isArrEqual(arrA, arrB));
console.log(isArrEqual(arrA, arrC));
