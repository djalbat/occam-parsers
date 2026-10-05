"use strict";

import Context from "../context";

import { isValid } from "../utilities/frame";

export default class CutContext extends Context {
  constructor(context, state, continuations, continuingContext) {
    super(context, state, continuations);

    this.continuingContext = continuingContext;
  }

  getContinuingContext() {
    return this.continuingContext;
  }

  continued(frame, context) {
    frame = this.compose(frame);

    const frameValid = isValid(frame);

    if (frameValid) {
      frame = this.continuingContext.continued(frame, context);
    }

    return frame;
  }

  static fromContinuingContext(continuingContext, context) {
    const cutContext = Context.fromNothing(CutContext, continuingContext, context);

    return cutContext;
  }
}
