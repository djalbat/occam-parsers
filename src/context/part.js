"use strict";

import Context from "../context";

export default class PartContext extends Context {
  constructor(context, state, childNodes, callAheadParts, part) {
    super(context, state, childNodes, callAheadParts);

    this.part = part;
  }

  getPart() {
    return this.part;
  }

  isCallingAhead() {
    let callingAhead;

    const callAheadPartsLength = this.getCallAheadPartsLength();

    if (false) {
      ///
    } else if (callAheadPartsLength > 1) {
      callingAhead = true;
    } else if (callAheadPartsLength === 0) {
      callingAhead = false;
    } else {
      const callAheadPart = this.getCallAheadPart();

      callingAhead = (this.part !== callAheadPart);
    }

    return callingAhead;
  }

  callAhead() {
    let callAheadParts = this.getCallAheadParts();

    const callAheadPart = this.getCallAheadPart();

    if (this.part === callAheadPart) {
      callAheadParts = [  ///
        ...callAheadParts
      ];

      callAheadParts.pop();
    }

    const parsed = this.context.calledAhead(this.state, callAheadParts);

    return parsed;
  }

  commit() {
    const callAheadPart = this.getCallAheadPart();

    if (this.part === callAheadPart) {
      this.store(this.part);

      return;
    }

    super.commit();
  }

  static fromPart(part, context) {
    const partContext = Context.fromNothing(PartContext, part, context);

    return partContext;
  }
}
