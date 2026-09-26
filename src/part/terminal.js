"use strict";

export default class TerminalPart {
  isContinuation() {
    const continuation = false;

    return continuation;
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

  isNoWhitespacePart() {
    const noWhitespacePart = false;

    return noWhitespacePart;
  }
}
