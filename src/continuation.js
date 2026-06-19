"use strict";

export default class Continuation {
  constructor(initialPart, finalPart) {
    this.initialPart = initialPart;
    this.finalPart = finalPart;
  }

  getInitialPart() {
    return this.initialPart;
  }

  getFinalPart() {
    return this.finalPart;
  }

  matchFinalPart(part) {
    const finalPartMatches = (this.finalPart === part);

    return finalPartMatches;
  }

  static fromRuleNamePart(ruleNamePart, context) {
    let continuation = null;

    const ruleNamePartContinuation = ruleNamePart.isContinuation();

    if (ruleNamePartContinuation) {
      const nextPart = context.getNextPart();

      if (nextPart !== null) {
        const initialPart = ruleNamePart, ///
              finalPart = nextPart; ///

        continuation = new Continuation(initialPart, finalPart);
      }
    }

    return continuation;
  }
}
