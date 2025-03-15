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

    let parentNode = this.parentNode;

    while (parentNode !== null) {
      const ancestorNode = parentNode;  ///

      ancestorNodes.push(ancestorNode);

      parentNode = parentNode.getParentNode();
    }

    return ancestorNodes;
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

  asParseTree(tokens) {
    const terminalNode = this,  ///
          terminalNodeParseTree = TerminalNodeParseTree.fromTerminalNodeAndTokens(terminalNode, tokens),
          parseTree = terminalNodeParseTree;  ///

    return parseTree;
  }

  clone(parentNode = null) {
    const Class = this.constructor,
          significantToken = this.significantToken,
          terminalNode = new Class(parentNode, significantToken);

    return terminalNode;
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
