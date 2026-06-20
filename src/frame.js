"use strict";

import State from "./state";

export default class Frame {
  constructor(state, precedence, childNodes) {
    this.state = state;
    this.precedence = precedence;
    this.childNodes = childNodes;
  }

  getState() {
    return this.state;
  }

  getPrecedence() {
    return this.precedence;
  }

  getChildNodes() {
    return this.childNodes;
  }

  apply(context) {
    const parsed = context.update(this.state, this.precedence, this.childNodes);

    return parsed;
  }

  serialise() {
    let value;

    value = this.state.serialise();

    const state = value,  ///
          precedence = this.precedence,
          childNodes = this.childNodes;

    value = {
      state,
      precedence,
      childNodes
    };

    return value;
  }

  static unserialise(value) {
    const { precedence, childNodes } = value;

    let state;

    ({ state } = value);

    value = state;  ///

    state = State.unserialise(value);

    const frame = new Frame(state, precedence, childNodes);

    return frame;
  }

  static fromStatePrecedenceAndChildNodes(state, precedence, childNodes) {
    const frame = new Frame(state, precedence, childNodes);

    return frame;
  }
}
