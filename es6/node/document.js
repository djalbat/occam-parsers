'use strict';

var NonTerminalNode = require('./nonTerminal');

class DocumentNode extends NonTerminalNode {
  constructor() {
    var childNodes = [];

    super(childNodes);
  }

  addChildNodes(childNodes) {
    spliceArray(this.childNodes, 0, 0, childNodes);
  }
}

module.exports = DocumentNode;

function spliceArray(array, start, deleteCount, itemsArray) {
  var args = [start, deleteCount].concat(itemsArray);

  Array.prototype.splice.apply(array, args);
}
