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

  commit(frame) {
    const committed = this.isCommitted();

    if (!committed) {
      const context = this.getContext(),
            continuing = context.isContinuing();

      if (continuing) {
        const precedence = this.getPrecedence(),
              childNodes = this.getChildNodes();

        frame = context.update(frame, precedence, childNodes);
      }

      if (frame !== null) {
        const state = this.getState();

        this.continuedContext.updateState(state);

        frame = this.continuedContext.commit(frame);
      }

      const committed = true;

      this.setCommitted(committed);
    }

    return frame;
  }

  static fromContinuedContext(continuedContext, context){
    const state = continuedContext.getState(),
          continuations = continuedContext.getContinuations(),
          continuationContext = Context.fromStateAndContinuations(ContinuationContext, state, continuations, continuedContext, context);

    return continuationContext;
  }
}
