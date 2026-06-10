"use strict";

import Context from "../context";

export default class CallAheadContext extends Context {
  constructor(context, state, childNodes, callAheadPart) {
    super(context, state, childNodes);

    this.callAheadPart = callAheadPart;
  }

  getCallAheadPart() {
    return this.callAheadPart;
  }

  retrieveCallAheadPart() {
    return this.callAheadPart;
  }

  commit(state) {
    super.adjustState(state);
  }

  static fromStateANdCallAheadPart(state, callAheadPart, context) {
    const callAheadContext = Context.fromState(CallAheadContext, state, callAheadPart, context);

    return callAheadContext;
  }
}
