"use strict";

import Frame from "../frame";
import Context from "../context";

export default class PartChoiceContext extends Context {
  constructor(context, state, continuations, precedence) {
    super(context, state, continuations);

    this.precedence = precedence;
  }

  getPrecedence() {
    return this.precedence;
  }

  compose(frame) {
    const childNodes = frame.getChildNodes();

    let precedence;

    precedence = frame.getPrecedence();

    precedence = precedence || this.precedence; ///

    frame = Frame.fromChildNodesAndPrecedence(childNodes, precedence);

    return frame;
  }

  static fromPartChoice(partChoice, context) {
    const precedence = partChoice.getPrecedence(),
          partChoiceContext = Context.fromNothing(PartChoiceContext, precedence, context);

    return partChoiceContext;
  }
}
