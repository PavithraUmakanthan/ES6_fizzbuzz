module.exports = class CustomError extends Error {
  constructor(...args) {
      super(...args);
      this.name = this.constructor.name;
      this.message = "Sorry, you passed null value";
  }
};

module.exports = class ErrorString extends Error {
  constructor(...args) {                           
      super(...args);
      this.name = this.constructor.name;
  }
};

module.exports = class ErrorLargeNumber extends Error {
  constructor(...args) {
      super(...args);
      //this.name = this.constructor.name;
  }
};
