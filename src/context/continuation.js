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
            contiuning = context.isContinuing();

      if (contiuning) {
        const state = this.getState(),
              precedence = this.getPrecedence(),
              childNodes = this.getChildNodes();

        parsed = context.update(state, precedence, childNodes);
      } else {
        parsed = true;
      }

      if (parsed) {
        const continuing = this.isContinuing();

        parsed = continuing ?
                   this.continuedContext.commit() :
                     true;
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
