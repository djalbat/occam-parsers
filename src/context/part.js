"use strict";

import Context from "../context";

export default class PartContext extends Context {
  constructor(context, offset, index, childNodes, part) {
    super(context, offset, index, childNodes);

    this.part = part;
  }

  getPart() {
    return this.part;
  }

  calledAhead(context) {
    const parsed = super.calledAhead(this.part, context);

    return parsed;
  }

  static fromPart(part, context) {
    const partContext = Context.fromNothing(PartContext, part, context);

    return partContext;
  }
}
