"use strict";

export function nodeFromChildNodesAndRuleName(childNodes, ruleName) {
  let node = null;

  childNodes.some((childNode) => {
    const childNodeNonTerminalNode = childNode.isNonTerminalNode();

    if (childNodeNonTerminalNode) {
      const nonTerminalNode = childNode,  ///
            nonTerminalNodeRuleName = nonTerminalNode.getRuleName(),
            nonTerminalNodeRuleNameRuleName = (nonTerminalNodeRuleName === ruleName);

      if (nonTerminalNodeRuleNameRuleName) {
        node = childNode; ///

        return true;
      }
    }
  });

  return node;
}

export function nodesFromChildNodesAndRuleName(childNodes, ruleName) {
  const nodes = childNodes.filter((childNode) => {
    const childNodeNonTerminalNode = childNode.isNonTerminalNode();

    if (childNodeNonTerminalNode) {
      const nonTerminalNode = childNode,  ///
            nonTerminalNodeRuleName = nonTerminalNode.getRuleName(),
            nonTerminalNodeRuleNameRuleName = (nonTerminalNodeRuleName === ruleName);

      if (nonTerminalNodeRuleNameRuleName) {
        return true;
      }
    }
  });

  return nodes;
}
