"use strict";

import Context from "../context";

import { callAheadContext } from "../utilities/context";

export default class RepeatedPartContext extends Context {
  constructor(context, state, childNodes, callAheadPart, part, parsePart) {
    super(context, state, childNodes, callAheadPart);

    this.part = part;
    this.parsePart = parsePart;
  }

  getPart() {
    return this.part;
  }

  getParsePart() {
    return this.parsePart;
  }

  calledAhead(state, callAheadPart) {
    let parsed;

    const context = this.getContext();

    callAheadContext((context) => {
      parsed = this.parsePart(this.part, context);

      if (parsed) {
        context.commit(state);
      }
    }, state, callAheadPart, context);

    if (!parsed) {
      const state = this.getState();

      parsed = super.calledAhead(state, callAheadPart);
    }

    return parsed;
  }

  static fromPartAndParsePart(part, parsePart, context) {
    const repeatedPartContext = Context.fromNothing(RepeatedPartContext, part, parsePart, context);

    return repeatedPartContext;
  }
}
