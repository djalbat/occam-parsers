'use strict';

var TerminalNodeParseTree = require('../../bnf/parseTree/terminalNode');

class TerminalNode {
  constructor(significantToken, line) {
    this.significantToken = significantToken;
    this.line = line;
  }

  getSignificantToken() {
    return this.significantToken;
  }

  getLine() {
    return this.line;
  }

  getFirstLine() {
    var firstLine = this.line; ///

    return firstLine;
  }

  getLastLine() {
    var lastLine = this.line; ///

    return lastLine;
  }

  getFirstSignificantToken() {
    var firstSignificantToken = this.significantToken;  ///

    return firstSignificantToken;
  }

  getLastSignificantToken() {
    var lastSignificantToken = this.significantToken;  ///

    return lastSignificantToken;
  }

  getParseTree() {
    var terminalNode = this,  ///
        terminalNodeParseTree = TerminalNodeParseTree.fromTerminalNode(terminalNode),
        parseTree = terminalNodeParseTree;  ///

    return parseTree;
  }

  static fromSignificantToken(significantToken, Class = TerminalNode) {
    var line = significantToken.getLine(),
        terminalNode = new Class(significantToken, line);

    return terminalNode;
  }
}

module.exports = TerminalNode;
