"use strict";

import Context from "../context";

export default class PartContext extends Context {
  constructor(context, state, childNodes, siblingParts, part) {
    super(context, state, childNodes, siblingParts);

    this.part = part;
  }

  getPart() {
    return this.part;
  }

  static fromPart(part, context) {
    const partContext = Context.fromNothing(PartContext, part, context);

    return partContext;
  }
}
