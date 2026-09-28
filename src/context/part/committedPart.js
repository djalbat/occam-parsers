"use strict";

import Context from "../../context";

export default class CommittedPartPartContext extends Context {
  isCommitted() {
    const committed = true;

    return committed;
  }

  continued(frame, context) {
    frame = this.compose(frame);

    const frameValid = frame.isValid();

    if (frameValid) {
      context.commit(this);
    }

    return frame;
  }

  static fromNothing(context) {
    return Context.fromNothing(CommittedPartPartContext, context);
  }
}