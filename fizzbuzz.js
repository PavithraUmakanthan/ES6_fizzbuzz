const fizzbuzz = (number) => {
  if (typeof number === 'undefined'){
    return ({status: 403, message:'Sorry, you passed null value'});
  } else if (number > 100){
    return ({status: 404, message:'Sorry, the number is greater than 100'});
  } else if (typeof number === 'string'){
    return ({status: 400, message: `Sorry, ${number} is not an integer`});
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


