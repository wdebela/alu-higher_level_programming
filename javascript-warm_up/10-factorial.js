#!/usr/bin/node
function factorial (myVar) {
  let answer = 1;
  if (typeof myVar[2] === 'undefined' || Number(myVar[2]) === 0 || Number(myVar[2]) === 1) {
    return answer;
  } else {
    for (let i = Number(myVar[2]); i >= 1; i--) { answer = answer * i; }
    return answer;
  }
}

const myVar1 = process.argv;
const answer = factorial(myVar1);
console.log(answer);
