const statusCodes = require('./statusCodes.js');

const fizzbuzz = (number) => {
  if (typeof number === 'undefined')
    return statusCodes.errorundefined;

  if (number > 100)
    return statusCodes.errorlargenumber;

  if (typeof number === 'string')
    return statusCodes.errorstring;

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