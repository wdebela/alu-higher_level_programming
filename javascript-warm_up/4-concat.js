#!/usr/bin/node
const myVar = process.argv;
if (typeof myVar[2] === 'undefined') {
  console.log('undefined is undefined');
} else if (myVar[3] === 'undefined') {
  const myVar2 = ' is undefined';
  console.log(myVar[2].concat(myVar2));
} else {
  console.log(myVar[2] + ' is ' + myVar[3]);
}
