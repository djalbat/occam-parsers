"use strict";

import Context from "../context";

export default class RuleContext extends Context {
  constructor(context, state, childNodes, rule, precedence) {
    super(context, state, childNodes);

    this.rule = rule;
    this.precedence = precedence;
  }

  getRule() {
    return this.rule;
  }

  getPrecedence() {
    return this.precedence;
  }

  commit() {
    let parsed = false;

    const opacity = this.rule.getOpacity(),
          ruleName = this.rule.getName(),
          childNodes = this.getChildNodes(),
          NonTerminalNode = this.NonTerminalNodeFromRuleName(ruleName);

    let nonTerminalNode;

    nonTerminalNode = NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, this.precedence);

    nonTerminalNode = nonTerminalNode.rewrite();  ///

    const palatable = nonTerminalNode.isPalatable();

    if (palatable) {
      const childNode = nonTerminalNode;  ///

      this.overwriteChildNodes(childNode);

      super.commit();

      parsed = true;
    }

    return parsed;
  }

  static fromRule(rule, context) {
    const precedence = null,
          ruleContext = Context.fromNothing(RuleContext, rule, precedence, context);

    return ruleContext;
  }
}
