"use strict";

export default class NonTerminalPart {
  constructor(type, lookAhead) {
    this.type = type;
    this.lookAhead = lookAhead;
  }
  
  getType() {
    return this.type;
  }

  isLookAhead() {
    return this.lookAhead;
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
