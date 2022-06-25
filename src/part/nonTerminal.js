"use strict";

export default class NonTerminalPart {
  constructor(type) {
    this.type = type;  
  }
  
  getType() {
    return this.type;
  }

  isNonTerminalPart() {
    const nonTerminalPart = true;

    return nonTerminalPart;
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
