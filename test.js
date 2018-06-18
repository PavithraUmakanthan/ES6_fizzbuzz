const tools = require('./fizzbuzz.js');
const test = () => {
    const array = [4, 15, 20, 21];
    for(var i of array) {  
        console.log(tools.fizzbuzz(i));
    }
  }
  test();
