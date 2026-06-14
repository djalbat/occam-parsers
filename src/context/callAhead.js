"use strict";

import Context from "../context";

export default class CallAheadContext extends Context {
  commit(state) {
    this.adjustState(state);

    const context = this.getContext(),
          childNodes = this.getChildNodes();

    context.addChildNodes(childNodes);
  }

  static fromStateAndCallAheadParts(state, callAheadParts, context) { return Context.fromStateAndCallAheadParts(CallAheadContext, state, callAheadParts, context); }
}
