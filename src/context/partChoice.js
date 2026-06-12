"use strict";

import Context from "../context";

export default class PartChoiceContext extends Context {
  constructor(context, state, childNodes, callAheadParts, partChoide) {
    super(context, state, childNodes, callAheadParts);

    this.partChoice = partChoide;
  }

  getPartChoice() {
    return this.partChoice;
  }

  getPrecedence() { return this.partChoice.getPrecedence(); }

  calledAhead() {
    debugger
  }

  static fromPartChoice(partChoice, context) {
    const partChoiceContext = Context.fromNothing(PartChoiceContext, partChoice, context);

    return partChoiceContext;
  }
}
