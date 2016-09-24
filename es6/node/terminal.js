'use strict';

class TerminalNode {
  constructor(str) {
    this.str = str;
  }

  getStrArray() {
    var str = this.str + '~',
        strArray = [str];
    
    return strArray;
  }
  
  getDepth() {
    var depth = 0;
    
    return depth;
  }

  getStr() {
    return this.str;
  }
}

module.exports = TerminalNode;
