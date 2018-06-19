const tools = require('./fizzbuzz.js');

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
  