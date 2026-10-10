"use strict";

export default class Cut {
  constructor(frame, state, forward) {
    this.frame = frame;
    this.state = state;
    this.forward = forward;
  }

  getFrame() {
    return this.frame;
  }

  getState() {
    return this.state;
  }

  getForward() {
    return this.forward;
  }

  getArguments() {
    return ([this.frame, this.state, this.forward]); ///
  }

  static fromFrameStateAndForward(frame, state, forward) {
    const cut = new Cut(frame, state, forward);

    return cut;
  }
}
