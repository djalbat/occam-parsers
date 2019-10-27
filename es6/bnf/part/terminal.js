'use strict';

class TerminalPart {
  constructor(nonWhitespace) {
    this.nonWhitespace = nonWhitespace;
  }

  hasNonWhitespace() {
    return this.nonWhitespace;
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

  setNonWhitespace(nonWhitespace) {
    this.nonWhitespace = nonWhitespace;
  }

  clone(Part, ...remainingArguments) { return new Part(...remainingArguments, this.nonWhitespace); }
}

module.exports = TerminalPart;
