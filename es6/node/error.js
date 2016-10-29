'use strict';

var ErrorNodeParseTree = require('../parseTree/errorNode');

class ErrorNode {
  constructor(string, message) {
    this.string = string;
    this.message = message;
  }


  getString() {
    return this.string;
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
