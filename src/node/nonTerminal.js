"use strict";

import { arrayUtilities } from "necessary";
import { specialSymbols } from "occam-lexers";

import nodeMixins from "../mixins/node";
import NonTerminalNodeParseTree from "../parseTree/nonTerminalNode";

const { match, first } = arrayUtilities,
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
    const transparent = (this.opacity === null);

    return transparent;
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

  getSingleChildNode() {
    let singleChildNode = null;

    const multiplicity = this.getMultiplicity();

    if (multiplicity === 1) {
      const firstchildNode = first(this.childNodes);

      singleChildNode = firstchildNode; ///
    }

    return singleChildNode;
  }

  getMultiplicity() {
    const childNodesLength = this.childNodes.length,
          multiplicity = childNodesLength;  ///

    return multiplicity;
  }

  isSingle() {
    const singleChildNode = this.parentNode.getSingleChildNode(),
          single = (singleChildNode !== null);

    return single;
  }

  isSingular() {
    const multiplicity = this.getMultiplicity(),
      singular = (multiplicity === 1);

    return singular;
  }

  isUnprecedented() {
    let unprecedented = false;

    if (this.precedence !== null) {
      const multiplicity = this.getMultiplicity(),
            firstIndex = 0,
            lastIndex = (multiplicity - 1);

      this.childNodes.some((childNode, index) => {
        const last = (index === lastIndex),
              first = (index === firstIndex),
              childNodePrecedenceCompares = childNode.comparePrecedence(this.precedence, first, last);

        if (!childNodePrecedenceCompares) {
          unprecedented = true;

          return true;
        }
      });
    }

    return unprecedented;
  }

  comparePrecedence(precedence, first, last) {
    let precedenceCompares = true;

    if (this.precedence !== null) {
      const transparent = this.precedence.isTransparent();

      if (transparent) {
        const singleChildNode = this.getSingleChildNode();

        precedenceCompares = (singleChildNode !== null) ?
                               singleChildNode.comparePrecedence(precedence, first, last) :
                                 false;
      } else {
        precedenceCompares = this.precedence.compare(precedence, first, last);
      }
    }

    return precedenceCompares;
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
    const nonTerminalNode = this;  ///

    return nonTerminalNode;
  }

  simplify(state) {
    ///
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
