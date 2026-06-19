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
      const state = this.getState(),
            precedence = this.getPrecedence(),
            childNodes = this.getChildNodes();

      this.continuedContext.update(state, precedence, childNodes);

      const continuing = this.isContinuing();

      parsed = continuing ?
                 this.continuedContext.commit() :
                   true;

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
