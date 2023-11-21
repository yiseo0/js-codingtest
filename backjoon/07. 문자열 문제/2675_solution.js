// 기존 코드 개선
// let fs = require("fs");
// let input = fs.readFileSync("example.txt").toString().split("\n");

// input.forEach((item) => {
//   let [numStr, chars] = item.split(" ");
//   let num = Number(numStr);
//   let answer = "";

//   for (let char of chars ?? []) {
//     answer += char.repeat(num);
//   }

//   console.log(answer);
// });

// 강의 풀이
// let fs = require("fs");
// let input = fs.readFileSync("example.txt").toString().split("\n");
// let testCase = Number(input[0]);
// for (let i = 1; i <= testCase; i++) {
//   let [numStr, chars] = input[i].split(" ");
//   let result = "";
//   for (let j = 0; j < chars.length; j++) {
//     result += chars[j].repeat(numStr)
//   }
//   console.log(result);
// }

// 최종 풀이
let fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split("\n");
let testCase = Number(input[0]);

for (let i = 1; i <= testCase; i++) {
  let [numStr, chars] = input[i].split(" ");
  let answer = "";
  for (let char of chars) {
    answer += char.repeat(numStr);
  }
  console.log(answer);
}
