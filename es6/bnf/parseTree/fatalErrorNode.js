'use strict';

var VerticalBranchParseTree = require('../parseTree/verticalBranch');

class FatalErrorNodeParseTree extends VerticalBranchParseTree {
  static fromFatalErrorNode(fatalErrorNode) {
    var message = fatalErrorNode.getMessage(),
        string = `ERROR:${message}`,
        stringLength = string.length,
        verticalBranchParseTreeWidth = stringLength, ///
        verticalBranchParseTree = VerticalBranchParseTree.fromWidth(verticalBranchParseTreeWidth),
        verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(), 
        errorNodeParseTree = VerticalBranchParseTree.fromString(string, FatalErrorNodeParseTree, verticalBranchPosition);
    
    errorNodeParseTree.appendToTop(verticalBranchParseTree);

    return errorNodeParseTree;
  }
}

module.exports = FatalErrorNodeParseTree;
