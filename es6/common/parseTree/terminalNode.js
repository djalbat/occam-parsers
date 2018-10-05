'use strict';

const VerticalBranchParseTree = require('./verticalBranch');

class TerminalNodeParseTree extends VerticalBranchParseTree {
  static fromTerminalNodeAndTokens(terminalNode, tokens) {
    const token = terminalNode.getToken(),
          content = terminalNode.getContent(),
          type = token.getType(),
          tokenIndex = tokens.indexOf(token),
          string = `${content}[${type}](${tokenIndex})`,
          stringLength = string.length,
          verticalBranchParseTreeWidth = stringLength, ///
          verticalBranchParseTree = VerticalBranchParseTree.fromWidth(verticalBranchParseTreeWidth),
          verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(),
          terminalNodeParseTree = VerticalBranchParseTree.fromStringAndVerticalBranchPosition(TerminalNodeParseTree, string, verticalBranchPosition);

    terminalNodeParseTree.appendToTop(verticalBranchParseTree);

    return terminalNodeParseTree;
  }
}

module.exports = TerminalNodeParseTree;
