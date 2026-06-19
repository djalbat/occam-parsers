"use strict";

import PartContext from "../../context/part";

import { continuationContext } from "../../utilities/context";

export default class ContinuationPartContext extends PartContext {
  constructor(context, state, childNodes, precedence, continuationParts, continuedPart, part, count, parsePart) {
    super(context, state, childNodes, precedence, continuationParts, continuedPart, part);

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
          count = this.count + 1;

    continuationContext((context) => {
      parsed = this.parsePart(part, count, context);
    }, context);

    return parsed;
  }

  static fromPartCountAndParsePart(part, count, parsePart, context) {
    const continuationPartContext = PartContext.fromPart(ContinuationPartContext, part, count, parsePart, context);

    return continuationPartContext;
  }
}
