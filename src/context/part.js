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

  static fromPart(part, context) {
    const partContext = Context.fromNothing(PartContext, part, context);

    return partContext;
  }
}
