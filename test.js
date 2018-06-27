const fizzbuzz = require('./fizzbuzz.js');
const statusCodes = require('./statusCodes.js');

const assertEqual = (arg1, arg2, num) => {
  if (arg1 === arg2) {
    return `- passing: returned ${arg2} when called with the number ${num}`;
  }
  return `- failed: returned ${arg1} when called with the number ${num}`;
};

const testFizz = () => {
  const result = fizzbuzz(21);
  const result2 = 'fizz';
  console.log(`Print fizz for numbers divisible by 3 \
   ${assertEqual(result, result2, 21)}`);
};
testFizz();

const testBuzz = () => {
  const result = fizzbuzz(20);
  const result2 = 'buzz';
  console.log(`Print buzz for numbers divisible by 5 \
    ${assertEqual(result, result2, 20)}`);
};
testBuzz();

const testFizzbuzz = () => {
  const result = fizzbuzz(15);
  const result2 = 'fizzbuzz';
  console.log(`Print fizzbuzz for numbers divisible by 3 & 5 \
    ${assertEqual(result, result2, 15)}`);
};
testFizzbuzz();

const testNumber = () => {
  const result = fizzbuzz(4);
  const result2 = 4;
  console.log(`Print the number, if it is not divisible by 3 or 5 or both \
    ${assertEqual(result, result2, 4)}`);
};
testNumber();

const errorNull = () => {
  const result = fizzbuzz();
  const result2 = statusCodes.errorUndefined;
  if (result.message === result2.message) {
    console.log(`- passing: returned ${result2.message}`);
  } else {
    console.log(`- failed: returned ${result.message}`);
  }
};
errorNull();

const errorLargerNumber = () => {
  const result = fizzbuzz(549);
  const result2 = statusCodes.errorLargeNumber;
  if (result.message === result2.message) {
    console.log(`- passing: returned ${result2.message}`);
  } else {
    console.log(`- failed: returned ${result.message}`);
  }
};
errorLargerNumber();

const errorString = () => {
  const result = fizzbuzz('hello');
  const result2 = statusCodes.errorString;
  if (result.message === result2.message) {
    console.log(`- passing: returned ${result2.message}`);
  } else {
    console.log(`- failed: returned ${result.message}`);
  }
};
errorString();

const errorNullStatus = () => {
  const result = fizzbuzz();
  const result2 = statusCodes.errorUndefined;
  if (result.status === result2.status) {
    console.log(`- passing: returned ${result2.status} when called with undefined`);
  } else {
    console.log(`- failed: returned ${result.status} when called with undefined`);
  };
}
errorNullStatus();

const errorLargerNumberStatus = () => {
  const result = fizzbuzz(549);
  const result2 = statusCodes.errorLargeNumber;
  if (result.status === result2.status) {
    console.log(`- passing: returned ${result2.status} when called with 549`);
  } else {
    console.log(`- failed: returned ${result.status} when called with 549`);
  }
};
errorLargerNumberStatus();

const errorStringStatus = () => {
  const result = fizzbuzz('hello');
  const result2 = statusCodes.errorString;
  if (result.status === result2.status) {
    console.log(`- passing: returned ${result2.status} when called with hello`);
  } else {
    console.log(`- failed: returned ${result.status} when called with hello`);
  }
};
errorStringStatus();
