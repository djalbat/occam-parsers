"use strict";

import Context from "../context";

export default class RuleContext extends Context {
  constructor(context, offset, index, opacity, ruleName, childNodes, precedence) {
    super(context, offset, index);

    this.opacity = opacity;
    this.ruleName = ruleName;
    this.childNodes = childNodes;
    this.precedence = precedence;
  }

  getOpacity() {
    return this.opacity;
  }

  getRuleName() {
    return this.ruleName;
  }

  getChildNodes() {
    return this.childNodes;
  }

  getPrecedence() {
    return this.precedence;
  }

  setChildNodes(childNodes) {
    this.childNodes = childNodes;
  }

  setPrecedence(precedence) {
    this.precedence = precedence;
  }

  commit() {
    const NonTerminalNode = this.NonTerminalNodeFromRuleName(this.ruleName),
          nonTerminalNode = NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(this.ruleName, this.childNodes, this.opacity, this.precedence),
          childNode = nonTerminalNode, ///
          context = this.getContext();

    context.addChildNode(childNode);

    super.commit();
  }

  static fromRule(rule, context) {
    const opacity = rule.getOpacity(),
          ruleName = rule.getName(),
          childNodes = null,
          precedence = null,
          ruleContext = Context.fromNothing(RuleContext, opacity, ruleName, childNodes, precedence, context);

    return ruleContext;
  }
}
