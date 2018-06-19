const fizzbuzz = (number) => {
  if (typeof number === 'undefined'){
    return 'Sorry, you passed null value';
  } else if (number > 100){
    return 'Sorry, the number is greater than 100';
  } else if (typeof number === 'string'){
    return `Sorry, the ${number} is not an integer`;
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

