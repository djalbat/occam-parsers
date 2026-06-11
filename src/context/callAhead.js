"use strict";

import Context from "../context";

export default class CallAheadContext extends Context {
  commit(state) {
    super.adjustState(state);

    const context = this.getContext(),
          childNodes = this.getChildNodes();

    context.addChildNodes(childNodes);
  }

  static fromStateAndCallAheadPart(state, callAheadPart, context) { return Context.fromStateAndCallAheadPart(CallAheadContext, state, callAheadPart, context); }
}
