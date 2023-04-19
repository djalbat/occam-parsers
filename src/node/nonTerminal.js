"use strict";

import NonTerminalNodeParseTree from "../parseTree/nonTerminalNode";

import { forwardsSome, backwardsSome } from "../utilities/array";

export default class NonTerminalNode {
  constructor(ruleName, childNodes) {
    this.ruleName = ruleName;
    this.childNodes = childNodes;
  }

  isTerminalNode() {
    const terminalNode = false;

    return terminalNode;
  }

  isNonTerminalNode() {
    const nonTerminalNode = true;

    return nonTerminalNode;
  }

  getRuleName() {
    return this.ruleName;
  }

  getChildNodes() {
    return this.childNodes;
  }

  getFirstSignificantToken() {
    let firstSignificantToken = null;

    forwardsSome(this.childNodes, (childNode) => {
      firstSignificantToken = childNode.getFirstSignificantToken();

      if (firstSignificantToken !== null) {
        return true;
      }
    });

    return firstSignificantToken;
  }

  getLastSignificantToken() {
    let lastSignificantToken = null;

    backwardsSome(this.childNodes, (childNode) => {
      lastSignificantToken = childNode.getLastSignificantToken();

      if (lastSignificantToken !== null) {
        return true;
      }
    });

    return lastSignificantToken;
  }

  isEqualTo(node) {
    let equalTo = false;

    const nodeNonTerminalNode = node.isNonTerminalNode();

    if (nodeNonTerminalNode) {
      const nonTerminalNode = node, ///
            nonTerminalNodeRuleName = nonTerminalNode.getRuleName();

      if (nonTerminalNodeRuleName === this.ruleName) {
        const childNodesLength = this.childNodes.length,
              nonTerminalNodeChildNodes = nonTerminalNode.getChildNodes(),
              nonTerminalNodeChildNodesLength = nonTerminalNodeChildNodes.length;

        if (childNodesLength === nonTerminalNodeChildNodesLength) {
          equalTo = this.childNodes.every((childNode, index) => {
            const nonTerminalNodeChildNode = nonTerminalNodeChildNodes[index],
                  childNodeEqualToNodeChildNode = childNode.isEqualTo(nonTerminalNodeChildNode);

            if (childNodeEqualToNodeChildNode) {
              return true;
            }
          });
        }
      }
    }

    return equalTo;
  }
  
  setRuleName(ruleName) {
    this.ruleName = ruleName;
  }

  setChildNodes(childNodes) {
    this.childNodes = childNodes;
  }
  
  asParseTree(tokens, abridged = false) {
    const nonTerminalNode = this,  ///
          nonTerminalNodeParseTree = NonTerminalNodeParseTree.fromNonTerminalNodeTokensAndAbridged(nonTerminalNode, tokens, abridged),
          parseTree = nonTerminalNodeParseTree;  ///

    return parseTree;
  }

  static fromRuleNameAndChildNodes(Class, ruleName, childNodes) {
    if (childNodes === undefined) {
      childNodes = ruleName;  ///

      ruleName = Class; ///

      Class = NonTerminalNode;  ///
    }

    const nonTerminalNode = new Class(ruleName, childNodes);

    return nonTerminalNode;
  }
}
