"use strict";

export default class TerminalPart {
  isCallAhead() {
    const callAhead = false;

    return callAhead;
  }

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

  isStartOfContentPart() {
    const startOfContentPart = false;

    return startOfContentPart;
  }
}
