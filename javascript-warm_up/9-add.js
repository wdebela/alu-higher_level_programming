#!/usr/bin/node
const myVar = process.argv;
if (typeof myVar[2] === 'undefined') {
  console.log('NaN');
} else if (myVar[3] === 'undefined') {
  console.log('NaN');
} else {
  console.log(Number(myVar[2]) + Number(myVar[3]));
}
