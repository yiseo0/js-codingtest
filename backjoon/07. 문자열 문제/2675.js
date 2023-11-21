let fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split("\n");

input.forEach((item) => {
  let itemArr = item.split(" ");

  let num = Number(itemArr[0]);
  let answer = "";

  for (let i of itemArr[1] ?? []) {
    answer += i.repeat(num);
  }

  console.log(answer);
});
