"use strict";

import Context from "../../context";

export default class IsolatedPartPartContext extends Context {
  isIsolated() {
    const isolated = true;

    return isolated;
  }

  static fromNothing(context) {
    const isolatedPartPartContext = Context.fromNothing(IsolatedPartPartContext, context);

    return isolatedPartPartContext;
  }
}
