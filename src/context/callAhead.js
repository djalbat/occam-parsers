"use strict";

import Context from "../context";

export default class CallAheadContext extends Context {
  static fromState(state, context) {
    const callAheadContext = Context.fromState(CallAheadContext, state, context);

    return callAheadContext;
  }
}
