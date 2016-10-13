'use strict';

var ParseTree = require('../parseTree');

class HorizontalBranchParseTree extends ParseTree {
  static fromWidth(width) {
    var str = strFromCharactersWidth(width, '-'),
        line = str, ///
        lines = [line],
        horizontalBranchParseTree = new HorizontalBranchParseTree(lines);

    return horizontalBranchParseTree;
  }
}

module.exports = HorizontalBranchParseTree;

function strFromCharactersWidth(charactersWidth, character) {
  var str = '';

  for (var index = 0; index < charactersWidth; index++) {
    str += character;
  }

  return str;
}
