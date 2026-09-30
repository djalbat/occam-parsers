"use strict";

import { arrayUtilities } from "necessary";
import { specialSymbols } from "occam-lexers";

import nodeMixins from "../mixins/node";
import NonTerminalNodeParseTree from "../parseTree/nonTerminalNode";

const { match } = arrayUtilities,
      { opaque: opaqueSpecialSymbol , semiOpaque: semiOpaqueSpecialSymbol } = specialSymbols;

export default class NonTerminalNode {
  constructor(ruleName, parentNode, childNodes, precedence, committed, opacity) {
    this.ruleName = ruleName;
    this.parentNode = parentNode;
    this.childNodes = childNodes;
    this.precedence = precedence;
    this.committed = committed;
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

  isCommitted() {
    return this.committed;
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

  setOpacity(opacity) {
    this.opacity = opacity;
  }

  setPrecedence(precedence) {
    this.precedence = precedence;
  }

  nullifyPrecedence() {
    this.precedence = null;
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

  isPalatable() {
    const unpalatable = this.isUnpalatable(),
          palatable = !unpalatable;

    return palatable;
  }

  isUnpalatable() {
    let unpalatable = false;

    const empty = this.isEmpty(),
          unprecedented = this.isUnprecedented();

    if (empty || unprecedented) {
      unpalatable = true;
    }

    return unpalatable;
  }

  isUnprecedented() {
    let unprecedented = false;

    const childNodesLowerPrecedence = this.areChildNodesLowerPrecedence();

    if (childNodesLowerPrecedence) {
      unprecedented = true;
    }

    return unprecedented;
  }

  isLowerPrecedence(associativity, strength, first, last) {
    let lowerPrecedence;

    if (false) {
      ///
    } else if (this.precedence === null) {
      lowerPrecedence = false;
    } else if (this.precedence === Infinity) {
      lowerPrecedence = this.childNodes.some((childNode) => {
        const childNodeLowerPrecedence = childNode.isLowerPrecedence(associativity, strength, first, last);

        if (childNodeLowerPrecedence) {
          return true;
        }
      });
    } else {
      const parentStrength = strength,  ///
            parentAssociativity = associativity;  ///

      strength = Math.abs(this.precedence);

      if (false) {
        ///
      } else if (first) {
        lowerPrecedence = (parentAssociativity < 0) ?
                           (strength < parentStrength) :
                             (strength <= parentStrength);
      } else if (last) {
        lowerPrecedence = (parentAssociativity < 0) ?
                            (strength <= parentStrength) :
                              (strength < parentStrength);
      } else {
        lowerPrecedence = (strength < parentStrength);
      }
    }

    return lowerPrecedence;
  }

  areChildNodesLowerPrecedence() {
    let childNodesLowerPrecedence = false;

    if ((this.precedence !== null) && (this.precedence !== Infinity)) {
      const length = this.childNodes.length,
            lastIndex = (length - 1),
            firstIndex = 0,
            strength = Math.abs(this.precedence),
            associativity = Math.sign(this.precedence);

      childNodesLowerPrecedence = this.childNodes.some((childNode, index) => {  ///
        const last = (index === lastIndex),
              first = (index === firstIndex),
              childNodeLowerPrecedence = childNode.isLowerPrecedence(associativity, strength, first, last);

        if (childNodeLowerPrecedence) {
          return true;
        }
      });
    }

    return childNodesLowerPrecedence;
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

  rewrite(context) {
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
          committed = this.committed,
          opacity = this.opacity,
          nonTerminalNode = new Class(ruleName, parentNode, childNodes, precedence, committed, opacity, ...remainingArguments);

    nonTerminalNode.setChildNodesParentNode();

    return nonTerminalNode;
  }

  static fromRuleNameChildNodesPrecedenceCommittedAndOpacity(Class, ruleName, childNodes, precedence, committed, opacity, ...remainingArguments) {
    if (opacity === undefined) {
      opacity = committed; ///

      committed = precedence; ///

      precedence = childNodes; ///

      childNodes = ruleName;  ///

      ruleName = Class; ///

      Class = NonTerminalNode;  ///
    }

    const parentNode = null,
          nonTerminalNode = new Class(ruleName, parentNode, childNodes, precedence, committed, opacity, ...remainingArguments);

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
