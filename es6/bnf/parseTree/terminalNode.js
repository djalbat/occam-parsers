'use strict';

var VerticalBranchParseTree = require('../parseTree/verticalBranch');

class TerminalNodeParseTree extends VerticalBranchParseTree {
  static fromTerminalNode(terminalNode) {
    var line = terminalNode.getLine(),
        lineNumber = line.getNumber(),
        significantToken = terminalNode.getSignificantToken(),
        significantTokenType = significantToken.getType(),
        significantTokenContent = significantToken.getContent(),
        string = `${significantTokenContent}[${significantTokenType}] (${lineNumber})`,
        stringLength = string.length,
        verticalBranchParseTreeWidth = stringLength, ///
        verticalBranchParseTree = VerticalBranchParseTree.fromWidth(verticalBranchParseTreeWidth),
        verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(), 
        terminalNodeParseTree = VerticalBranchParseTree.fromString(string, TerminalNodeParseTree, verticalBranchPosition);
    
    terminalNodeParseTree.appendToTop(verticalBranchParseTree);

    return terminalNodeParseTree;
  }
}

module.exports = TerminalNodeParseTree;
