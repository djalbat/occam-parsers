"use strict";

import Context from "../context";

export default class DefinitionContext extends Context {
  getRule() {
    const context = this.getContext(),
          ruleContext = context,  ///
          rule = ruleContext.getRule();

    return rule;
  }

  setPrecedence(precedence) {
    if (precedence === null) {
      return;
    }

    super.setPrecedence(precedence);
  }

  commit() {
    let parsed = false;

    const rule = this.getRule(),
          context = this, ///
          opacity = rule.getOpacity(),
          ruleName = rule.getName(),
          childNodes = this.getChildNodes(),
          precedence = this.getPrecedence(),
          NonTerminalNode = rule.NonTerminalNodeFromRuleName(ruleName, context);

    let nonTerminalNode;

    nonTerminalNode = NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence);

    nonTerminalNode = nonTerminalNode.rewrite(context);  ///

    const palatable = nonTerminalNode.isPalatable();

    if (palatable) {
      const childNode = nonTerminalNode,  ///
            noPrecedence = true;

      this.overwriteChildNodes(childNode);

      super.commit(noPrecedence);

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
