"use strict";

import Context from "../../context";

import { nullifiedFrame } from "../../frame";

export default class CommittedPartPartContext extends Context {
  isCommitted() {
    const committed = true;

    return committed;
  }

  compose(frame, partFrame = nullifiedFrame) {
    const partFrameValid = partFrame.isValid();

    if (partFrameValid) {
      frame = frame.merge(partFrame);
    }

    return frame;
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