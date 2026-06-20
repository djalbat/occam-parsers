"use strict";

import Context from "../context";

export default class ContinuationContext extends Context {
  constructor(context, state, committed, precedence, childNodes, continuations, continuedContext) {
    super(context, state, committed, precedence, childNodes, continuations);

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
      const context = this.getContext(),
            continuing = context.isContinuing();

      if (continuing) {
        const precedence = this.getPrecedence(),
              childNodes = this.getChildNodes();

        parsed = context.update(precedence, childNodes);
      } else {
        parsed = true;
      }

      if (parsed) {
        const state = this.getState();

        this.continuedContext.updateState(state);

        parsed = this.continuedContext.commit();
      }

      const committed = true;

      this.setCommitted(committed);
    }

    return parsed;
  }

  static fromContinuedContext(continuedContext, context){
    const state = continuedContext.getState(),
          continuations = continuedContext.getContinuations(),
          continuationContext = Context.fromStateAndContinuations(ContinuationContext, state, continuations, continuedContext, context);

    return continuationContext;
  }
}
