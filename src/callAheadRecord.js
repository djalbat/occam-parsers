"use strict";

import State from "./state";

export default class CallAheadRecord {
  constructor(state, childNodes) {
    this.state = state;
    this.childNodes = childNodes;
  }

  getState() {
    return this.state;
  }

  getChildNodes() {
    return this.childNodes;
  }

  apply(context) {
    context.setState(this.state);

    context.setChildNodes(this.childNodes);
  }

  serialise() {
    let value;

    value = this.state.serialise();

    const state = value, ///
          childNodes = this.childNodes;

    value = {
      state,
      childNodes
    };

    return value;
  }

  static unserialize(value) {
    const { childNodes } = value;

    let state;

    ({ state } = value);

    value = state;  ///

    state = State.unserialise(value);

    const callAheadRecord = new CallAheadRecord(state, childNodes);

    return callAheadRecord;
  }

  static fromStateAndChildNodes(state, childNodes) {
    const callAheadRecord = new CallAheadRecord(state, childNodes);

    return callAheadRecord;
  }
}
