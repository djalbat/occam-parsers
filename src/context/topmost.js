"use strict";

import { arrayUtilities } from "necessary";

import Context from "../context";

const { first } = arrayUtilities;

export default class TopmostContext extends Context {
  constructor(context, offset, index, childNodes, tokens, ruleMap, NonTerminalNodeMap, defaultNonTerminalNode) {
    super(context, offset, index, childNodes);

    this.tokens = tokens;
    this.ruleMap = ruleMap;
    this.NonTerminalNodeMap = NonTerminalNodeMap;
    this.defaultNonTerminalNode = defaultNonTerminalNode;
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

  getNode() {
    let node = null;

    const childNodes = this.getChildNodes(),
          childNodesLength = childNodes.length;

    if (childNodesLength === 1) {
      const firstChildNode = first(childNodes);

      node = firstChildNode;  ///
    }

    return node;
  }

  NonTerminalNodeFromRuleName(ruleName) {
    const NonTerminalNode = Object.hasOwn(this.NonTerminalNodeMap, ruleName) ?
                              this.NonTerminalNodeMap[ruleName] :
                                this.defaultNonTerminalNode;

    return NonTerminalNode;
  }

  isCallAhead() {
    const callAhead = false;

    return callAhead;
  }

  calledAhead(context) {
    const parsed = true;

    return parsed;
  }

  findRule(ruleName) {
    const rule = this.ruleMap[ruleName] || null;  ///

    return rule;
  }

  commit() {
    ///
  }

  static fromParserAndTokens(parser, tokens, context) {
    const { NonTerminalNodeMap, defaultNonTerminalNode } = parser.constructor,
          ruleMap = parser.getRuleMap(),
          offset = 0,
          index = 0,
          childNodes = [],
          topmostContext = new TopmostContext(context, offset, index, childNodes, tokens, ruleMap, NonTerminalNodeMap, defaultNonTerminalNode);

    return topmostContext;
  }
}
