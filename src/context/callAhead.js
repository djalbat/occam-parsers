"use strict";

import Context from "../context";

export default class CallAheadContext extends Context {
  commit(state) {
    super.adjustState(state);
  }

  static fromState(state, context) { return Context.fromState(CallAheadContext, state, context); }
}
