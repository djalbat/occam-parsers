"use strict";

import TerminalNodeParseTree from "../parseTree/terminalNode";

export default class TerminalNode {
  constructor(precedence, significantToken) {
    this.precedence = precedence;
    this.significantToken = significantToken;
  }

  getPrecedence() {
    return this.precedence;
  }

  getSignificantToken() {
    return this.significantToken;
  }

  getFirstSignificantToken() {
    const firstSignificantToken = this.significantToken;  ///

    return firstSignificantToken;
  }

  getLastSignificantToken() {
    const lastSignificantToken = this.significantToken;  ///

    return lastSignificantToken;
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

  isLowerPrecedence(precedence, ruleName) {
    const lowerPrecedence = false;  ///

    return lowerPrecedence;
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

  match(node, depth) {
    let matches = false;

    const nodeTerminalNode = node.isTerminalNode();

    if (nodeTerminalNode) {
      const terminalNode = node,  ///
            significantToken = terminalNode.getSignificantToken();

      matches = this.significantToken.match(significantToken);
    }

    return matches;
  }

  setPrecedence(precedence) {
    this.precedence = precedence;
  }

  setSignificantToken(significantToken) {
    this.significantToken = significantToken;
  }

  asParseTree(tokens, abridged = false) {
    const terminalNode = this,  ///
          terminalNodeParseTree = TerminalNodeParseTree.fromTerminalNodeTokensAndAbridged(terminalNode, tokens, abridged),
          parseTree = terminalNodeParseTree;  ///

    return parseTree;
  }

  static fromPrecedence(Class, precedence) {
    if (precedence === undefined) {
      precedence = Class; ///

      Class = TerminalNode; ///
    }

    const significantToken = null,
          terminalNode = new Class(precedence, significantToken);

    return terminalNode;
  }

  static fromPrecedenceAndSignificantToken(Class, precedence, significantToken) {
    if (significantToken === undefined) {
      significantToken = precedence; ///

      precedence = Class; ///

      Class = TerminalNode; ///
    }

    const terminalNode = new Class(precedence, significantToken);
    
    return terminalNode;
  }
}
