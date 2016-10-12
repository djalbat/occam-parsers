'use strict';

var ParseTree = require('../parseTree');

class HorizontalBranchParseTree extends ParseTree {
  static fromWidths(width, leftMarginWidth, rightMarginWidth) {
    var horizontalBranchStrWidth = width - leftMarginWidth - rightMarginWidth,
        horizontalBranchStr = strFromCharactersWidth(horizontalBranchStrWidth, '-'),
        horizontalBranchParseTree = ParseTree.fromString(horizontalBranchStr);

    horizontalBranchParseTree.addLeftMargin(leftMarginWidth);
    horizontalBranchParseTree.addRightMargin(rightMarginWidth);

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
