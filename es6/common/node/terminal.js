'use strict';

var TerminalNodeParseTree = require('../parseTree/terminalNode');

class TerminalNode {
  constructor(significantToken) {
    this.significantToken = significantToken;
  }

  getSignificantToken() {
    return this.significantToken;
  }

  getLine() {
    var line = this.significantToken.getLine();

    return line;
  }

  getFirstLine() {
    var line = this.getLine(),
        firstLine = line; ///

    return firstLine;
  }

  getLastLine() {
    var line = this.getLine(),
        lastLine = line;  ///

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
    var terminalNode = new Class(significantToken);

    return terminalNode;
  }
}

module.exports = TerminalNode;
