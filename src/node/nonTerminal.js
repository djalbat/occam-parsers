"use strict";

import { arrayUtilities } from "necessary";

import NonTerminalNodeParseTree from "../parseTree/nonTerminalNode";

const { first, match, forwardsSome, backwardsSome } = arrayUtilities;

export default class NonTerminalNode {
  constructor(ruleName, childNodes, ambiguous, precedence) {
    this.ruleName = ruleName;
    this.childNodes = childNodes;
    this.ambiguous = ambiguous;
    this.precedence = precedence;
  }

  getRuleName() {
    return this.ruleName;
  }

  getChildNodes() {
    return this.childNodes;
  }

  isAmbiguous() {
    return this.ambiguous;
  }

  getPrecedence() {
    return this.precedence;
  }

  setRuleName(ruleName) {
    this.ruleName = ruleName;
  }

  setChildNodes(childNodes) {
    this.childNodes = childNodes;
  }

  setAmbiguous(ambiguous) {
    this.ambiguous = ambiguous;
  }

  setPrecedence(precedence) {
    this.precedence = precedence;
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

  isLowerPrecedence(ruleName, precedence) {
    let lowerPrecedence;

    if (false) {
      ///
    } else if (this.precedence === null) {
      lowerPrecedence = false;
    } else if (this.precedence === Infinity) {
      const firstChildNode = first(this.childNodes);

      lowerPrecedence = firstChildNode.isLowerPrecedence(ruleName, precedence);
    } else {
      lowerPrecedence = ((this.ruleName === ruleName) && (this.precedence < precedence));
    }

    return lowerPrecedence;
  }

  isUnprecedented() {
    let unprecedented = false;

    if (this.precedence !== null) {
      unprecedented = this.childNodes.some((childNode) => {  ///
        const childNodeLowerPrecedence = childNode.isLowerPrecedence(this.ruleName, this.precedence);

        if (childNodeLowerPrecedence) {
          return true;
        }
      });
    }

    return unprecedented;
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

  isEmpty() {
    const childNodesLength = this.childNodes.length,
          empty = (childNodesLength === 0);

    return empty;
  }

  match(node, depth = Infinity, exactly = false) {
    let matches = false;

    const nodeNonTerminalNode = node.isNonTerminalNode();

    if (nodeNonTerminalNode) {
      const nonTerminalNode = node, ///
            nonTerminalNodeRuleName = nonTerminalNode.getRuleName();

      if (this.ruleName === nonTerminalNodeRuleName) {
        const nonTerminalNodeAmbiguous = nonTerminalNode.isAmbiguous();

        if (this.ambiguous === nonTerminalNodeAmbiguous) {
          const precedence = this.getPrecedence(),
                nonTerminalNodePrecedence = nonTerminalNode.getPrecedence();

          if (precedence === nonTerminalNodePrecedence) {
            depth--;

            if (depth === 0) {
              matches = true;
            } else {
              const nonTerminalNodeChildNodes = nonTerminalNode.getChildNodes();

              matches = match(this.childNodes, nonTerminalNodeChildNodes, (childNode, nonTerminalNodeChildNode) => {
                const childNodeMatchesNonTerminalNodeChildNode = childNode.match(nonTerminalNodeChildNode, depth, exactly);

                if (childNodeMatchesNonTerminalNodeChildNode) {
                  return true;
                }
              });
            }
          }
        }
      }
    }

    return matches;
  }

  rewrite() {
    const rewrittenNonTerminalNode = null;

    return rewrittenNonTerminalNode;
  }

  asParseTree(tokens) {
    const nonTerminalNode = this,  ///
          nonTerminalNodeParseTree = NonTerminalNodeParseTree.fromNonTerminalNodeAndTokens(nonTerminalNode, tokens),
          parseTree = nonTerminalNodeParseTree;  ///

    return parseTree;
  }

  clone() {
    const Class = this.constructor,
          ruleName = this.ruleName,
          childNodes = this.childNodes.map((childNode) => {
            childNode = childNode.clone();  ///

            return childNode;
          }),
          ambiguous = this.ambiguous,
          precedence = this.precedence,
          nonTerminalNode = new Class(ruleName, childNodes, ambiguous, precedence);

    return nonTerminalNode;
  }

  static fromRuleNameChildNodesAndAmbiguous(Class, ruleName, childNodes, ambiguous, ...remainingArguments) {
    if (ambiguous === undefined) {
      ambiguous = childNodes; ///

      childNodes = ruleName;  ///

      ruleName = Class; ///

      Class = NonTerminalNode;  ///
    }

    const precedence = null,
          nonTerminalNode = new Class(ruleName, childNodes, ambiguous, precedence, ...remainingArguments);

    return nonTerminalNode;
  }
}
