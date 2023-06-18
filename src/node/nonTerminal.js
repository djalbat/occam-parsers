"use strict";

import { arrayUtilities } from "necessary";

import NonTerminalNodeParseTree from "../parseTree/nonTerminalNode";

const { forwardsSome, backwardsSome } = arrayUtilities;

export default class NonTerminalNode {
  constructor(ruleName, precedence, childNodes) {
    this.ruleName = ruleName;
    this.precedence = precedence;
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

  getPrecedence() {
    return this.precedence;
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

  setPrecedence(precedence) {
    this.precedence = precedence;
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

  static fromRuleNamePrecedenceAndChildNodes(Class, ruleName, precedence, childNodes) {
    if (childNodes === undefined) {
      childNodes = precedence;  ///

      precedence = ruleName;  ///

      ruleName = Class; ///

      Class = NonTerminalNode;  ///
    }

    const nonTerminalNode = new Class(ruleName, precedence, childNodes);

    return nonTerminalNode;
  }
}
