'use strict';

const VerticalBranchParseTree = require('./verticalBranch');

class TerminalNodeParseTree extends VerticalBranchParseTree {
  static fromTerminalNodeAndLines(terminalNode, lines) {
    const line = terminalNode.getLine(),
          lineIndex = lines.indexOf(line),
          lineNumber = lineIndex + 1,
          significantToken = terminalNode.getSignificantToken(),
          type = significantToken.getType(),
          content = significantToken.getContent(),
          string = `${content}[${type}](${lineNumber})`,
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
