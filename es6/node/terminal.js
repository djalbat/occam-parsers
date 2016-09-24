'use strict';

var ParseTree = require('../parseTree');

class TerminalNode {
  constructor(str) {
    this.str = str;
  }

  getParseTree() {
    var parseTree = ParseTree.fromString(this.str);
    
    return parseTree;
  }
}

module.exports = TerminalNode;
