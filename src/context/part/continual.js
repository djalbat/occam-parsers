"use strict";

import PartContext from "../../context/part";

import { callAheadContext } from "../../utilities/context";

export default class ContinualPartContext extends PartContext {
  constructor(context, state, childNodes, callAheadParts, calledAheadPart, part, count, parsePart) {
    super(context, state, childNodes, callAheadParts, calledAheadPart, part);

    this.count = count;
    this.parsePart = parsePart;
  }

  getCount() {
    return this.count;
  }

  getParsePart() {
    return this.parsePart;
  }

  calledAhead(state, callAheadParts) {
    let parsed;

    const part = this.getPart(),
          count = this.count + 1,
          context = this; ///

    callAheadContext((context) => {
      parsed = this.parsePart(part, count, context);

      if (parsed) {
        context.commit(state);
      }
    }, state, callAheadParts, context);

    return parsed;
  }

  static fromPartCountAndParsePart(part, count, parsePart, context) {
    const continualPartContext = PartContext.fromPart(ContinualPartContext, part, count, parsePart, context);

    return continualPartContext;
  }
}
