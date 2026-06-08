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

  calledAhead(index) {
    let parsed;

    const context = this, ///
          partsLength = this.parts.length;

    parsed = (partsLength > 0) ?
               this.parse(this.parts, context) :
                 super.calledAhead(index);

    return parsed;
  }

  static fromPartsAndParse(parts, parse, context) {
    const partsContext = Context.fromNothing(PartsContext, parts, parse, context);

    return partsContext;
  }
}
