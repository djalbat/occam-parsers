"use strict";

import Context from "../context";

export default class ContinuationContext extends Context {
  constructor(context, state, committed, childNodes, precedence, continuations, continuedContext) {
    super(context, state, committed, childNodes, precedence, continuations);

    this.continuedContext = continuedContext;
  }

  getContinuedContext(){
    return this.continuedContext;
  }

  commit() {
    let parsed;

    const committed = this.isCommitted();

    if (committed) {
      parsed = true;
    } else {
      const context = this.continuedContext,  ///
            childNodes = this.getChildNodes(),
            precedence = this.getPrecedence();

      let state;

      state = this.getState();

      state = state.clone();  ///

      context.setState(state);

      context.addChildNodes(childNodes);

      context.setPrecedence(precedence);

      const continuing = this.isContinuing();

      if (continuing) {
        const context = this.getContext();

        parsed = context.commit();
      } else {
        parsed = true;
      }

      const committed = true;

      this.setCommitted(committed);
    }

    return parsed;
  }

  static fromContinuedContext(continuedContext, context){
    const state = continuedContext.getState(),
          continuationContext = Context.fromState(ContinuationContext, state, continuedContext, context);

    return continuationContext;
  }
}
