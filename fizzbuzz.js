
const fizzbuzz = (x) => {
        if ((x % 3 === 0)&& (x % 5 === 0)){
            return `fizzbuzz`;
        } else if (x % 3 === 0) {
            return `fizz`;
        } else if(x % 5 === 0){
            return `buzz`;
        } else {
          	return x;
        }
    };
const main = () => {
    for (var i = 1; i <= 100; i++) {
		console.log(fizzbuzz(i));
     }
  }
main();
   