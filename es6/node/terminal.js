'use strict';

class TerminalNode {
  constructor(str) {
    this.str = str;
  }

  toString() {
    return this.getStr();
  }

  getStr() {
    return this.str;
  }
}

module.exports = TerminalNode;
