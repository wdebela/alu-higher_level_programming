#!/usr/bin/node
const myVar = process.argv;
if (Number(myVar[2]) !== 'undefined' && !isNaN(parseInt(myVar[2]))) {
  let sqrStr = '';
  for (let i = 0; i < Number(myVar[2]); i++) {
    for (let j = 0; j < Number(myVar[2]); j++) { sqrStr += 'X'; }
    sqrStr += '\n';
  }
  console.log(sqrStr.replace(/\n*$/, ''));
} else {
  console.log('Missing size');
}
