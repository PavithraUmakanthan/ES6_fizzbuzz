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
  console.log(tools.fizzbuzz());

}
errorNull();

const errorLargerNumber = () => {
  console.log(tools.fizzbuzz(549));

}
errorLargerNumber();

const errorString = () => {
  console.log(tools.fizzbuzz('hello'));

}
errorString();