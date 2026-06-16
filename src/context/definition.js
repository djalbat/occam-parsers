"use strict";

import Context from "../context";

export default class DefinitionContext extends Context {
  setPrecedence(precedence) {
    if (precedence === null) {
      return;
    }

    super.setPrecedence(precedence);
  }

  static fromDefinition(definition, context) {
    const precedence = definition.getPrecedence(),
          definitionContext = Context.fromPrecedence(DefinitionContext, precedence, context);

    return definitionContext;
  }
}
