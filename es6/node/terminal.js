'use strict';

var TerminalNodeParseTree = require('../parseTree/terminalNode');

class TerminalNode {
  constructor(content, type) {
    this.content = content;
    this.type = type;
  }
  
  getContent() {
    var content = (this.type === null) ?
                    this.content :
                   `${this.content}[${this.type}]`; ///

    return content;
  }
  
  getParseTree() {
    var terminalNode = this,  ///
        terminalNodeParseTree = TerminalNodeParseTree.fromTerminalNode(terminalNode),
        parseTree = terminalNodeParseTree;  ///

    return parseTree;
  }
}

module.exports = TerminalNode;
