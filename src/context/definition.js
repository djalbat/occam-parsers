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

    const context = this, ///
          rule = this.getRule(),
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
      const context = this.getContext(),
            childNode = nonTerminalNode,  ///
            childNodes = [
              childNode
            ];

      let state;

      state = this.getState();

      state = state.clone();  ///

      context.setState(state);

      context.addChildNodes(childNodes);

      const continuing = this.isContinuing();

      parsed = continuing ?
                  context.commit() :
                    true;
    }

    return parsed;
  }

  static fromDefinition(definition, context) {
    const precedence = definition.getPrecedence(),
          definitionContext = Context.fromPrecedence(DefinitionContext, precedence, context);

    return definitionContext;
  }
}
