"use strict";

import Frame from "../frame";
import Context from "../context";
import {isValid} from "../utilities/frame";

export default class DefinitionContext extends Context {
  constructor(context, state, continuations, precedence) {
    super(context, state, continuations);

    this.precedence = precedence;
  }

  getPrecedence(frame) {
    let precedence;

    precedence = frame.getPrecedence();

    precedence = precedence || this.precedence; ///

    return precedence;
  }

  getRule() {
    const context = this.getContext(),
          ruleContext = context,  ///
          rule = ruleContext.getRule();

    return rule;
  }

  isIsolated() {
    const isolated = false;

    return isolated;
  }

  static fromDefinition(definition, context) {
    const precedence = definition.getPrecedence(),
          definitionContext = Context.fromNothing(DefinitionContext, precedence, context);

    return definitionContext;
  }
}

