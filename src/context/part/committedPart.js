"use strict";

import Context from "../../context";

export default class CommittedPartPartContext extends Context {
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