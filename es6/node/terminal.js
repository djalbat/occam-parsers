'use strict';

var ParseTree = require('../parseTree');

class TerminalNode {
  constructor(str) {
    this.str = str;
  }
  
  getString() {
    return this.str;
  }

  getParseTree() {
    var terminalNode = this,  ///
        parseTree = ParseTree.fromTerminalNode(terminalNode);
    
    return parseTree;
  }
}

module.exports = TerminalNode;
