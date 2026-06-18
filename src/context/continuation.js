"use strict";

import Context from "../context";

export default class ContinuationContext extends Context {
  commit(state) {
    debugger

    this.adjustState(state);

    const context = this.getContext(),
          childNodes = this.getChildNodes(),
          precedence = this.getPrecedence();

    context.addChildNodes(childNodes);

    context.setPrecedence(precedence);
  }

  static fromStateAndContinuationParts(state, continuationParts, context) { return Context.fromStateAndContinuationParts(ContinuationContext, state, continuationParts, context); }
}
