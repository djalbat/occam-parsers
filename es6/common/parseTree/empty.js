'use strict';

const ParseTree = require('../parseTree');

class EmptyParseTree extends ParseTree {
  static fromDepth(Class, depth, ...args) {
    Class = Class || EmptyParseTree;
    
    const lines = [];
    
    let index = 0;

    while (index < depth) {
      lines[index++] = '';
    }

    args.unshift(lines);
    args.unshift(null);

    const emptyParseTree = new (Function.prototype.bind.apply(Class, args));  ///

    return emptyParseTree;
  }
}

module.exports = EmptyParseTree;
