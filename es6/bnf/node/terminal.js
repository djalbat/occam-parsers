'use strict';

var TerminalNodeParseTree = require('../parseTree/terminalNode');

class TerminalNode {
  constructor(significantToken) {
    this.significantToken = significantToken;
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

  query(expression, index) {
    var node = (expression === '*') ?
                  this :
                    null;

    return node;
  }

  update() {

  }
}

module.exports = TerminalNode;
