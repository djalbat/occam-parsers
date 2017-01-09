'use strict';

var VerticalBranchParseTree = require('../parseTree/verticalBranch');

class ErrorNodeParseTree extends VerticalBranchParseTree {
  static fromErrorNode(errorNode) {
    var content = errorNode.getContent(),
        message = errorNode.getMessage(),
        string = `${content}[${message}]`,
        stringLength = string.length,
        verticalBranchParseTreeWidth = stringLength, ///
        verticalBranchParseTree = VerticalBranchParseTree.fromWidth(verticalBranchParseTreeWidth),
        verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(), 
        errorNodeParseTree = VerticalBranchParseTree.fromString(string, ErrorNodeParseTree, verticalBranchPosition);
    
    errorNodeParseTree.appendToTop(verticalBranchParseTree);

    return errorNodeParseTree;
  }
}

module.exports = ErrorNodeParseTree;
