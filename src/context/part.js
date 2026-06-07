"use strict";

import Context from "../context";

export default class PartContext extends Context {
  calledAhead() {
    debugger
  }

  static fromPart(part, context) {
    const partContext = Context.fromNothing(PartContext, context);

    return partContext;
  }
}
