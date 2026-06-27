"use strict";

import { arrayUtilities } from "necessary";

import State from "../state";
import Context from "../context";

const { first } = arrayUtilities;

export default class TopmostContext extends Context {
  constructor(context, state, continuations, ruleMap, NonTerminalNodeMap, defaultNonTerminalNode) {
    super(context, state, continuations);

    this.ruleMap = ruleMap;
    this.NonTerminalNodeMap = NonTerminalNodeMap;
    this.defaultNonTerminalNode = defaultNonTerminalNode;
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

  findRule(ruleName) {
    const rule = this.ruleMap[ruleName] || null;  ///

    return rule;
  }

  getNextPart() {
    const nextPart = null;

    return nextPart;
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

  continued(frame, context) {
    return frame;
  }

  static fromParserAndTokens(parser, tokens) {
    const { NonTerminalNodeMap, defaultNonTerminalNode } = parser.constructor,
          ruleMap = parser.getRuleMap(),
          state= State.fromTokens(tokens),
          context = null,
          continuations = [],
          topmostContext = new TopmostContext(context, state, continuations, ruleMap, NonTerminalNodeMap, defaultNonTerminalNode);

    return topmostContext;
  }
}
