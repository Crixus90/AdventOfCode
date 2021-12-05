let fs = require("fs");
let text = fs
  .readFileSync("input.txt")
  .toString("utf-8")
  .replace(/\r\n/g, "\n")
  .split("\n")
  .map(Number);
console.log(text);

function calculateIncrease(arr) {
  let numOfTimes = 0;

  for (let [i, el] of arr.entries()) {
    if (arr[i + 1] > el) {
      numOfTimes++;
    }
  }
  return numOfTimes;
}

let threeWindows = [];

for (const [i, el] of text.entries()) {
  if (i < text.length - 2) {
    threeWindows.push(el + text[i + 1] + text[i + 2]);
  }
}

console.log("this is it " + calculateIncrease(text));

//console.log(numOfTimes);
