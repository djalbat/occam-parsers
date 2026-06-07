"use strict";

import { arrayUtilities } from "necessary";

import { QUANTIFIER_RULE_NAME } from "../ruleNames";

const { first } = arrayUtilities;

export function isNodeQuantifierNode(node) {
  let nodeQuantifierNode = false;

  const nodeNonTerminalNode = node.isNonTerminalNode();

  if (nodeNonTerminalNode) {
    const nonTerminalNode = node, ///
          ruleName = nonTerminalNode.getRuleName(),
          ruleNameQuantifierRuleName = (ruleName === QUANTIFIER_RULE_NAME);

    nodeQuantifierNode = ruleNameQuantifierRuleName;  ///
  }

  return nodeQuantifierNode;
}

export function ruleNameFromQuantifierNode(quantifierNode) {
  let nonTerminalNode;

  nonTerminalNode = quantifierNode; ///

  const childNodes = nonTerminalNode.getChildNodes(),
        firstChildNode = first(childNodes);

  nonTerminalNode = firstChildNode;  ///

  const ruleName = nonTerminalNode.getRuleName();

  return ruleName;
}
