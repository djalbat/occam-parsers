"use strict";

import { arrayUtilities } from "necessary";

import Context from "../context";

const { last } = arrayUtilities;

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

  calledAhead(state, callAheadParts) {
    let parsed;

    const context = this.getContext(),
          callAheadPart = callAheadPartFromCallAheadParts(callAheadParts);

    if (this.part === callAheadPart) {
      callAheadParts = [  ///
        ...callAheadParts
      ];

      callAheadParts.pop();
    }

    parsed = context.calledAhead(state, callAheadParts);

    return parsed;
  }

  callAhead() {
    const state = this.getState(),
          callAheadParts = this.getCallAheadParts(),
          parsed = this.calledAhead(state, callAheadParts);

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

  static fromPart(Class, part, context) {
    if (context === undefined) {
      context = part; ///

      part = Class; ///

      Class = PartContext;  ///
    }

    const partContext = Context.fromNothing(Class, part, context);

    return partContext;
  }

  static fromCallAheadPartsAndPart(Class, callAheadParts, part, context) {
    if (context === undefined) {
      context = part; ///

      part = callAheadParts;  ///

      callAheadParts = Class;  ///

      Class = PartContext;  ///
    }

    const partContxt = Context.fromCallAheadParts(Class, callAheadParts, part, context);

    return partContxt;
  }
}

function callAheadPartFromCallAheadParts(callAheadParts) {
  let callAheadPart = null;

  const callAheadPartsLength = callAheadParts.length;

  if (callAheadPartsLength > 0) {
    const lastCallAheadPart = last(callAheadParts);

    callAheadPart = lastCallAheadPart;  ///
  }

  return callAheadPart;
}
