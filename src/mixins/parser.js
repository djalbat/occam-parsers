"use strict";

import State from "../state";

import { emptyFrame } from "../frame";

function parse(tokens, rule = this.startRule) {
  let node = null;

  const parser = this,  ///
        state = State.fromTokensAndParser(tokens, parser);

  rule.parse(emptyFrame, state, (frame, state, back) => {
    node = frame.getNode();
  }, () => {
    ///
  });

  return node;
}

function findRule(ruleName) {
  const rule = this.ruleMap[ruleName] || null;  ///

  return rule;
}

function NonTerminalNodeFromRuleName(ruleName) {
  const { NonTerminalNodeMap, defaultNonTerminalNode } = this.constructor;

  const NonTerminalNode = Object.hasOwn(NonTerminalNodeMap, ruleName) ?
                            NonTerminalNodeMap[ruleName] :
                              defaultNonTerminalNode;

  return NonTerminalNode;
}

const parserMixins = {
  parse,
  findRule,
  NonTerminalNodeFromRuleName
};

export default parserMixins;
