"use strict";

import Context from "../context";

import { callAheadContext } from "../utilities/context";

export default class RepeatedPartContext extends Context {
  constructor(context, state, childNodes, callAheadParts, part, count, parsePart) {
    super(context, state, childNodes, callAheadParts);

    this.part = part;
    this.count = count;
    this.parsePart = parsePart;
  }

  getPart() {
    return this.part;
  }

  getCount() {
    return this.count;
  }

  getParsePart() {
    return this.parsePart;
  }

  calledAhead(state, callAheadParts) {
    let parsed;

    const count = this.count + 1,
          context = this.getContext();

    callAheadContext((context) => {
      parsed = this.parsePart(this.part, count, context);

      if (parsed) {
        context.commit(state);
      }
    }, state, callAheadParts, context);

    return parsed;
  }

  static fromPartCountAndParsePart(part, count, parsePart, context) {
    const repeatedPartContext = Context.fromNothing(RepeatedPartContext, part, count, parsePart, context);

    return repeatedPartContext;
  }
}
