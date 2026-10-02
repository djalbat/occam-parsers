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

  compose(frame, partFrame = null) {
    const partFrameValid = isValid(partFrame);

    if (partFrameValid) {
      frame = frame.merge(partFrame);
    }

    let precedence;

    const childNodes = frame.getChildNodes();

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
