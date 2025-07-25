"use strict";

import { arrayUtilities } from "necessary";

import { RULE_NAME_RULE_NAME, QUANTIFIER_RULE_NAME, CALL_AHEAD_MODIFIER_RULE_NAME } from "../ruleNames";

const { first } = arrayUtilities;

export function isNodeChoiceNode(node) {
  let nodeNoChoiceNode = false;

  const nodeTerminalNode = node.isTerminalNode();

  if (nodeTerminalNode) {
    const terminalNode = node,  ///
          terminalNodeContent = terminalNode.getContent();

    nodeNoChoiceNode = (terminalNodeContent === "|");
  }

  return nodeNoChoiceNode;
}

export function isNodeRuleNameNode(node) {
  let nodeRuleNameNode = false;

  const nodeTerminalNode = node.isTerminalNode(),
        nodeNonTerminalNode = !nodeTerminalNode;

  if (nodeNonTerminalNode) {
    const nonTerminalNode = node, ///
          nonTerminalNodeRuleName = nonTerminalNode.getRuleName();

    nodeRuleNameNode = (nonTerminalNodeRuleName === RULE_NAME_RULE_NAME);
  }

  return nodeRuleNameNode;
}

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

export function isNodeCallAheadModifierNode(node) {
  let nodeCallAheadModifierNode = false;

  const nodeNonTerminalNode = node.isNonTerminalNode();

  if (nodeNonTerminalNode) {
    const nonTerminalNode = node, ///
          ruleName = nonTerminalNode.getRuleName(),
          ruleNameCallAheadModifierRuleName = (ruleName === CALL_AHEAD_MODIFIER_RULE_NAME);

    nodeCallAheadModifierNode = ruleNameCallAheadModifierRuleName;  ///
  }

  return nodeCallAheadModifierNode;

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
