#!/usr/bin/node
const myVar = process.argv;
if (typeof myVar[2] === 'undefined') {
  console.log(0);
} else if (typeof myVar[3] === 'undefined') {
  console.log(0);
} else {
  let Arr = myVar.slice(2).map(Number);
  Arr = Arr.sort(function(a, b){return b-a});
  console.log(Arr[1]);
}
