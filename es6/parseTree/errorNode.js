'use strict';

var VerticalBranchParseTree = require('../parseTree/verticalBranch');

class ErrorNodeParseTree extends VerticalBranchParseTree {
  static fromErrorNode(errorNode) {
    var string = errorNode.getString(),
        message = errorNode.getMessage();

    string = `${string}[${message}]`; ///

    var stringLength = string.length,
        verticalBranchParseTreeWidth = stringLength, ///
        verticalBranchParseTree = VerticalBranchParseTree.fromWidth(verticalBranchParseTreeWidth),
        verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(), 
        errorNodeParseTree = VerticalBranchParseTree.fromString(string, ErrorNodeParseTree, verticalBranchPosition);
    
    errorNodeParseTree.appendToTop(verticalBranchParseTree);

    return errorNodeParseTree;
  }
}

module.exports = ErrorNodeParseTree;
