'use strict';

var NonTerminalNode = require('./nonTerminal');

class DocumentNode extends NonTerminalNode {
  constructor() {
    var childNodes = [],
        productionName = 'document';

    super(childNodes, productionName);
  }

  addChildNodes(childNodes) {
    spliceArray(this.childNodes, 0, 0, childNodes);
  }

  getParseTree() {
    var parseTree = super.getParseTree();

    parseTree.shiftLine();  ///

    return parseTree;
  }
}

module.exports = DocumentNode;

function spliceArray(array, start, deleteCount, itemsArray) {
  var args = [start, deleteCount].concat(itemsArray);

  Array.prototype.splice.apply(array, args);
}
