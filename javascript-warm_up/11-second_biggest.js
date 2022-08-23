#!/usr/bin/node
const myVar = process.argv;
if (typeof myVar[2] === 'undefined') {
  console.log(0);
} else if (typeof myVar[3] === 'undefined') {
  console.log(0);
} else {
  const Arr = myVar.map(Number);
  Arr.sort();
  console.log(Arr.length - 1);
}
