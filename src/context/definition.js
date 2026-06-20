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

  nonTerminalNodeFromFrame(frame) {
    let nonTerminalNode;

    const context = this, ///
          rule = this.getRule(),
          opacity = rule.getOpacity(),
          ruleName = rule.getName(),
          childNodes = frame.getChildNodes(),
          precedence = frame.getPrecedence(),
          NonTerminalNode = rule.NonTerminalNodeFromRuleName(ruleName, context);

    nonTerminalNode = NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence);

    nonTerminalNode = nonTerminalNode.rewrite(context);  ///

    return nonTerminalNode;
  }

  update(precedence, childNodes = []) {
    let parsed = false;

    const frame = Frame.fromPrecedenceAndChildNodes(precedence, childNodes),
          nonTerminalNode = this.nonTerminalNodeFromFrame(frame),
          palatable = nonTerminalNode.isPalatable();

    if (palatable) {
        const childNode = nonTerminalNode,  ///
              precedence = null,
              childNodes = [
                childNode
              ];

      super.update(precedence, childNodes);

      parsed = true;
    }

    return parsed;
  }

  static fromDefinition(definition, context) {
    const precedence = definition.getPrecedence(),
          definitionContext = Context.fromPrecedence(DefinitionContext, precedence, context);

    return definitionContext;
  }
}
