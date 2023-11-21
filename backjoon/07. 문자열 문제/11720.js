let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let answer = input[1].split("").reduce((acc, cur) => acc + Number(cur), 0);

console.log(answer);
