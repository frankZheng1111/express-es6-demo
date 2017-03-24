class Base {
  constructor() {
    this.initAt = new Date();
  }

  sayHi() {
    return `Hello World! ${this.initAt}`;
  }
}

export default Base
