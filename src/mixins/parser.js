"use strict";

import { arrayUtilities } from "necessary";

import State from "../state";

const { first } = arrayUtilities;

function parse(tokens, rule = this.startRule, startOfContent = true) {
  let node = null;

  const nodes = [],
        { NonTerminalNodeMap, defaultNonTerminalNode } = this.constructor,
        state = State.fromTokensRuleMapStartOfContentNonTerminalNodeMapAndDefaultNonTerminalNode(tokens, this.ruleMap, startOfContent, NonTerminalNodeMap, defaultNonTerminalNode),
        callback = null,
        callAhead = null,
        parsed = rule.parse(nodes, state, callback, callAhead);

  if (parsed) {
    const firstNode = first(nodes);

    node = firstNode; ///
  }

  return node;
}

const parserMixins = {
  parse
};

export default parserMixins;
