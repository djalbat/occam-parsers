"use strict";

export default class NonTerminalPart {
  constructor(type, continunation) {
    this.type = type;
    this.continunation = continunation;
  }
  
  getType() {
    return this.type;
  }

  isContinuation() {
    return this.continunation;
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
