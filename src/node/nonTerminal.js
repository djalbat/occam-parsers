"use strict";

import { arrayUtilities } from "necessary";
import { specialSymbols } from "occam-lexers";

import NonTerminalNodeParseTree from "../parseTree/nonTerminalNode";

const { first, match, forwardsSome, backwardsSome } = arrayUtilities,
      { opaque: opaqueSpecialSymbol , semiOpaque: semiOpaqueSpecialSymbol } = specialSymbols;

export default class NonTerminalNode {
  constructor(ruleName, parentNode, childNodes, opacity, precedence) {
    this.ruleName = ruleName;
    this.parentNode = parentNode;
    this.childNodes = childNodes;
    this.opacity = opacity;
    this.precedence = precedence;
  }

  getRuleName() {
    return this.ruleName;
  }

  getParentNode() {
    return this.parentNode;
  }

  getChildNodes() {
    return this.childNodes;
  }

  getOpacity() {
    return this.opacity;
  }

  getPrecedence() {
    return this.precedence;
  }

  setRuleName(ruleName) {
    this.ruleName = ruleName;
  }

  setChildNodes(childNodes) {
    this.resetChildNodesParentNode();

    this.childNodes = childNodes;

    this.setChildNodesParentNode();
  }

  setParentNode(parentNode) {
    this.parentNode = parentNode;
  }

  setPrecedence(precedence) {
    this.precedence = precedence;
  }

  setOpacity(opacity) {
    this.opacity = opacity;
  }

  isOpaque() {
    const opaque = (this.opacity === opaqueSpecialSymbol);

    return opaque;
  }

  isSemiOpaque() {
    const opaque = (this.opacity === semiOpaqueSpecialSymbol);

    return opaque;
  }

  isTerminalNode() {
    const terminalNode = false;

    return terminalNode;
  }

  isNonTerminalNode() {
    const nonTerminalNode = true;

    return nonTerminalNode;
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

  getFirstSignificantTokenIndex(tokens) {
    let firstSignificantTokenIndex;

    forwardsSome(this.childNodes, (childNode) => {
      const node = childNode; ///

      firstSignificantTokenIndex = node.getFirstSignificantTokenIndex(tokens);

      if (firstSignificantTokenIndex !== null) {
        return true;
      }
    });

    return firstSignificantTokenIndex;
  }

  getLastSignificantTokenIndex(tokens) {
    let lastSignificantTokenIndex;

    backwardsSome(this.childNodes, (childNode) => {
      const node = childNode; ///

      lastSignificantTokenIndex = node.getLastSignificantTokenIndex(tokens);

      if (lastSignificantTokenIndex !== null) {
        return true;
      }
    });

    return lastSignificantTokenIndex;
  }

  getSignificantTokens(significantTokens = []) {
    this.childNodes.forEach((childNode) => {
      childNode.getSignificantTokens(significantTokens);
    });

    return significantTokens;
  }

  getAncestorNodes() {
    const ancestorNodes = [];

    let parentNode = this.parentNode;

    while (parentNode !== null) {
      const ancestorNode = parentNode;  ///

      ancestorNodes.push(ancestorNode);

      parentNode = parentNode.getParentNode();
    }

    return ancestorNodes;
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
        const nonTerminalNodeOpacity = nonTerminalNode.getOpacity();

        if (this.opacity === nonTerminalNodeOpacity) {
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

  cloneChildNodes() {
    const parentNode = this,  ///
          childNodes = this.childNodes.map((childNode) => {
            childNode = childNode.clone(parentNode);  ///

            return childNode;
          });

    return childNodes;
  }

  replaceChildNodes(replacedChildNodes, replacementChildNodes) {
    const replacedChildNodesLength = replacedChildNodes.length,
          firstReplacedChildNode = first(replacedChildNodes),
          firstIndex = this.childNodes.indexOf(firstReplacedChildNode),
          start = firstIndex, ///
          deleteCount = replacedChildNodesLength; ///

    this.childNodes.splice(start, deleteCount, ...replacementChildNodes);

    this.resetChildNodesParentNode(replacedChildNodes);

    this.setChildNodesParentNode(replacementChildNodes);
  }

  setChildNodesParentNode(childNodes) {
    if (childNodes === undefined) {
      childNodes = this.childNodes;
    }

    const parentNode = this;

    childNodes.forEach((childNode) => {
      childNode.setParentNode(parentNode);
    });
  }

  resetChildNodesParentNode(childNodes) {
    if (childNodes === undefined) {
      childNodes = this.childNodes;
    }

    const parentNode = null;

    childNodes.forEach((childNode) => {
      childNode.setParentNode(parentNode);
    });
  }

  asParseTree(tokens) {
    const nonTerminalNode = this,  ///
          nonTerminalNodeParseTree = NonTerminalNodeParseTree.fromNonTerminalNodeAndTokens(nonTerminalNode, tokens),
          parseTree = nonTerminalNodeParseTree;  ///

    return parseTree;
  }

  clone(parentNode = null) {
    const Class = this.constructor,
          ruleName = this.ruleName,
          childNodes = this.cloneChildNodes(),
          opacity = this.opacity,
          precedence = this.precedence,
          nonTerminalNode = new Class(ruleName, parentNode, childNodes, opacity, precedence);

    return nonTerminalNode;
  }

  static fromRuleNameChildNodesAndOpacity(Class, ruleName, childNodes, opacity, ...remainingArguments) {
    if (opacity === undefined) {
      opacity = childNodes; ///

      childNodes = ruleName;  ///

      ruleName = Class; ///

      Class = NonTerminalNode;  ///
    }

    const parentNode = null,
          precedence = null,
          nonTerminalNode = new Class(ruleName, parentNode, childNodes, opacity, precedence, ...remainingArguments);

    return nonTerminalNode;
  }
}

