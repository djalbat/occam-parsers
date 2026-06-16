"use strict";

import Context from "../context";

export default class RuleContext extends Context {
  constructor(context, state, childNodes, precedence, callAheadParts, rule) {
    super(context, state, childNodes, precedence, callAheadParts);

    this.rule = rule;
  }

  getRule() {
    return this.rule;
  }

  commit() {
    let parsed = false;

    const opacity = this.rule.getOpacity(),
          ruleName = this.rule.getName(),
          childNodes = this.getChildNodes(),
          precedence = this.getPrecedence(),
          NonTerminalNode = this.NonTerminalNodeFromRuleName(ruleName);

    let nonTerminalNode;

    nonTerminalNode = NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence);

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
    const ruleContext = Context.fromNothing(RuleContext, rule, context);

    return ruleContext;
  }
}
