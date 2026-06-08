"use strict";

import Context from "../context";

export default class PartsContext extends Context {
  constructor(context, state, childNodes, parts, parse) {
    super(context, state, childNodes);

    this.parts = parts;
    this.parse = parse;
  }

  getParts() {
    return this.parts;
  }

  getParse() {
    return this.parse;
  }

  calledAhead(state) {
    let parsed;

    const partsLength = this.parts.length;

    if (partsLength > 0) {
      const context = this.applyState(state);

      parsed = this.parse(this.parts, context);
    } else {
      parsed = super.calledAhead(state);
    }

    return parsed;
  }

  applyState(state) { return super.applyState(PartsContext, state, this.parts, this.parse); }

  static fromPartsAndParse(parts, parse, context) {
    const partsContext = Context.fromNothing(PartsContext, parts, parse, context);

    return partsContext;
  }
}
