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

  isCutPart() {
    const cutPart = false;

    return cutPart;
  }

  isEpsilonPart() {
    const epsilonPart = false;

    return epsilonPart;
  }

  isNoWhitespacePart() {
    const noWhitespacePart = false;

    return noWhitespacePart;
  }

  compose(frame, partFrame) { return frame.merge(partFrame); }
}
