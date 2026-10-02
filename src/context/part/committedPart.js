"use strict";

import Context from "../../context";

export default class CommittedPartPartContext extends Context {
  constructor(context, state, continuations, savedFrame, consuming) {
    super(context, state, continuations);

    this.savedFrame = savedFrame;
    this.consuming = consuming;
  }

  getSavedFrame() {
    return this.savedFrame;
  }

  isConsuming() {
    return this.consuming;
  }

  isNonConsuming() {
    const nonConsuming = !this.consuming;

    return nonConsuming;
  }

  getCommitted() {
    const committed = 1;

    return committed;
  }

  // updateState(state) {
  //   const nonConsuming = this.isNonConsuming();
  //
  //   if (nonConsuming) {
  //     return;
  //   }
  //
  //   super.updateState(state);
  // }

  compose(frame, partFrame = null) {
    if (partFrame !== null) {
      frame = frame.merge(partFrame);
    }

    return frame;
  }

  continued(frame, context) {
    frame = this.compose(frame);

    if (frame !== null) {
      // const nonConsuming = this.isNonConsuming();
      //
      // if (nonConsuming) {
      //   frame = this.savedFrame;  ///
      // }
    }

    return frame;
  }

  static fromSavedFrameAndConsuming(savedFrame, consuming, context) {
    return Context.fromNothing(CommittedPartPartContext, savedFrame, consuming, context);
  }
}