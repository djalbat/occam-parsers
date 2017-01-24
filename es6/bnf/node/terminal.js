'use strict';

var TerminalNodeParseTree = require('../parseTree/terminalNode');

class TerminalNode {
  constructor(significantToken, productionName = null) {
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
  
  getContent() {
    var significantTokenType = this.significantToken.getType(),
        significantTokenContent = this.significantToken.getContent(),
        content = `${significantTokenContent}[${significantTokenType}]`; ///

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
}

module.exports = TerminalNode;
