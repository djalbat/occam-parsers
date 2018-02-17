'use strict';

const TerminalNodeParseTree = require('../parseTree/terminalNode');

class TerminalNode {
  constructor(significantToken) {
    this.significantToken = significantToken;

    this.parentNode = undefined;  ///
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

  isNullified() {
    const nullified = (this.significantToken === null);

    return nullified;
  }

  getContent() { return this.significantToken.getContent(); }

  setParentNode(parentNode) {
    this.parentNode = parentNode;
  }

  asParseTree(lines) {
    const terminalNode = this,  ///
          terminalNodeParseTree = TerminalNodeParseTree.fromTerminalNodeAndLines(terminalNode, lines),
          parseTree = terminalNodeParseTree;  ///

    return parseTree;
  }

  static fromSignificantToken(Class, significantToken) {
    if (significantToken === undefined) {
      significantToken = Class;
      Class = TerminalNode
    }

    const terminalNode = new Class(significantToken);
    
    return terminalNode;
  }
}

module.exports = TerminalNode;
