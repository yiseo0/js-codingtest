let fs = require("fs");
let [hour, minute] = fs
  .readFileSync("example.txt")
  .toString()
  .split(" ")
  .map(Number);

let newTime = hour * 60 + minute - 45;
if (newTime < 0) newTime += 24 * 60;

let newHour = parseInt(newTime / 60);
let newMinute = newTime % 60;

console.log(newHour, newMinute);
