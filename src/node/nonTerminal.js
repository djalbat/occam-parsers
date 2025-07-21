"use strict";

import { arrayUtilities } from "necessary";
import { specialSymbols } from "occam-lexers";

import nodeMixins from "../mixins/node";
import NonTerminalNodeParseTree from "../parseTree/nonTerminalNode";

const { first, match } = arrayUtilities,
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

  setParentNode(parentNode) {
    this.parentNode = parentNode;
  }

  setChildNodes(childNodes) {
    const startIndex = 0,
          deleteCount = Infinity,
          addedChildNodes = childNodes;  ///

    this.spliceChildNodes(startIndex, deleteCount, addedChildNodes);
  }

  setOpacity(opacity) {
    this.opacity = opacity;
  }

  setPrecedence(precedence) {
    this.precedence = precedence;
  }

  isOpaque() {
    const opaque = (this.opacity === opaqueSpecialSymbol);

    return opaque;
  }

  isSemiOpaque() {
    const semiOpaque = (this.opacity === semiOpaqueSpecialSymbol);

    return semiOpaque;
  }

  isTransparent() {
    const semiOpaque = (this.opacity === null);

    return semiOpaque;
  }

  isTerminalNode() {
    const terminalNode = false;

    return terminalNode;
  }

  isNonTerminalNode() {
    const nonTerminalNode = true;

    return nonTerminalNode;
  }

  getDescendantNodes(descendantNodes) {
    return descendantNodes;
  }

  getFirstSignificantTokenIndex(tokens) {
    let firstSignificantTokenIndex;

    this.forwardsSomeChildNode((childNode) => {
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

    this.backwardsSomeChildNode((childNode) => {
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

  getMultiplicity() {
    const childNodesLength = this.childNodes.length,
          multiplicity = childNodesLength;  ///

    return multiplicity;
  }

  isEmpty() {
    const multiplicity = this.getMultiplicity(),
          empty = (multiplicity === 0);

    return empty;
  }

  isSingular() {
    const multiplicity = this.getMultiplicity(),
          singular = (multiplicity === 1);

    return singular;
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

  asParseTree(tokens) {
    const nonTerminalNode = this,  ///
          nonTerminalNodeParseTree = NonTerminalNodeParseTree.fromNonTerminalNodeAndTokens(nonTerminalNode, tokens),
          parseTree = nonTerminalNodeParseTree;  ///

    return parseTree;
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

  rewrite(state) {
    const rewrittenNonTerminalNode = null;

    return rewrittenNonTerminalNode;
  }

  destroy() {
    this.forEachChildNode((childNode) => {
      childNode.destroy();
    });

    this.parentNode = null;
    this.childNodes = null;
  }

  clone(...remainingArguments) {
    const Class = this.constructor,
          parentNode = null,
          ruleName = this.ruleName,
          childNodes = cloneChildNodes(this.childNodes),
          opacity = this.opacity,
          precedence = this.precedence,
          nonTerminalNode = new Class(ruleName, parentNode, childNodes, opacity, precedence, ...remainingArguments);

    nonTerminalNode.setChildNodesParentNode();

    return nonTerminalNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence, ...remainingArguments) {
    if (opacity === undefined) {
      opacity = childNodes; ///

      childNodes = ruleName;  ///

      ruleName = Class; ///

      Class = NonTerminalNode;  ///
    }

    const parentNode = null,
          nonTerminalNode = new Class(ruleName, parentNode, childNodes, opacity, precedence, ...remainingArguments);

    nonTerminalNode.setChildNodesParentNode();

    return nonTerminalNode;
  }
}

Object.assign(NonTerminalNode.prototype, nodeMixins);

function cloneChildNodes(childNodes) {
  childNodes = childNodes.map((childNode) => {  ///
    childNode = childNode.clone();  ///

    return childNode;
  });

  return childNodes;
}
