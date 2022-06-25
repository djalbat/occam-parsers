"use strict";

export default class TerminalPart {
  isNonTerminalPart() {
    const nonTerminalPart = false;

    return nonTerminalPart;
  }

  isTerminalPart() {
    const terminalPart = true;
    
    return terminalPart;
  }

  isNoWhitespacePart() {
    const noWhitespacePart = false;

    return noWhitespacePart;
  }
}
