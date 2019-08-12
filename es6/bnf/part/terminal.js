'use strict';

class TerminalPart {
  constructor(noWhitespace) {
    this.noWhitespace = noWhitespace;
  }

  hasNoWhitespace() {
    return this.noWhitespace;
  }

  isNonTerminalPart() {
    const nonTerminalPart = false;

    return nonTerminalPart;
  }

  isTerminalPart() {
    const terminalPart = true;
    
    return terminalPart;
  }

  isEpsilonPart() {
    const epsilonPart = false;
    
    return epsilonPart;
  }

  setNoWhitespace(noWhitespace) {
    this.noWhitespace = noWhitespace;
  }

  clone(Part, ...remainingArguments) { return new Part(this.noWhitespace, ...remainingArguments); }
}

module.exports = TerminalPart;
