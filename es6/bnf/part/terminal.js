'use strict';

class TerminalPart {
  constructor(noWhitespace) {
    this.noWhitespace = noWhitespace;
  }

  getNoWhitespace() {
    return this.noWhitespace;
  }

  isTerminalPart() {
    const terminalPart = true;
    
    return terminalPart;
  }

  isEpsilonPart() {
    const epsilonPart = false;
    
    return epsilonPart;
  }
}

module.exports = TerminalPart;
