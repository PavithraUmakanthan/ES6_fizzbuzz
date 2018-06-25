const Error = require('./statusCodes.js');

const fizzbuzz = (number) => {
  if (typeof number === 'undefined'){
    return (Error.NullValue);
  } else if (number > 100){
    return (Error.ErrorString);
  } else if (typeof number === 'string'){
    return (Error.ErrorLargeNumber);
  } else if ((number % 3 === 0) && (number % 5 === 0)) {
      return 'fizzbuzz';
  } else if (number % 3 === 0) {
      return 'fizz';
  } else if (number % 5 === 0) {
      return 'buzz';
  } else {
      return number;
  }
}
module.exports = {
  fizzbuzz: fizzbuzz
};

/* const main = () => {
  for (var i = 1; i <= 100; i++) {
    console.log(fizzbuzz(i));
  }
}
main(); */



