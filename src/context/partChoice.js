"use strict";

import Context from "../context";

export default class PartChoiceContext extends Context {
  constructor(context, state, childNodes, precedence) {
    super(context, state, childNodes);

    this.precedence = precedence;
  }

  getPrecedence() {
    return this.precedence;
  }

  calledAhead() {
    debugger
  }

  commit() {
    const context = this.getContext();

    // context.updatePrecedence(this.precedence);

    super.commit();
  }

  static fromPartChoice(partChoice, context) {
    const precedence = partChoice.getPrecedence(),
          partChoiceContext = Context.fromNothing(PartChoiceContext, precedence, context);

    return partChoiceContext;
  }
}
