'use strict';

var ParseTree = require('../parseTree');

class VerticalBranchParseTree extends ParseTree {
  static fromWidth(width) {
    var leftMarginWidth = Math.floor(width/2),
        verticalBranchStr = '|',
        verticalBranchStrLength = verticalBranchStr.length,
        rightMarginWidth = width - leftMarginWidth - verticalBranchStrLength,
        verticalBranchParseTree = ParseTree.fromString(verticalBranchStr);

    verticalBranchParseTree.addLeftMargin(leftMarginWidth);
    verticalBranchParseTree.addRightMargin(rightMarginWidth);

    return verticalBranchParseTree;
  }
}

module.exports = VerticalBranchParseTree;
