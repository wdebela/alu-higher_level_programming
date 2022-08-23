#!/usr/bin/node
const myVar = process.argv;
if (myVar[2] == 'undefined') {
  console.log('Not a number');
} else if (Number(myVar[2]) !== 'undefined' && !isNaN(parseInt(myVar[2]))) {
  console.log('My number is: '+ Math.floor(Number(myVar[2])));
} else {
  console.log('Not a number');
}
