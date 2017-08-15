'use strict';

class NonTerminalPart {
  constructor(type) {
    this.type = type;  
  }
  
  getType() {
    return this.type;
  }
  
  isTerminalPart() {
    const terminalPart = false;
    
    return terminalPart;
  }
}

module.exports = NonTerminalPart;
