'use strict';

var TerminalNodeParseTree = require('../../bnf/parseTree/terminalNode');

class TerminalNode {
  constructor(significantToken, productionName) {
    this.significantToken = significantToken;
    this.productionName = productionName;
  }
  
  getChildNodes() {
    var childNodes = [];  ///
    
    return childNodes;
  }
  
  getProductionName() {
    return this.productionName;
  }

  getLine() { return this.significantToken.getLine() };

  getStartLine() {
    var line = this.getLine(),
        startLine = line; ///

    return startLine;
  }

  getEndLine() {
    var line = this.getLine(),
        endLine = line; ///

    return endLine;
  }

  getContent() {
    var significantTokenType = this.significantToken.getType(),
        significantTokenContent = this.significantToken.getContent(),
        line = this.getLine(),
        lineNumber = line.getNumber(),
        content = `${significantTokenContent}[${significantTokenType}] (${lineNumber})`;

    return content;
  }

  getSignificantToken() {
    return this.significantToken;
  }
  
  getParseTree() {
    var terminalNode = this,  ///
        terminalNodeParseTree = TerminalNodeParseTree.fromTerminalNode(terminalNode),
        parseTree = terminalNodeParseTree;  ///

    return parseTree;
  }

  static fromSignificantTokenAndProductionName(significantToken, productionName, Class = TerminalNode) {
    var terminalNode = new Class(significantToken, productionName);

    return terminalNode;
  }
}

module.exports = TerminalNode;
