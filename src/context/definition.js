"use strict";

import Context from "../context";

export default class DefinitionContext extends Context {
  constructor(context, offset, index, childNodes, definition, precedence) {
    super(context, offset, index, childNodes);

    this.definition = definition;
    this.precedence = precedence;
  }

  getDefinition() {
    return this.definition;
  }

  getPrecedence() {
    return this.precedence;
  }

  getParts(part) {
    let parts;

    parts = this.definition.getParts();

    const index = parts.indexOf(part),
          start = index + 1;

    parts = parts.slice(start);

    return parts;
  }

  calledAhead(part, context) {
    let parsed;

    const parts = this.getParts(part);

    parsed = this.definition.parse(parts, context);

    return parsed;
  }

  setPrecedence(precedence) {
    this.precedence = precedence;
  }

  commit() {
    const context = this.getContext();

    // context.setPrecedence(this.precedence);

    super.commit();
  }

  static fromDefinition(definition, context) {
    const precedence = definition.getPrecedence(),
          definitionContext = Context.fromNothing(DefinitionContext, definition, precedence, context);

    return definitionContext;
  }
}
