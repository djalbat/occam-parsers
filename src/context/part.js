"use strict";

import Context from "../context";

export default class PartContext extends Context {
  constructor(context, state, childNodes, callAheadPart, part) {
    super(context, state, childNodes, callAheadPart);

    this.part = part;
  }

  getPart() {
    return this.part;
  }

  isCallAhead() {
    let callAhead = false;

    const callAheadPart = this.getCallAheadPart();

    if (this.part !== callAheadPart) {
      callAhead = super.isCallAhead();
    }

    return callAhead;
  }

  commit(part) {
    const lookAheadPart = this.getCallAheadPart();

    if (this.part === lookAheadPart) {
      return;
    }

    super.commit();
  }

  static fromPart(part, context) {
    const partContext = Context.fromNothing(PartContext, part, context);

    return partContext;
  }
}
