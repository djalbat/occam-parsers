'use strict';

var NonTerminalNode = require('./nonTerminal');

class DocumentNode extends NonTerminalNode {
  constructor() {
    var childNodes = [],
        name = 'document';

    super(childNodes, name);
  }

  addChildNodes(childNodes) {
    spliceArray(this.childNodes, 0, 0, childNodes);
  }

  toString() {
    var strArray = super.getStrArray(),
        string = strArray.reduce(function(string, str) {
          string += str + '\n';

          return string;
        }, '');

    return string;
  }
}

module.exports = DocumentNode;

function spliceArray(array, start, deleteCount, itemsArray) {
  var args = [start, deleteCount].concat(itemsArray);

  Array.prototype.splice.apply(array, args);
}
