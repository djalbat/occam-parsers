'use strict';

var TerminalNodeParseTree = require('../parseTree/terminalNode');

class TerminalNode {
  constructor(str, type) {
    this.str = str;
    this.type = type;
  }
  
  getString() {
    var str = (this.type === null) ?
                 this.str :
                `${this.str}[${this.type}]`; ///

    return str;
  }
  
  getParseTree() {
    var terminalNode = this,  ///
        terminalNodeParseTree = TerminalNodeParseTree.fromTerminalNode(terminalNode),
        parseTree = terminalNodeParseTree;  ///

    return parseTree;
  }
}

module.exports = TerminalNode;
