"use strict";

import Context from "../context";

export default class DefinitionContext extends Context {
  constructor(context, state, childNodes, callAheadParts, precedence) {
    super(context, state, childNodes, callAheadParts);

    this.precedence = precedence;
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
          definitionContext = Context.fromNothing(DefinitionContext, precedence, context);

    return definitionContext;
  }
}
