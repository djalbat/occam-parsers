'use strict';

const TerminalNodeParseTree = require('../parseTree/terminalNode');

class TerminalNode {
  constructor(significantToken, line) {
    this.significantToken = significantToken;
    this.line = line;
  }

  isEpsilonNode() {
    const epsilonNode = false;

    return epsilonNode;
  }

  isTerminalNode() {
    const terminalNode = true;
    
    return terminalNode;
  }

  getSignificantToken() {
    return this.significantToken;
  }

  getLine() {
    return this.line;
  }

  getFirstSignificantToken() {
    const firstSignificantToken = this.significantToken;  ///

    return firstSignificantToken;
  }

  getLastSignificantToken() {
    const lastSignificantToken = this.significantToken;  ///

    return lastSignificantToken;
  }

  getFirstLine() {
    const firstLine = this.line; ///

    return firstLine;
  }

  getLastLine() {
    const lastLine = this.line;  ///

    return lastLine;
  }

  isNullified() {
    const firstLine = this.getFirstLine(),
          nullified = (firstLine === null);  ///

    return nullified;
  }

  getContent() { return this.significantToken.getContent(); }

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

    const line = significantToken.getLine(),
          terminalNode = new Class(significantToken, line);
    
    return terminalNode;
  }
}

module.exports = TerminalNode;
