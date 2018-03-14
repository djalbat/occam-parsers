'use strict';

class TerminalPart {
  constructor(noWhitespace) {
    this.noWhitespace = noWhitespace;
  }
  
  isTerminalPart() {
    const terminalPart = true;
    
    return terminalPart;
  }
  
  isEpsilonPart() {
    const epsilonPart = false;
    
    return epsilonPart;
  }

  getNoWhitespace() {
    return this.noWhitespace; ///
  }
}

module.exports = TerminalPart;
