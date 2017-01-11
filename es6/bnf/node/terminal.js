'use strict';

var TerminalNodeParseTree = require('../parseTree/terminalNode');

class TerminalNode {
  constructor(content, significantToken) {
    this.content = content;
    this.significantToken = significantToken;
  }
  
  getContent() {
    var content = this.content;

    if (this.significantToken !== null) {
      var significantTokenType = this.significantToken.getType();

      content = `${content}[${significantTokenType}]`; ///
    }

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
