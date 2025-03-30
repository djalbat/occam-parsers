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
    const startIndex = 0,
          deleteCount = Infinity,
          addedChildNodes = childNodes;  ///

    this.spliceChildNodes(startIndex, deleteCount, addedChildNodes);
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

  mapChildNode(callback) { return this.childNodes.map(callback); }

  someChildNode(callback) { return this.childNodes.some(callback); }

  everyChildNode(callback) { return this.childNodes.every(callback); }

  reduceChildNode(callback, initialValue) { return this.childNodes.reduce(callback, initialValue); }

  forEachChildNode(callback) { this.childNodes.forEach(callback); }

  forwardsSomeChildNode(callback) { return forwardsSome(this.childNodes, callback); }

  backwardsSomeChildNode(callback) { return backwardsSome(this.childNodes, callback); }

  setChildNodesParentNode(childNodes) {
    if (childNodes === undefined) {
      childNodes = [
        ...this.childNodes
      ];
    }

    const parentNode = this;

    childNodes.forEach((childNode) => {
      childNode.setParentNode(parentNode);
    });
  }

  resetChildNodesParentNode(childNodes) {
    if (childNodes === undefined) {
      childNodes = [
        ...this.childNodes
      ];
    }

    const parentNode = null;

    childNodes.forEach((childNode) => {
      childNode.setParentNode(parentNode);
    });
  }

  addChildNode(addedChildNode, offset) {
    const addedChildNodes = [
        addedChildNode
    ];

    this.addChildNodes(addedChildNodes, offset);
  }

  addChildNodes(addedChildNodes, offset) {
    const startIndex = offset, ///
          deleteCount = 0;

    this.spliceChildNodes(startIndex, deleteCount, ...addedChildNodes);
  }

  removeChildNode(removedChildNode) {
    let removedChildNodes;

    removedChildNodes = [
      removedChildNode
    ];

    removedChildNodes = this.removeChildNodes(removedChildNodes);

    return removedChildNodes;
  }

  removeChildNodes(removedChildNodes) {
    if (removedChildNodes === undefined) {
      removedChildNodes = [
        ...this.childNodes
      ];
    }

    const removedChildNodesLength = removedChildNodes.length;

    if (removedChildNodesLength === 0) {
      return;
    }

    const firstReplacedChildNode = first(removedChildNodes),
          firstIndex = this.childNodes.indexOf(firstReplacedChildNode),
          startIndex = firstIndex, ///
          deleteCount = removedChildNodesLength, ///
          addedChildNodes = [];

    removedChildNodes = this.spliceChildNodes(startIndex, deleteCount, addedChildNodes);

    return removedChildNodes;
  }

  replaceChildNode(replacedChildNode, replacementChildNodes) {
    const replacedChildNodes = [
      replacedChildNode
    ];

    this.replaceChildNodes(replacedChildNodes, replacementChildNodes);
  }

  replaceChildNodes(replacedChildNodes, replacementChildNodes) {
    const replacedChildNodesLength = replacedChildNodes.length,
          firstReplacedChildNode = first(replacedChildNodes),
          firstIndex = this.childNodes.indexOf(firstReplacedChildNode),
          startIndex = firstIndex, ///
          deleteCount = replacedChildNodesLength; ///

    this.spliceChildNodes(startIndex, deleteCount, replacementChildNodes);
  }

  spliceChildNodes(startIndex, deleteCount, addedChildNodes = []) {
    const removedChildNodes = this.childNodes.splice(startIndex, deleteCount, ...addedChildNodes);

    this.resetChildNodesParentNode(removedChildNodes);

    this.setChildNodesParentNode(addedChildNodes);

    return removedChildNodes;
  }

  sliceChildNodes(startIndex, endIndex) {
    const childNodes = this.childNodes.slice(startIndex, endIndex);

    return childNodes;
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

  asParseTree(tokens) {
    const nonTerminalNode = this,  ///
          nonTerminalNodeParseTree = NonTerminalNodeParseTree.fromNonTerminalNodeAndTokens(nonTerminalNode, tokens),
          parseTree = nonTerminalNodeParseTree;  ///

    return parseTree;
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

    nonTerminalNode.setChildNodesParentNode();

    return nonTerminalNode;
  }
}

function cloneChildNodes(childNodes) {
  childNodes = childNodes.map((childNode) => {  ///
    childNode = childNode.clone();  ///

    return childNode;
  });

  return childNodes;
}
