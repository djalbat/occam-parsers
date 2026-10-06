"use strict";

export default class NonTerminalPart {
  constructor(type, branching) {
    this.type = type;
    this.branching = branching;
  }
  
  getType() {
    return this.type;
  }

  isBranching() {
    return this.branching;
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

  compose(frame, partFrame) { return frame.merge(partFrame); }
}
