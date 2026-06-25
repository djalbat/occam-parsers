"use strict";

import Context from "../context";

export default class PartChoiceContext extends Context {
  static fromPartChoice(partChoice, context) {
    const precedence = partChoice.getPrecedence(),
          partChoiceContext = Context.fromPrecedence(PartChoiceContext, precedence, context);

    return partChoiceContext;
  }
}
