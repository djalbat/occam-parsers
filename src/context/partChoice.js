"use strict";

import Context from "../context";

export default class PartChoiceContext extends Context {
  constructor(context, state, childNodes, precedence, callAheadParts, partChoide) {
    super(context, state, childNodes, precedence, callAheadParts);

    this.partChoice = partChoide;
  }

  getPartChoice() {
    return this.partChoice;
  }

  static fromPartChoice(partChoice, context) {
    const partChoiceContext = Context.fromNothing(PartChoiceContext, partChoice, context);

    return partChoiceContext;
  }
}
