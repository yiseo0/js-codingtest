let fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split("\n");

let testCase = input[0];
let answer = 0;

const check = (data) => {
  let setData = new Set(data[0]);
  for (let i = 0; i < data.length - 1; i++) {
    if (data[i] != data[i + 1]) {
      if (setData.has(data[i + 1])) {
        return false;
      } else {
        setData.add(data[i + 1]);
      }
    }
  }
  return true;
};

for (let i = 1; i <= testCase; i++) {
  if (check(input[i])) {
    answer += 1;
  }
}

console.log(answer);
