"use strict";

import Context from "../context";

export default class ContinuationContext extends Context {
  commit() {
    let parsed;

    const state = this.getState(),
          context = this.getContext(),
          childNodes = this.getChildNodes(),
          precedence = this.getPrecedence();

    context.adjustState(state);

    context.addChildNodes(childNodes);

    context.setPrecedence(precedence);

    parsed = context.commit();

    return parsed;
  }

  static fromStateAndContinuationParts(state, continuationParts, context) { return Context.fromStateAndContinuationParts(ContinuationContext, state, continuationParts, context); }
}
