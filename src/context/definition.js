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

  setPrecedence(precedence) {
    this.precedence = precedence;
  }

  calledAhead(part, context) {
    debugger
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
