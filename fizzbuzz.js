const fizzbuzz = number => {
  if (number % 3 === 0 && number % 5 === 0) {
    return 'fizzbuzz';
  } else if (number % 3 === 0) {
    return 'fizz';
  } else if (number % 5 === 0) {
    return 'buzz';
  }
  return number;
}

const main = () => {
  const array = [...Array(100).keys()].map(x => ++x);
  for (const i of array) {
    console.log(fizzbuzz(i));
  }
}
main();

const test = () => {
  const array = [4, 15, 20, 21];
  for (const i of array) {
    fizzbuzz(array[i]);
  }
}
test();
