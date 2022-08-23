#!/usr/bin/node
const myVar = process.argv;
let sqrStr = '';
if (Number(myVar[2]) !== 'undefined' && !isNaN(parseInt(myVar[2]))) {
  for (let i = 1; i <= Number(myVar[2]); i++) {
    for (let j = 1; j <= Number(myVar[2]); j++) { sqrStr += 'X'; }
    sqrStr += '\n';
  }
  console.log(sqrStr);
} else {
  console.log('Missing size');
}
