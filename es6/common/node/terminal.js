'use strict';

var TerminalNodeParseTree = require('../../bnf/parseTree/terminalNode');

class TerminalNode {
  constructor(productionName, significantToken, line) {
    this.productionName = productionName;
    this.significantToken = significantToken;
    this.line = line;
  }

  getProductionName() {
    return this.productionName;
  }

  getSignificantToken() {
    return this.significantToken;
  }

  getLine() {
    return this.line;
  }

  getChildNodes() {
    var childNodes = [];  ///
    
    return childNodes;
  }
  
  getStartLine() {
    var startLine = this.line; ///

    return startLine;
  }

  getEndLine() {
    var endLine = this.line; ///

    return endLine;
  }

  setChildNodes(childNodes) {
    ///
  }

  getParseTree() {
    var terminalNode = this,  ///
        terminalNodeParseTree = TerminalNodeParseTree.fromTerminalNode(terminalNode),
        parseTree = terminalNodeParseTree;  ///

    return parseTree;
  }

  static fromProductionNameAndSignificantToken(productionName, significantToken, Class = TerminalNode) {
    var line = significantToken.getLine(),
        terminalNode = new Class(productionName, significantToken, line);

    return terminalNode;
  }
}

module.exports = TerminalNode;
