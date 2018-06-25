var NullValue = {
  status: 403, 
  message:'Sorry, you passed null value'
};

var ErrorString = {
  status: 404,
  message:'Sorry, the number is greater than 100'
};

var ErrorLargeNumber = {
  status: 400, 
  message: `Sorry, hello is not an integer`
};

module.exports = {
  NullValue: NullValue,
  ErrorString: ErrorString,
  ErrorLargeNumber: ErrorLargeNumber
};
