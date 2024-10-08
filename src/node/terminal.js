"use strict";

import TerminalNodeParseTree from "../parseTree/terminalNode";

export default class TerminalNode {
  constructor(significantToken) {
    this.significantToken = significantToken;
  }

  getSignificantToken() {
    return this.significantToken;
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

  setSignificantToken(significantToken) {
    this.significantToken = significantToken;
  }

  asParseTree(tokens) {
    const terminalNode = this,  ///
          terminalNodeParseTree = TerminalNodeParseTree.fromTerminalNodeAndTokens(terminalNode, tokens),
          parseTree = terminalNodeParseTree;  ///

    return parseTree;
  }

  clone(...remainingArguments) {
    const Class = this.constructor,
          significantToken = this.significantToken,
          terminalNode = new Class(significantToken, ...remainingArguments);

    return terminalNode;
  }

  static fromNothing(Class, ...remainingArguments) {
    if (Class === undefined) {
      Class = TerminalNode; ///
    }

    const significantToken = null,
          terminalNode = new Class(significantToken, ...remainingArguments);

    return terminalNode;
  }

  static fromSignificantToken(Class, significantToken, ...remainingArguments) {
    if (significantToken === undefined) {
      significantToken = Class; ///

      Class = TerminalNode; ///
    }

    const terminalNode = new Class(significantToken, ...remainingArguments);
    
    return terminalNode;
  }
}
