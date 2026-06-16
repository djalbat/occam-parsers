"use strict";

import Context from "../context";

export default class PartChoiceContext extends Context {
  setPrecedence(precedence) {
    if (precedence === null) {
      return;
    }

    super.setPrecedence(precedence);
  }

  static fromPartChoice(partChoice, context) {
    const precedence = partChoice.getPrecedence(),
          partChoiceContext = Context.fromPrecedence(PartChoiceContext, precedence, context);

    return partChoiceContext;
  }
}
