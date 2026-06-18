"use strict";

import { arrayUtilities } from "necessary";

import Context from "../context";

const { last } = arrayUtilities;

export default class PartContext extends Context {
  constructor(context, state, childNodes, precedence, callAheadParts, calledAheadPart, part) {
    super(context, state, childNodes, precedence, callAheadParts);

    this.calledAheadPart = calledAheadPart;
    this.part = part;
  }

  getCalledAheadPart() {
    return this.calledAheadPart;
  }

  getPart() {
    return this.part;
  }

  isCalledAhead() {
    const calledAhead = (this.part === this.calledAheadPart);

    return calledAhead;
  }

  commit() {
    let parsed;

    const calledAhead = this.isCalledAhead(),
          contiuning = this.isContinuing();

    if (calledAhead && !contiuning) {
      const context = this.getContext();

      parsed = context.commit();

      if (parsed) {
        this.store(this.part);
      }
    } else {
      parsed = super.commit();
    }

    return parsed;
  }

  static fromPart(Class, part, ...remainingArguments) {
    const context = remainingArguments.pop(); ///

    let callAheadParts = context.getCallAheadParts();

    const calledAheadPart = calledAheadPartFromPartAndCallAheadParts(part, callAheadParts);

    callAheadParts = callAheadPartsFromCalledAheadPartAndCallAheadParts(calledAheadPart, callAheadParts);

    const partContext = Context.fromCallAheadParts(Class, callAheadParts, calledAheadPart, part, ...remainingArguments, context);

    return partContext;
  }

  static fromCallAheadPartsAndPart(Class, callAheadParts, part, ...remainingArguments) {
    const context = remainingArguments.pop(); ///

    const calledAheadPart = calledAheadPartFromPartAndCallAheadParts(part, callAheadParts);

    callAheadParts = callAheadPartsFromCalledAheadPartAndCallAheadParts(calledAheadPart, callAheadParts);

    const partContext = Context.fromCallAheadParts(Class, callAheadParts, calledAheadPart, part, ...remainingArguments, context);

    return partContext;
  }
}

function calledAheadPartFromPartAndCallAheadParts(part, callAheadParts) {
  let calledAheadPart = null;

  const callAheadPartsLength = callAheadParts.length;

  if (callAheadPartsLength > 0) {
    const lastCallAheadPart = last(callAheadParts);

    if (lastCallAheadPart === part) {
      calledAheadPart = lastCallAheadPart;  ///
    }
  }

  return calledAheadPart;
}

function callAheadPartsFromCalledAheadPartAndCallAheadParts(calledAheadPart, callAheadParts) {
  const callAheadPartsLength = callAheadParts.length;

  if (callAheadPartsLength > 0) {
    const lastCallAheadPart = last(callAheadParts);

    if (lastCallAheadPart === calledAheadPart) {
      callAheadParts = [
        ...callAheadParts
      ];

      callAheadParts.pop();
    }
  }

  return callAheadParts;
}
