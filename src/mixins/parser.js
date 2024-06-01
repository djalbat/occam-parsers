"use strict";

import { arrayUtilities } from "necessary";

import State from "../state";

const { first } = arrayUtilities;

const DefaultState = State; ///

function parse(tokens, rule = this.startRule, ...remainingArguments) {
  let node = null;

  const { State = DefaultState } = this.constructor,
        nodes = [],
        state = State.fromTokensAndRuleMap(tokens, this.ruleMap, ...remainingArguments),
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
