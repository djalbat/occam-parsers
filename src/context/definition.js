"use strict";

import Frame from "../frame";
import Context from "../context";

export default class DefinitionContext extends Context {
  getRule() {
    const context = this.getContext(),
          ruleContext = context,  ///
          rule = ruleContext.getRule();

    return rule;
  }

  compose(frame) {
    const context = this,  ///
          nonTerminalNode = nonTerminalNodeFromFrame(frame, context),
          palatable = nonTerminalNode.isPalatable();

    if (palatable) {
      const childNode = nonTerminalNode;  ///

      frame = Frame.fromChildNode(childNode);
    } else {
      frame = null;
    }

    return frame;
  }

  static fromDefinition(definition, context) {
    const definitionContext = Context.fromNothing(DefinitionContext, context);

    return definitionContext;
  }
}

function nonTerminalNodeFromFrame(frame, context) {
  let nonTerminalNode;

  const rule = context.getRule(),
        opacity = rule.getOpacity(),
        ruleName = rule.getName(),
        precedence = frame.getPrecedence(),
        childNodes = frame.getChildNodes(),
        NonTerminalNode = rule.NonTerminalNodeFromRuleName(ruleName, context);

  nonTerminalNode = NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence);

  nonTerminalNode = nonTerminalNode.rewrite(context);  ///

  return nonTerminalNode;
}

