'use strict';

const VerticalBranchParseTree = require('../verticalBranch');

class EpsilonTerminalNodeParseTree extends VerticalBranchParseTree {
  static fromEpsilonTerminalNode(epsilonTerminalNode, lines) {
    const content = epsilonTerminalNode.getContent(),
          string = `${content}`,
          stringLength = string.length,
          verticalBranchParseTreeWidth = stringLength, ///
          verticalBranchParseTree = VerticalBranchParseTree.fromWidth(verticalBranchParseTreeWidth),
          verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(), 
          terminalNodeParseTree = VerticalBranchParseTree.fromString(string, EpsilonTerminalNodeParseTree, verticalBranchPosition);
    
    terminalNodeParseTree.appendToTop(verticalBranchParseTree);

    return terminalNodeParseTree;
  }
}

module.exports = EpsilonTerminalNodeParseTree;
