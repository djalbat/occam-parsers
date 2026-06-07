"use strict";

import Context from "../context";

export default class PartsContext extends Context {
  constructor(context, offset, index, childNodes, parts, parse) {
    super(context, offset, index, childNodes);

    this.parts = parts;
    this.parse = parse;
  }

  getParts() {
    return this.parts;
  }

  getParse() {
    return this.parse;
  }

  calledAhead(context) {
    let parsed;

    const partsLength = this.parts.length;

    parsed = (partsLength > 0) ?
               this.parse(this.parts, context) :
                 this.callAhead(context);

    return parsed;
  }

  static fromPartsAndParse(parts, parse, context) {
    const partsContext = Context.fromNothing(PartsContext, parts, parse, context);

    return partsContext;
  }
}
