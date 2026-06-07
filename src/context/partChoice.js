"use strict";

import Context from "../context";

export default class PartChoiceContext extends Context {
  constructor(context, offset, index, childNodes, precedence) {
    super(context, offset, index, childNodes);

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

    // context.setPrecedence(this.precedence);

    super.commit();
  }

  static fromPartChoice(partChoice, context) {
    const precedence = partChoice.getPrecedence(),
          partChoiceContext = Context.fromNothing(PartChoiceContext, precedence, context);

    return partChoiceContext;
  }
}
