'use strict';

var ParseTree = require('../parseTree'),
    VerticalBranchParseTree = require('../parseTree/verticalBranch');

class TerminalNodeParseTree extends ParseTree {
  static fromTerminalNode(nonTerminalNode) {
    var str = nonTerminalNode.getString(),
        terminalNodeParseTree = ParseTree.fromString(str),
        terminalNodeParseTreeWidth = terminalNodeParseTree.getWidth(),
        verticalBranchParseTree = VerticalBranchParseTree.fromWidth(terminalNodeParseTreeWidth);

    terminalNodeParseTree.appendToTop(verticalBranchParseTree);

    return terminalNodeParseTree;
  }
}

module.exports = TerminalNodeParseTree;
