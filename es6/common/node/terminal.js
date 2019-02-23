'use strict';

const TerminalNodeParseTree = require('../parseTree/terminalNode');

class TerminalNode {
  constructor(significantToken, parentNode) {
    this.significantToken = significantToken;
    this.parentNode = parentNode;
  }

  getSignificantToken() {
    return this.significantToken;
  }

  getParentNode() {
    return this.parentNode;
  }

  getFirstSignificantToken() {
    const firstSignificantToken = this.significantToken;  ///

    return firstSignificantToken;
  }

  getLastSignificantToken() {
    const lastSignificantToken = this.significantToken;  ///

    return lastSignificantToken;
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

  getContent() { return this.significantToken.getContent(); }

  setSignificantToken(significantToken) {
    this.significantToken = significantToken;
  }

  setParentNode(parentNode) {
    this.parentNode = parentNode;
  }

  asParseTree(tokens) {
    const terminalNode = this,  ///
          terminalNodeParseTree = TerminalNodeParseTree.fromTerminalNodeAndTokens(terminalNode, tokens),
          parseTree = terminalNodeParseTree;  ///

    return parseTree;
  }

  static fromSignificantToken(Class, significantToken) {
    if (significantToken === undefined) {
      significantToken = Class;
      Class = TerminalNode; ///
    }

    const parentNode = undefined, ///
          terminalNode = new Class(significantToken, parentNode);
    
    return terminalNode;
  }
}

module.exports = TerminalNode;
