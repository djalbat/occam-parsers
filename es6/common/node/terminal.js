'use strict';

const TerminalNodeParseTree = require('../parseTree/terminalNode');

class TerminalNode {
  constructor(significantToken, line) {
    this.significantToken = significantToken;
    this.line = line;
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

  getContent() { return this.significantToken.getContent(); }
  
  generateParseTree(lines) {
    const terminalNode = this,  ///
          terminalNodeParseTree = TerminalNodeParseTree.fromTerminalNode(terminalNode, lines),
          parseTree = terminalNodeParseTree;  ///

    return parseTree;
  }

  static fromSignificantToken(significantToken, Class = TerminalNode) {
    const line = significantToken.getLine(),
          terminalNode = new Class(significantToken, line),
          error = false;
    
    significantToken.setError(error);

    return terminalNode;
  }
}

module.exports = TerminalNode;
