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

  continued(frame, context) {
    frame = this.compose(frame);

    const frameValid = frame.isValid();

    if (frameValid) {
      frame = this.continuingContext.continued(frame, context);
    }

    return frame;
  }

  static fromContinuingContext(continuingContext, context) {
    const continuationContext = Context.fromNothing(ContinuationContext, continuingContext, context);

    return continuationContext;
  }
}
