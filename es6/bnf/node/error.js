'use strict';

var ErrorNodeParseTree = require('../parseTree/errorNode');

class ErrorNode {
  constructor(content, message) {
    this.content = content;
    this.message = message;
  }

  getContent() {
    return this.content;
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
