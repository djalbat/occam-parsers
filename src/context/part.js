"use strict";

import Context from "../context";

export default class PartContext extends Context {
  constructor(context, state, childNodes, part) {
    super(context, state, childNodes);

    this.part = part;
  }

  getPart() {
    return this.part;
  }

  isCallAhead() {
    let callAhead = false;

    const callAheadPart = this.retrieveCallAheadPart();

    if (this.part !== callAheadPart) {
      callAhead = super.isCallAhead();
    }

    return callAhead;
  }

  commit(part) {
    const lookAheadPart = this.retrieveCallAheadPart();

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
