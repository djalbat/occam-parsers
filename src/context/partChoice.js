"use strict";

import Frame from "../frame";
import Context from "../context";

import { isValid } from "../utilities/frame";

export default class PartChoiceContext extends Context {
  constructor(context, state, continuations, precedence) {
    super(context, state, continuations);

    this.precedence = precedence;
  }

  getPrecedence() {
    return this.precedence;
  }

  static fromPartChoice(partChoice, context) {
    const precedence = partChoice.getPrecedence(),
          partChoiceContext = Context.fromNothing(PartChoiceContext, precedence, context);

    return partChoiceContext;
  }
}
