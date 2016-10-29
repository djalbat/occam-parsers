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
    var string = '|',
        verticalBranchPosition = 0,
        verticalBranchParseTree = VerticalBranchParseTree.fromString(string, VerticalBranchParseTree, verticalBranchPosition),
        leftMarginWidth = Math.floor(width/2),
        rightMarginWidth = width - leftMarginWidth - 1;

    verticalBranchParseTree.addLeftMargin(leftMarginWidth);
    verticalBranchParseTree.addRightMargin(rightMarginWidth);

    return verticalBranchParseTree;
  }
  
  static fromString(string, Class, verticalBranchPosition) {
    Class = Class || ParseTree;

    var line = string, ///
        lines = [line],
        args = [null, lines, verticalBranchPosition],
        verticalBranchParseTree = new (Function.prototype.bind.apply(Class, args));  ///

    return verticalBranchParseTree;
  }
}

module.exports = VerticalBranchParseTree;
