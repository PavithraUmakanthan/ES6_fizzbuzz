
const fizzbuzz = (x) => {
        if ((x % 3 === 0)&& (x % 5 === 0)){
            console.log(`fizzbuzz`);
        } else if (x % 3 === 0) {
            console.log(`fizz`);
        } else if(x % 5 === 0){
            console.log(`buzz`);
        } else{
          	console.log(x);
        }
    };
const main = () => {
    for (var i = 1; i <= 100; i++) {
		fizzbuzz(i);
     }
  }
main();
   