'use strict';

class Context {
  constructor() {
    this.index = 0;
  }

  getIndex() {
    return this.index;
  }

  setIndex(index) {
    this.index = index;
  }

  advance(amount) {
    this.index += amount;
  }

  backtrack(savedIndex) {
    var index = savedIndex; ///
    
    this.setIndex(index);
  }
}

module.exports = Context;
