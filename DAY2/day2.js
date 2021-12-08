// let fs = require("fs");
// let puzzleInput = fs
//   .readFileSync("day2Input.txt", { encoding: "utf-8" })
//   .split("\n")
//   .filter((x) => Boolean(x))
//   .map((x) => {
//     let data = x.split(" ");
//     return [data[0], parseInt(data[1])];
//   });

// console.log(puzzleInput);

// let hPos = 0;
// let depth = 0;

// puzzleInput.forEach((el) => {
//   if (el[0] === "forward") {
//     hPos += el[1];
//   }
//   if (el[0] === "up") {
//     depth -= el[1];
//   }
//   if (el[0] === "down") {
//     depth += el[1];
//   }
// });

// console.log(hPos * depth);

const fs = require("fs");

const lines = fs
  .readFileSync("day2Input.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => Boolean(x))
  .map((x) => {
    const [direction, n] = x.split(" ");
    return {
      direction,
      x: parseInt(n),
    };
  });

let submarine = {
  position: 0,
  depth: 0,
};

for (const line of lines) {
  switch (line.direction) {
    case "forward":
      submarine.position += line.x;
      break;
    case "down":
      submarine.depth += line.x;
      break;
    case "up":
      submarine.depth -= line.x;
      break;
  }
}

console.log(submarine.position * submarine.depth);
