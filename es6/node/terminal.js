'use strict';

var TerminalNodeParseTree = require('../parseTree/terminalNode');

class TerminalNode {
  constructor(string, type) {
    this.string = string;
    this.type = type;
  }
  
  getString() {
    var string = (this.type === null) ?
                    this.string :
                   `${this.string}[${this.type}]`; ///

    return string;
  }
  
  getParseTree() {
    var terminalNode = this,  ///
        terminalNodeParseTree = TerminalNodeParseTree.fromTerminalNode(terminalNode),
        parseTree = terminalNodeParseTree;  ///

    return parseTree;
  }
}

module.exports = TerminalNode;
