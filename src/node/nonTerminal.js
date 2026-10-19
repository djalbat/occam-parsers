"use strict";

import { arrayUtilities } from "necessary";
import { specialSymbols } from "occam-lexers";

import nodeMixins from "../mixins/node";
import NonTerminalNodeParseTree from "../parseTree/nonTerminalNode";

import { transparentPrecedence } from "../precedence";

const { match } = arrayUtilities,
      { opaque: opaqueSpecialSymbol , semiOpaque: semiOpaqueSpecialSymbol } = specialSymbols;

export default class NonTerminalNode {
  constructor(ruleName, parentNode, childNodes, precedence, opacity) {
    this.ruleName = ruleName;
    this.parentNode = parentNode;
    this.childNodes = childNodes;
    this.precedence = precedence;
    this.opacity = opacity;
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

  getPrecedence() {
    return this.precedence;
  }

  getOpacity() {
    return this.opacity;
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

  isSingular() {
    const multiplicity = this.getMultiplicity(),
          singular = (multiplicity === 1);

    return singular;
  }

  isInvalid() {
    let invalid = false;

    const empty = this.isEmpty(),
          unprecedented = this.isUnprecedented();

    if (empty || unprecedented) {
      invalid = true;
    }

    return invalid;
  }

  isEmpty() {
    const multiplicity = this.getMultiplicity(),
          empty = (multiplicity === 0);

    return empty;
  }

  isMutable() {
    const mutable = false;

    return mutable;
  }

  isUnprecedented() {
    let unprecedented = true;

    const childNodesPrecedenceCompares = this.compareChildNodesPrecedence();

    if (childNodesPrecedenceCompares) {
      unprecedented = false;
    }

    return unprecedented;
  }

  comparePrecedence(precedence, first, last) {
    let precedenceCompares;

    if (false) {
      ///
    } else if (this.precedence === null) {
      precedenceCompares = true;
    } else if (this.precedence === transparentPrecedence) {
      precedenceCompares = this.childNodes.every((childNode) => {
        const childNodePrecedenceCompares = childNode.comparePrecedence(precedence, first, last);

        if (childNodePrecedenceCompares) {
          return true;
        }
      });
    } else {
      precedenceCompares = this.precedence.compare(precedence, first, last);
    }

    return precedenceCompares;
  }

  compareChildNodesPrecedence() {
    let childNodesPrecedenceCompares = true;

    if ((this.precedence !== null) && (this.precedence !== transparentPrecedence)) {
      const multiplicity = this.getMultiplicity(),
            lastIndex = (multiplicity - 1),
            firstIndex = 0;

      childNodesPrecedenceCompares = this.childNodes.every((childNode, index) => {
        const last = (index === lastIndex),
              first = (index === firstIndex),
              childNodePrecedenceCompares = childNode.comparePrecedence(this.precedence, first, last);

        if (childNodePrecedenceCompares) {
          return true;
        }
      });
    }

    return childNodesPrecedenceCompares;
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
    const rewrittenNonTerminalNode = this;  ///

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
          precedence = this.precedence,
          opacity = this.opacity,
          nonTerminalNode = new Class(ruleName, parentNode, childNodes, precedence, opacity, ...remainingArguments);

    nonTerminalNode.setChildNodesParentNode();

    return nonTerminalNode;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(Class, ruleName, childNodes, precedence, opacity, ...remainingArguments) {
    if (opacity === undefined) {
      opacity = precedence; ///

      precedence = childNodes; ///

      childNodes = ruleName;  ///

      ruleName = Class; ///

      Class = NonTerminalNode;  ///
    }

    const parentNode = null,
          nonTerminalNode = new Class(ruleName, parentNode, childNodes, precedence, opacity, ...remainingArguments);

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
