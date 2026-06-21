"use strict";

import Context from "../context";

export default class ContinuationContext extends Context {
  constructor(context, state, continuations, continuingContext) {
    super(context, state, continuations);

    this.continuingContext = continuingContext;
  }

  getContinuingContext() {
    return this.continuingContext;
  }

  continued(context) { return this.continuingContext.continued(context); }

  commit(frame) {
    frame = this.create(frame);

    if (frame !== null) {
      const state = this.getState(),
            context = this.getContext();

      context.updateState(state);
    }

    return frame;
  }

  static fromContinuingContext(continuingContext, context) {
    const continuationContext = Context.fromNothing(ContinuationContext, continuingContext, context);

    return continuationContext;
  }
}
