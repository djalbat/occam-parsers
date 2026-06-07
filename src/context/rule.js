"use strict";

import Context from "../context";

export default class RuleContext extends Context {
  constructor(context, offset, index, childNodes, rule, precedence) {
    super(context, offset, index, childNodes);

    this.rule = rule;
    this.precedence = precedence;
  }

  getRule() {
    return this.rule;
  }

  getPrecedence() {
    return this.precedence;
  }

  setPrecedence(precedence) {
    this.precedence = precedence;
  }

  commit() {
    const opacity = this.rule.getOpacity(),
          ruleName = this.rule.getName(),
          childNodes = this.getChildNodes(),
          NonTerminalNode = this.NonTerminalNodeFromRuleName(ruleName),
          nonTerminalNode = NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, this.precedence),
          childNode = nonTerminalNode;  ///

    this.overwriteChildNodes(childNode);

    super.commit();
  }

  static fromRule(rule, context) {
    const precedence = null,
          ruleContext = Context.fromNothing(RuleContext, rule, precedence, context);

    return ruleContext;
  }
}
