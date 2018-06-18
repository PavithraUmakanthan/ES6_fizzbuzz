const fizzbuzz = (number) => {
  if ((number % 3 === 0) && (number % 5 === 0)) {
      return 'fizzbuzz';
  } else if (number % 3 === 0) {
      return 'fizz';
  } else if (number % 5 === 0) {
      return 'buzz';
  }
  return number;
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

