'use strict';

var ParseTree = require('../parseTree');

class EmptyParseTree extends ParseTree {
  static fromDepth(depth, Class, ...args) {
    Class = Class || EmptyParseTree;
    
    var lines = [],
        index = 0;

    while (index < depth) {
      lines[index++] = '';
    }

    args.unshift(lines);
    args.unshift(null);

    var emptyParseTree = new (Function.prototype.bind.apply(Class, args));  ///

    return emptyParseTree;
  }
}

module.exports = EmptyParseTree;
