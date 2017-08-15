'use strict';

class TerminalPart {
  parse(noWhitespace = false) {
    this.noWhitespace = noWhitespace;
  }
  
  isTerminalPart() {
    const terminalPart = true;
    
    return terminalPart;
  }

  getNoWhitespace() {
    return this.noWhitespace; ///
  }
}

module.exports = TerminalPart;
