'use strict';

class Context {
  constructor() {
    this.index = 0;
    
    this.savedIndex = undefined;  ///
  }

  getIndex() {
    return this.index;
  }

  advance(amount) {
    this.index += amount;
  }
  
  saveIndex() {
    this.savedIndex = this.index;
  }

  backtrack() {
    this.index = this.savedIndex;
  }
}

module.exports = Context;
