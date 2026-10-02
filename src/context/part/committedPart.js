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

  static fromSavedFrameAndConsuming(savedFrame, consuming, context) {
    return Context.fromNothing(CommittedPartPartContext, savedFrame, consuming, context);
  }
}