let fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split("\n");

let [hour, minute] = input[0].split(" ").map(Number);
let timer = Number(input[1]);

let newTime = hour * 60 + minute + timer;
newTime %= 1440;

let newHour = parseInt(newTime / 60);
let newMinute = newTime % 60;

console.log(newHour, newMinute);
