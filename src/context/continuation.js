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

  continued(frame, context) { return this.continuingContext.continued(frame, context); }

  compose(frame) {
    const continuing = this.isContinuing();

    if (continuing) {
      frame = this.continuingContext.compose(frame);
    }

    return frame;
  }

  static fromContinuingContext(continuingContext, context) {
    const continuationContext = Context.fromNothing(ContinuationContext, continuingContext, context);

    return continuationContext;
  }
}
