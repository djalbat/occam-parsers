'use strict';

var ParseTree = require('../parseTree'),
    VerticalBranchParseTree = require('../parseTree/verticalBranch');

class TerminalNodeParseTree extends ParseTree {
  constructor(lines, verticalBranchParseTree) {
    super(lines);

    this.verticalBranchParseTree = verticalBranchParseTree;
  }
  
  getVerticalBranchPosition() { return this.verticalBranchParseTree.getVerticalBranchPosition(); }
  
  static fromTerminalNode(terminalNode) {
    var str = terminalNode.getString(),
        strLength = str.length,
        verticalBranchParseTreeWidth = strLength, ///
        verticalBranchParseTree = VerticalBranchParseTree.fromWidth(verticalBranchParseTreeWidth),
        terminalNodeParseTree = ParseTree.fromString(str, TerminalNodeParseTree, verticalBranchParseTree);
    
    terminalNodeParseTree.appendToTop(verticalBranchParseTree);

    return terminalNodeParseTree;
  }
}

module.exports = TerminalNodeParseTree;
