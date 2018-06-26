const statusCodes = require('./statusCodes.js');

const fizzbuzz = (number) => {
  if (typeof number === 'undefined')
    return statusCodes.errorUndefined;

  if (number > 100)
    return statusCodes.errorLargeNumber;

  if (typeof number === 'string')
    return statusCodes.errorString;

  if ((number % 3 === 0) && (number % 5 === 0)) {
      return 'fizzbuzz';
  } 
  
  if (number % 3 === 0) {
      return 'fizz';
  } 
  
  if (number % 5 === 0) {
      return 'buzz';
  }
  return number;
 }

 module.exports = fizzbuzz;