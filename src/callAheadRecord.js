"use strict";

import State from "./state";

export default class CallAheadRecord {
  constructor(state, childNodes, precedence) {
    this.state = state;
    this.childNodes = childNodes;
    this.precedence = precedence;
  }

  getState() {
    return this.state;
  }

  getChildNodes() {
    return this.childNodes;
  }

  getPrecedence() {
    return this.precedence;
  }

  apply(context) {
    const parsed = true;

    context.setState(this.state);

    context.setChildNodes(this.childNodes);

    context.setPrecedence(this.precedence);

    return parsed;
  }

  serialise() {
    let value;

    value = this.state.serialise();

    const state = value, ///
          childNodes = this.childNodes,
          precedence = this.precedence;

    value = {
      state,
      childNodes,
      precedence
    };

    return value;
  }

  static unserialise(value) {
    const { childNodes, precedence } = value;

    let state;

    ({ state } = value);

    value = state;  ///

    state = State.unserialise(value);

    const callAheadRecord = new CallAheadRecord(state, childNodes, precedence);

    return callAheadRecord;
  }

  static fromStateChildNodesAndPrecedence(state, childNodes, precedence) {
    const callAheadRecord = new CallAheadRecord(state, childNodes, precedence);

    return callAheadRecord;
  }
}
