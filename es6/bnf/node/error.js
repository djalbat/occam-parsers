'use strict';

var ErrorNodeParseTree = require('../parseTree/errorNode');

class ErrorNode {
  constructor(message) {
    this.message = message;
  }

  getMessage() {
    return this.message;
  }

  getParseTree() {
    var errorNode = this,  ///
        errorNodeParseTree = ErrorNodeParseTree.fromErrorNode(errorNode),
        parseTree = errorNodeParseTree;  ///

    return parseTree;
  }
}

module.exports = ErrorNode;
