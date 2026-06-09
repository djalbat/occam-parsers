"use strict";

import Context from "../context";

export default class CallAheadContext extends Context {
  commit(state) {
    super.adjustState(state);
  }

  static fromState(state, context) {
    let callAheadContext;

    state = state.clone();

    callAheadContext = Context.fromState(CallAheadContext, state, context);

    return callAheadContext;
  }
}
