"use strict";

import Context from "../context";

export default class ContinuationContext extends Context {
  constructor(context, state, committed, continuations, continuingContext) {
    super(context, state, committed, continuations);

    this.continuingContext = continuingContext;
  }

  getContinuingContext() {
    return this.continuingContext;
  }

  continued(context) { return this.continuingContext.continued(context); }

  create(frame) {
    const continuing = this.continuingContext.isContinuing();

    if (continuing) {
      frame = this.continuingContext.create(frame);
    }

    return frame;
  }

  static fromContinuingContext(continuingContext, context) {
    const continuationContext = Context.fromNothing(ContinuationContext, continuingContext, context);

    return continuationContext;
  }
}
