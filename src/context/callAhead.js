"use strict";

import Context from "../context";

export default class CallAheadContext extends Context {
  commit(state) {
    super.adjustState(state);

    const context = this.getContext(),
          childNodes = this.getChildNodes();

    context.addChildNodes(childNodes);
  }

  static fromState(state, context) {
    const callAheadParts = callAheadPartsFromNothing(context),
          callAheadContext = Context.fromStateAndCallAheadParts(CallAheadContext, state, callAheadParts, context);

    return callAheadContext;
  }
}

function callAheadPartsFromNothing(context) {
  let callAheadParts;

  callAheadParts = context.getCallAheadParts();

  callAheadParts = [
    ...callAheadParts
  ];

  return callAheadParts;
}
