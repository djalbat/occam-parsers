"use strict";

import Frame from "../frame";
import Context from "../context";

import { nullifiedFrame } from "../frame";

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

  isCommitted() {
    const committed = false;

    return committed;
  }

  compose(frame) {
    let context;

    const childNodes = frame.getChildNodes(),
          precedence = this.getPrecedence(frame);

    frame = Frame.fromChildNodesAndPrecedence(childNodes, precedence);

    context = this; ///

    const nonTerminalNode = nonTerminalNodeFromFrame(frame, context);

    context = this.getContext();

    const isolated = context.isIsolated();

    if (isolated) {
      nonTerminalNode.nullifyPrecedence();
    }

    const palatable = nonTerminalNode.isPalatable();

    if (palatable) {
      const childNode = nonTerminalNode;  ///

      frame = Frame.fromChildNode(childNode);
    } else {
      const committed = nonTerminalNode.isCommitted();

      if (committed) {
        debugger
      } else {
        frame = nullifiedFrame;
      }
    }

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
