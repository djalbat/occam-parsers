"use strict";

import { arrayUtilities } from "necessary";

import Context from "../context";

const { push } = arrayUtilities;

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

  setPrecedence(precedence) {
    this.precedence = precedence;
  }

  addChildNode(childNode) {
    this.childNodes.push(childNode)
  }

  addChildNodes(childNodes) {
    push(this.childNodes, childNodes);
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
          childNodes = [],
          precedence = null,
          ruleContext = Context.fromNothing(RuleContext, opacity, ruleName, childNodes, precedence, context);

    return ruleContext;
  }
}
