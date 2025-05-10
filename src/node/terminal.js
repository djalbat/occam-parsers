"use strict";

import TerminalNodeParseTree from "../parseTree/terminalNode";

export default class TerminalNode {
  constructor(parentNode, significantToken) {
    this.parentNode = parentNode;
    this.significantToken = significantToken;
  }

  getParentNode() {
    return this.parentNode;
  }

  getSignificantToken() {
    return this.significantToken;
  }

  setParentNode(parentNode) {
    this.parentNode = parentNode;
  }

  setSignificantToken(significantToken) {
    this.significantToken = significantToken;
  }

  isStartOfContentNode() {
    const startOfContentNode = false;

    return startOfContentNode;
  }

  isNoWhitespaceNode() {
    const noWhitespaceNode = false;

    return noWhitespaceNode;
  }

  isEpsilonNode() {
    const epsilonNode = false;

    return epsilonNode;
  }

  isTerminalNode() {
    const terminalNode = true;
    
    return terminalNode;
  }

  isNonTerminalNode() {
    const nonTerminalNode = false;

    return nonTerminalNode;
  }

  getType() { return this.significantToken.getType(); }

  getContent() { return this.significantToken.getContent(); }

  getPrecedence()  {
    const precedence = null;

    return precedence;
  }

  isLowerPrecedence(parentRuleName, parentPrecedence) {
    const lowerPrecedence = false;

    return lowerPrecedence;
  }

  getFirstSignificantTokenIndex(tokens) {
    const significantTokenIndex = this.getSignificantTokenIndex(tokens),
          firstSignificantTokenIndex = significantTokenIndex; ///

    return firstSignificantTokenIndex;
  }

  getLastSignificantTokenIndex(tokens) {
    const significantTokenIndex = this.getSignificantTokenIndex(tokens),
          lastSignificantTokenIndex = significantTokenIndex; ///

    return lastSignificantTokenIndex;
  }

  getSignificantTokenIndex(tokens) {
    let significantTokenIndex = null;

    if (this.significantToken !== null) {
      significantTokenIndex = tokens.indexOf(this.significantToken);
    }

    return significantTokenIndex;
  }

  getSignificantTokens(significantTokens = []) {
    if (this.significantToken !== null) {
      significantTokens.push(this.significantToken);
    }

    return significantTokens;
  }

  getAncestorNodes() {
    const ancestorNodes = [];

    let ancestorNode = this.parentNode; ///

    while (ancestorNode !== null) {
      ancestorNodes.push(ancestorNode);

      const parentNode = ancestorNode.getParentNode();

      ancestorNode = parentNode;  ///
    }

    return ancestorNodes;
  }

  mapAncestorNode(callback) {
    const ancestorNodes = this.getAncestorNodes();

    return ancestorNodes.map(callback);
  }

  someAncestorNode(callback) {
    let result = false;

    let index = 0,
        ancestorNode = this.parentNode; ///

    while (ancestorNode !== null) {
      result = callback(ancestorNode, index);

      if (result) {
        break;
      }

      const parentNode = ancestorNode.getParentNode();

      ancestorNode = parentNode;  ///

      index++;
    }

    return result;
  }

  findAncestorNode(callback) {
    let index = 0,
        ancestorNode = this.parentNode; ///

    while (ancestorNode !== null) {
      const result = callback(ancestorNode, index);

      if (result) {
        return ancestorNode;
      }

      const parentNode = ancestorNode.getParentNode();

      ancestorNode = parentNode;  ///

      index++;
    }
  }

  everyAncestorNode(callback) {
    const ancestorNodes = this.getAncestorNodes();

    return ancestorNodes.every(callback);
  }

  filterAncestorNode(callback) {
    const ancestorNodes = this.getAncestorNodes();

    return ancestorNodes.filter(callback);
  }

  reduceAncestorNode(callback, initialValue) {
    const ancestorNodes = this.getAncestorNodes();

    return ancestorNodes.reduce(callback, initialValue);
  }

  forEachAncestorNode(callback) {
    const ancestorNodes = this.getAncestorNodes();

    ancestorNodes.forEach(callback);
  }

  asParseTree(tokens) {
    const terminalNode = this,  ///
          terminalNodeParseTree = TerminalNodeParseTree.fromTerminalNodeAndTokens(terminalNode, tokens),
          parseTree = terminalNodeParseTree;  ///

    return parseTree;
  }

  match(node, depth = Infinity, exactly = false) {
    let matches = false;

    const nodeTerminalNode = node.isTerminalNode();

    if (nodeTerminalNode) {
      const terminalNode = node,  ///
            significantToken = terminalNode.getSignificantToken();

      matches = exactly ?
                  (this.significantToken === significantToken) :
                     this.significantToken.match(significantToken);
    }

    return matches;
  }

  clone(...remainingArguments) {
    const Class = this.constructor,
          parentNode = null,
          significantToken = this.significantToken,
          terminalNode = new Class(parentNode, significantToken, ...remainingArguments);

    return terminalNode;
  }

  destroy() {
    this.parentNode = null;
    this.significantToken = null;
  }

  static fromNothing(Class, ...remainingArguments) {
    if (Class === undefined) {
      Class = TerminalNode; ///
    }

    const parentNode = null,
          significantToken = null,
          terminalNode = new Class(parentNode, significantToken, ...remainingArguments);

    return terminalNode;
  }

  static fromSignificantToken(Class, significantToken, ...remainingArguments) {
    if (significantToken === undefined) {
      significantToken = Class; ///

      Class = TerminalNode; ///
    }

    const parentNode = null,
          terminalNode = new Class(parentNode, significantToken, ...remainingArguments);
    
    return terminalNode;
  }
}
