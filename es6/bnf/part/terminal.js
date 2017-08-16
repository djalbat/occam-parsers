'use strict';

class TerminalPart {
  parse(noWhitespace = false) {
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
