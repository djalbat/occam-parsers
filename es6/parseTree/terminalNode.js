'use strict';

var VerticalBranchParseTree = require('../parseTree/verticalBranch');

class TerminalNodeParseTree extends VerticalBranchParseTree {
  static fromTerminalNode(terminalNode) {
    var str = terminalNode.getString(),
        strLength = str.length,
        verticalBranchParseTreeWidth = strLength, ///
        verticalBranchParseTree = VerticalBranchParseTree.fromWidth(verticalBranchParseTreeWidth),
        verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(), 
        terminalNodeParseTree = VerticalBranchParseTree.fromString(str, TerminalNodeParseTree, verticalBranchPosition);
    
    terminalNodeParseTree.appendToTop(verticalBranchParseTree);

    return terminalNodeParseTree;
  }
}

module.exports = TerminalNodeParseTree;
