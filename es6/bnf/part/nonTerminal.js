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

  isRuleNamePart() {
    const ruleNamePart = false;

    return ruleNamePart;
  }
}

module.exports = NonTerminalPart;
