"use strict";

import Context from "../context";

export default class PartsContext extends Context {
  constructor(context, offset, index, childNodes, parts, definition) {
    super(context, offset, index, childNodes);

    this.parts = parts;
    this.definition = definition;
  }

  getParts() {
    return this.parts;
  }

  getDefinition() {
    return this.definition;
  }

  calledAhead(context) {
    let parsed;

    parsed = this.definition.parse(this.parts, context);

    return parsed;
  }

  static fromPartsAndDefinition(parts,definition,  context) {
    const partContext = Context.fromNothing(PartsContext, parts, definition, context);

    return partContext;
  }
}
