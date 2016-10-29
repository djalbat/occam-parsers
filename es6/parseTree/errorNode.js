'use strict';

var VerticalBranchParseTree = require('../parseTree/verticalBranch');

class ErrorNodeParseTree extends VerticalBranchParseTree {
  static fromErrorNode(errorNode) {
    var str = errorNode.getString(),
        message = errorNode.getMessage();

    str = `${str}[${message}]`; ///

    var strLength = str.length,
        verticalBranchParseTreeWidth = strLength, ///
        verticalBranchParseTree = VerticalBranchParseTree.fromWidth(verticalBranchParseTreeWidth),
        verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(), 
        errorNodeParseTree = VerticalBranchParseTree.fromString(str, ErrorNodeParseTree, verticalBranchPosition);
    
    errorNodeParseTree.appendToTop(verticalBranchParseTree);

    return errorNodeParseTree;
  }
}

module.exports = ErrorNodeParseTree;
