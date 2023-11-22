let fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split(" ");

let [num1, num2] = input.map((num) => num.split("").reverse().join(""));
let maxNum = Math.max(num1, num2);

console.log(maxNum);
