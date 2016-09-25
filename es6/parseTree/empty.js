'use strict';

var ParseTree = require('../parseTree');

class EmptyParseTree extends ParseTree {
  static fromDepth(depth) {
    var lines = [],
        index = 0;

    while (index < depth) {
      lines[index++] = '';
    }

    var emptyParseTree = new ParseTree(lines);

    return emptyParseTree;
  }
}

module.exports = EmptyParseTree;
