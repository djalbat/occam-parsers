"use strict";

import PartContext from "../../context/part";

import { continuationContext } from "../../utilities/context";

export default class ContinuationPartContext extends PartContext {
  constructor(context, state, committed, childNodes, precedence, continuations, final, part, count, parsePart) {
    super(context, state, committed, childNodes, precedence, continuations, final, part);

    this.count = count;
    this.parsePart = parsePart;
  }

  getCount() {
    return this.count;
  }

  getParsePart() {
    return this.parsePart;
  }

  continued(context) {
    let parsed;

    const part = this.getPart(),
          count = this.count + 1,
          continuedContext = context; ///

    context = this.getContext();

    continuationContext((context) => {
      parsed = this.parsePart(part, count, context);
    }, continuedContext, context);

    return parsed;
  }

  static fromPartCountAndParsePart(part, count, parsePart, context) {
    const continuationPartContext = PartContext.fromPart(ContinuationPartContext, part, count, parsePart, context);

    return continuationPartContext;
  }
}
