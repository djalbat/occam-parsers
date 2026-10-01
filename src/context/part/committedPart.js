"use strict";

import Context from "../../context";

export default class CommittedPartPartContext extends Context {
  getCommitted() {
    const committed = 1;

    return committed;
  }

  compose(frame, partFrame = null) {
    if (partFrame !== null) {
      frame = frame.merge(partFrame);
    }

    return frame;
  }

  continued(frame, context) {
    frame = this.compose(frame);

    if (frame !== null) {
      context.commit(this);
    }

    return frame;
  }

  static fromNothing(context) {
    return Context.fromNothing(CommittedPartPartContext, context);
  }
}