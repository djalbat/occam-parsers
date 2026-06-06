"use strict";

import Context from "../context";

export default class TopmostContext extends Context {
  constructor(context, offset, index, node, tokens, ruleMap, NonTerminalNodeMap, defaultNonTerminalNode) {
    super(context, offset, index);

    this.node = node;
    this.tokens = tokens;
    this.ruleMap = ruleMap;
    this.NonTerminalNodeMap = NonTerminalNodeMap;
    this.defaultNonTerminalNode = defaultNonTerminalNode;
  }

  getNode() {
    return this.node;
  }

  getTokens() {
    return this.tokens;
  }

  getRuleMap() {
    return this.ruleMap;
  }

  getNonTerminalNodeMap() {
    return this.NonTerminalNodeMap;
  }

  getDefaultNonTerminalNode() {
    return this.defaultNonTerminalNode;
  }

  NonTerminalNodeFromRuleName(ruleName) {
    const NonTerminalNode = Object.hasOwn(this.NonTerminalNodeMap, ruleName) ?
                              this.NonTerminalNodeMap[ruleName] :
                                this.defaultNonTerminalNode;

    return NonTerminalNode;
  }

  callAhead() {
    ///
  }

  isCallAhead() {
    const callAhead = false;

    return callAhead;
  }

  findRule(ruleName) {
    const rule = this.ruleMap[ruleName] || null;  ///

    return rule;
  }

  addChildNode(childNode) {
    const node = childNode; ///

    this.node = node;
  }

  commit() {
    ///
  }

  static fromParserAndTokens(parser, tokens, context) {
    const { NonTerminalNodeMap, defaultNonTerminalNode } = parser.constructor,
          ruleMap = parser.getRuleMap(),
          offset = 0,
          index = 0,
          node = null,
          topmostContext = new TopmostContext(context, offset, index, node, tokens, ruleMap, NonTerminalNodeMap, defaultNonTerminalNode);

    return topmostContext;
  }
}
