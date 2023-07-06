"use strict";

import { arrayUtilities } from "necessary";

import State from "../state";

const { first } = arrayUtilities;

function parse(tokens, rule = this.startRule) {
  let node = null;

  const nodes = [],
        state = State.fromTokensAndRuleMap(tokens, this.ruleMap),
        callback = null,
        parsed = rule.parse(nodes, state, callback);

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
