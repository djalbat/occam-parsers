'use strict';

var ParseTree = require('../parseTree');

class HorizontalBranchParseTree extends ParseTree {
  static fromWidth(width) {
    var string = stringFromCharactersWidth(width, '-'),
        line = string, ///
        lines = [line],
        horizontalBranchParseTree = new HorizontalBranchParseTree(lines);

    return horizontalBranchParseTree;
  }
}

module.exports = HorizontalBranchParseTree;

function stringFromCharactersWidth(charactersWidth, character) {
  var string = '';

  for (var index = 0; index < charactersWidth; index++) {
    string += character;
  }

  return string;
}
