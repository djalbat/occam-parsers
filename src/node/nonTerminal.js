"use strict";

import { arrayUtilities } from "necessary";

import NonTerminalNodeParseTree from "../parseTree/nonTerminalNode";

const { forwardsSome, backwardsSome } = arrayUtilities;

export default class NonTerminalNode {
  constructor(ruleName, childNodes, precedence) {
    this.ruleName = ruleName;
    this.childNodes = childNodes;
    this.precedence = precedence;
  }

  getRuleName() {
    return this.ruleName;
  }

  getChildNodes() {
    return this.childNodes;
  }

  getPrecedence() {
    return this.precedence;
  }

  isTerminalNode() {
    const terminalNode = false;

    return terminalNode;
  }

  isNonTerminalNode() {
    const nonTerminalNode = true;

    return nonTerminalNode;
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

  isIncludedIn(node) {
    let includedIn = false;

    if (this === node) {
      includedIn = true;
    } else {
      const nodeNonTerminalNode = node.isNonTerminalNode();

      if (nodeNonTerminalNode) {
        const nonTerminalNode = node, ///
              childNodes = nonTerminalNode.getChildNodes();

        includedIn = childNodes.some((childNode) => {
          const includedInChildNode = this.isIncludedIn(childNode);

          if (includedInChildNode) {
            return true;
          }
        });
      }
    }

    return includedIn;
  }

  match(node, depth = Infinity) {
    let matches = false;

    if (depth === 0) {
      matches = true;
    } else {
      const nodeNonTerminalNode = node.isNonTerminalNode();

      if (nodeNonTerminalNode) {
        const nonTerminalNode = node, ///
              nonTerminalNodeRuleName = nonTerminalNode.getRuleName();

        if (nonTerminalNodeRuleName === this.ruleName) {
          const childNodesLength = this.childNodes.length,
                nonTerminalNodeChildNodes = nonTerminalNode.getChildNodes(),
                nonTerminalNodeChildNodesLength = nonTerminalNodeChildNodes.length;

          if (childNodesLength === nonTerminalNodeChildNodesLength) {
            depth--;

            matches = this.childNodes.every((childNode, index) => {
              const nonTerminalNodeChildNode = nonTerminalNodeChildNodes[index],
                    childNodeMatchesNonTerminalNodeChildNode = childNode.match(nonTerminalNodeChildNode, depth);

              if (childNodeMatchesNonTerminalNodeChildNode) {
                return true;
              }
            });
          }
        }
      }
    }

    return matches;
  }
  
  setRuleName(ruleName) {
    this.ruleName = ruleName;
  }

  setChildNodes(childNodes) {
    this.childNodes = childNodes;
  }

  setPrecedence(precedence) {
    this.precedence = precedence;
  }
  
  asParseTree(tokens) {
    const nonTerminalNode = this,  ///
          nonTerminalNodeParseTree = NonTerminalNodeParseTree.fromNonTerminalNodeAndTokens(nonTerminalNode, tokens),
          parseTree = nonTerminalNodeParseTree;  ///

    return parseTree;
  }

  static fromRuleNameChildNodesAndPrecedence(Class, ruleName, childNodes, precedence) {
    if (precedence === undefined) {
      precedence = childNodes;  ///

      childNodes = ruleName;  ///

      ruleName = Class; ///

      Class = NonTerminalNode;  ///
    }

    const nonTerminalNode = new Class(ruleName, childNodes, precedence);

    return nonTerminalNode;
  }
}
