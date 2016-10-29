'use strict';

var ErrorNodeParseTree = require('../parseTree/errorNode');

class ErrorNode {
  constructor(str, message) {
    this.str = str;
    this.message = message;
  }


  getString() {
    return this.str;
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
