#!/usr/bin/node
const myVar = process.argv;
if (typeof myVar[2] === 'undefined') {
  console.log('No argument');
} else {
  console.log(myVar[2]);
}
