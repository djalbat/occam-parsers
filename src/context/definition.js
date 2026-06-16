"use strict";

import Context from "../context";

export default class DefinitionContext extends Context {
  static fromDefinition(definition, context) {
    const definitionContext = Context.fromNothing(DefinitionContext, context);

    return definitionContext;
  }
}
