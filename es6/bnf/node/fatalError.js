'use strict';

var FatalErrorNodeParseTree = require('../parseTree/fatalErrorNode');

class FatalErrorNode {
  constructor(message) {
    this.message = message;
  }

  getMessage() {
    return this.message;
  }

  getParseTree() {
    var fatalErrorNode = this,  ///
        fatalErrorNodeParseTree = FatalErrorNodeParseTree.fromFatalErrorNode(fatalErrorNode),
        parseTree = fatalErrorNodeParseTree;  ///

    return parseTree;
  }
  
  update() {
    
  }
}

module.exports = FatalErrorNode;
