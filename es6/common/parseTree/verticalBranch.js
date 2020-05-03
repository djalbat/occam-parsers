"use strict";

import ParseTree from "../parseTree";

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
    const string = "|",
          verticalBranchPosition = 0,
          verticalBranchParseTree = VerticalBranchParseTree.fromStringAndVerticalBranchPosition(VerticalBranchParseTree, string, verticalBranchPosition),
          leftMarginWidth = Math.floor(width/2),
          rightMarginWidth = width - leftMarginWidth - 1;

    verticalBranchParseTree.addLeftMargin(leftMarginWidth);
    verticalBranchParseTree.addRightMargin(rightMarginWidth);

    return verticalBranchParseTree;
  }

  static fromDepthAndVerticalBranchPosition(Class, depth, verticalBranchPosition) {
    const lines = linesFromDepth(depth),
          args = [null, lines, verticalBranchPosition],
          verticalBranchParseTree = new (Function.prototype.bind.apply(Class, args));  ///

    return verticalBranchParseTree;
  }

  static fromStringAndVerticalBranchPosition(Class, string, verticalBranchPosition) {
    if (verticalBranchPosition === undefined) {
      verticalBranchPosition = string;
      string = Class;
      Class = ParseTree;
    }
    
    const line = string, ///
          lines = [line],
          args = [null, lines, verticalBranchPosition],
          verticalBranchParseTree = new (Function.prototype.bind.apply(Class, args));  ///

    return verticalBranchParseTree;
  }
}

module.exports = VerticalBranchParseTree;

function linesFromDepth(depth) {
  const lines = [];

  let index = 0;

  while (index < depth) {
    lines[index++] = "";
  }

  return lines;
}
