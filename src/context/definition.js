"use strict";

import Frame from "../frame";
import Context from "../context";

export default class DefinitionContext extends Context {
  constructor(context, state, continuations, precedence) {
    super(context, state, continuations);

    this.precedence = precedence;
  }

  getPrecedence(frame) {
    let precedence;

    const context = this.getContext(),
          isolated = context.isIsolated();

    if (isolated) {
      precedence = null;
    } else {
      precedence = frame.getPrecedence();

      precedence = precedence || this.precedence; ///
    }

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

  compose(frame) {
    const childNodes = frame.getChildNodes(),
          precedence = this.getPrecedence(frame);

    frame = Frame.fromChildNodesAndPrecedence(childNodes, precedence);

    const context = this, ///
          nonTerminalNode = nonTerminalNodeFromFrame(frame, context),
          palatable = nonTerminalNode.isPalatable(),
          childNode = nonTerminalNode;  ///

    frame = palatable ? ///
              Frame.fromChildNode(childNode) :
                null;

    return frame;
  }

  static fromDefinition(definition, context) {
    const precedence = definition.getPrecedence(),
          definitionContext = Context.fromNothing(DefinitionContext, precedence, context);

    return definitionContext;
  }
}

function nonTerminalNodeFromFrame(frame, context) {
  let nonTerminalNode;

  const rule = context.getRule(),
        opacity = rule.getOpacity(),
        ruleName = rule.getName(),
        childNodes = frame.getChildNodes(),
        precedence = frame.getPrecedence(),
        NonTerminalNode = rule.NonTerminalNodeFromRuleName(ruleName, context);

  nonTerminalNode = NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence);

  nonTerminalNode = nonTerminalNode.rewrite(context);  ///

  return nonTerminalNode;
}
