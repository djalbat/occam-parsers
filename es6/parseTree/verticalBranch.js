'use strict';

var ParseTree = require('../parseTree');

class VerticalBranchParseTree extends ParseTree {
  constructor(lines, verticalBranchPosition) {
    super(lines);
    
    this.verticalBranchPosition = verticalBranchPosition;
  }
  
  getVerticalBranchPosition() {
    return this.verticalBranchPosition;
  }

  addLeftMargin(leftMarginWidth) {
    super.addLeftMargin(leftMarginWidth);

    this.verticalBranchPosition += leftMarginWidth; ///
  }

  static fromWidth(width) {
    var leftMarginWidth = Math.floor(width/2),
        rightMarginWidth = width - leftMarginWidth - 1,
        verticalBranchStr = '|',
        verticalBranchPosition = 0, ///
        verticalBranchParseTree = ParseTree.fromString(verticalBranchStr, VerticalBranchParseTree, verticalBranchPosition);

    verticalBranchParseTree.addLeftMargin(leftMarginWidth);
    verticalBranchParseTree.addRightMargin(rightMarginWidth);

    return verticalBranchParseTree;
  }
}

module.exports = VerticalBranchParseTree;
