"use strict";

const ruleNames = require("../bnf/ruleNames"),
      arrayUtilities = require("../utilities/array");

const { first } = arrayUtilities,
      { LookAheadModifierRuleName, QuantifierRuleName, RuleNameRuleName } = ruleNames;

function isNodeChoiceNode(node) {
  let nodeNoChoiceNode = false;

  const nodeTerminalNode = node.isTerminalNode();

  if (nodeTerminalNode) {
    const terminalNode = node,  ///
          terminalNodeContent = terminalNode.getContent();

    nodeNoChoiceNode = (terminalNodeContent === "|");
  }

  return nodeNoChoiceNode;
}

function isNodeRuleNameNode(node) {
  let nodeRuleNameNode = false;

  const nodeTerminalNode = node.isTerminalNode(),
        nodeNonTerminalNode = !nodeTerminalNode;

  if (nodeNonTerminalNode) {
    const nonTerminalNode = node, ///
          nonTerminalNodeRuleName = nonTerminalNode.getRuleName();

    nodeRuleNameNode = (nonTerminalNodeRuleName === RuleNameRuleName);
  }

  return nodeRuleNameNode;
}

function isNodeQuantifierNode(node) {
  let nodeQuantifierNode = false;

  const nodeNonTerminalNode = node.isNonTerminalNode();

  if (nodeNonTerminalNode) {
    const nonTerminalNode = node, ///
          ruleName = nonTerminalNode.getRuleName(),
          ruleNameQuantifierRuleName = (ruleName === QuantifierRuleName);

    nodeQuantifierNode = ruleNameQuantifierRuleName;  ///
  }

  return nodeQuantifierNode;
}

function isNodeLookAheadModifierNode(node) {
  let nodeLookAheadModifierNode = false;

  const nodeNonTerminalNode = node.isNonTerminalNode();

  if (nodeNonTerminalNode) {
    const nonTerminalNode = node, ///
          ruleName = nonTerminalNode.getRuleName(),
          ruleNameLookAheadModifierRuleName = (ruleName === LookAheadModifierRuleName);

    nodeLookAheadModifierNode = ruleNameLookAheadModifierRuleName;  ///
  }

  return nodeLookAheadModifierNode;

}

function ruleNameFromQuantifierNode(quantifierNode) {
  let nonTerminalNode;

  nonTerminalNode = quantifierNode; ///

  const childNodes = nonTerminalNode.getChildNodes(),
        firstChildNode = first(childNodes);

  nonTerminalNode = firstChildNode;  ///

  const ruleName = nonTerminalNode.getRuleName();

  return ruleName;
}

module.exports = {
  isNodeChoiceNode,
  isNodeRuleNameNode,
  isNodeQuantifierNode,
  isNodeLookAheadModifierNode,
  ruleNameFromQuantifierNode
};
