"use strict";

export default class NonTerminalPart {
  constructor(type, callAhead) {
    this.type = type;
    this.callAhead = callAhead;
  }
  
  getType() {
    return this.type;
  }

  isCallAhead() {
    return this.callAhead;
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
