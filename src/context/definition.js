"use strict";

import Context from "../context";

export default class DefinitionContext extends Context {
  constructor(context, state, childNodes, callAheadPart, definition, precedence) {
    super(context, state, childNodes, callAheadPart);

    this.definition = definition;
    this.precedence = precedence;
  }

  getDefinition() {
    return this.definition;
  }

  getPrecedence() {
    return this.precedence;
  }

  commit() {
    const context = this.getContext();

    // context.updatePrecedence(this.precedence);

    super.commit();
  }

  static fromDefinition(definition, context) {
    const precedence = definition.getPrecedence(),
          definitionContext = Context.fromNothing(DefinitionContext, definition, precedence, context);

    return definitionContext;
  }
}
