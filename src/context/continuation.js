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

  continued(frame, context) { return this.continuingContext.continued(frame, context); }

  static fromContinuingContext(continuingContext, context) {
    const continuationContext = Context.fromNothing(ContinuationContext, continuingContext, context);

    return continuationContext;
  }
}
