"use strict";

import { arrayUtilities } from "necessary";

import State from "../state";

const { first } = arrayUtilities;

function parse(tokens, rule = this.startRule) {
  let node = null;

  const nodes = [],
        state = this.createState(tokens),
        callback = null,
        callAhead = null,
        parsed = rule.parse(nodes, state, callback, callAhead);

  if (parsed) {
    const firstNode = first(nodes);

    node = firstNode; ///
  }

  return node;
}

function createState(tokens) {
  const { NonTerminalNodeMap, defaultNonTerminalNode } = this.constructor,
        state = State.fromTokensRuleMapNonTerminalNodeMapAndDefaultNonTerminalNode(tokens, this.ruleMap, NonTerminalNodeMap, defaultNonTerminalNode);

  return state;
}

const parserMixins = {
  parse,
  createState
};

export default parserMixins;
