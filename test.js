const tools = require('./fizzbuzz.js');
/*const test = () => {
  const array = [4, 15, 20, 21];
  for(var i of array) {  
    console.log(tools.fizzbuzz(i));
  }
}
test();
*/

const assertEqual = (arg1, arg2, num) => {
  if (arg1 == arg2) {
    return `- passing: returned ${arg2} when called with the number ${num}`;
  }
  else {
    return `- failed: returned ${arg1} when called with the number ${num}`;
  }
}

const testfizz = () => {
    const result = tools.fizzbuzz(21);
    const result2 = "fizz";
    console.log(' Print fizz for numbers divisible by 3 '+ '\n'+
      assertEqual(result, result2, 21));
}
testfizz();

const testbuzz = () => {
  const result = tools.fizzbuzz(20);
  const result2 = "buzz";
  console.log(' Print buzz for numbers divisible by 5 '+ '\n'+
    assertEqual(result, result2, 20));
}
testbuzz();

const testfizzbuzz = () => {
  const result = tools.fizzbuzz(15);
  const result2 = "fizzbuzz";
  console.log(' Print fizzbuzz for numbers divisible by 3 & 5 '+ '\n'+
    assertEqual(result, result2, 15));
}
testfizzbuzz();

const testnumber = () => {
  const result = tools.fizzbuzz(4);
  const result2 = 4;
  console.log(' Print the number, if it is not divisible by 3 or 5 or both'+ '\n'+
    assertEqual(result, result2, 4));
}
testnumber();

const errorNull = () => {
  const result = tools.fizzbuzz();
  const result2 = {status: 403, message: 'Sorry, you passed null value'};
  if (result.message == result2.message) {
    console.log(`- passing: returned ${result2.message}`);
  }
  else {
    console.log(`- failed: returned ${result.message}`);
  }
}
errorNull();

const errorLargerNumber = () => {
  const result = tools.fizzbuzz(549);
  const result2 = {status: 404, message:'Sorry, the number is greater than 100'};
  if (result.message == result2.message) {
    console.log(`- passing: returned ${result2.message}`);
  }
  else {
    console.log(`- failed: returned ${result.message}`);
  }
}
errorLargerNumber();

const errorString = () => {
  const result = tools.fizzbuzz('hello');
  const result2 = {status: 400, message: `Sorry, hello is not an integer`};
  if (result.message == result2.message) {
    console.log(`- passing: returned ${result2.message}`);
  }
  else {
    console.log(`- failed: returned ${result.message}`);
  }
}
errorString();

const errorNullStatus = () => {
  const result = tools.fizzbuzz();
  const result2 = {status: 403, message: 'Sorry, you passed null value'};
  if (result.status == result2.status) {
    console.log(`- passing: returned ${result2.status} when called with undefined`);
  }
  else {
    console.log(`- failed: returned ${result.status} when called with undefined`);
  }
}
errorNullStatus();

const errorLargerNumberStatus = () => {
  const result = tools.fizzbuzz(549);
  const result2 = {status: 404, message:'Sorry, the number is greater than 100'};
  if (result.status == result2.status) {
    console.log(`- passing: returned ${result2.status} when called with 549`);
  }
  else {
    console.log(`- failed: returned ${result.status} when called with 549`);
  }
}
errorLargerNumberStatus();

const errorStringStatus = () => {
  const result = tools.fizzbuzz('hello');
  const result2 = {status: 400, message: `Sorry, hello is not an integer`};
  if (result.status == result2.status) {
    console.log(`- passing: returned ${result2.status} when called with hello`);
  }
  else {
    console.log(`- failed: returned ${result.status} when called with hello`);
  }
}
errorStringStatus();
