'use strict';

const VerticalBranchParseTree = require('./verticalBranch');

class RuleNameParseTree extends VerticalBranchParseTree {
  static fromNonTerminalNode(nonTerminalNode, lines) {
    const ruleName = nonTerminalNode.getRuleName(),
          firstLine = nonTerminalNode.getFirstLine(),
          lastLine = nonTerminalNode.getLastLine(),
          firstLineIndex = lines.indexOf(firstLine),
          lastLineIndex = lines.indexOf(lastLine),
          firstLineNumber = firstLineIndex + 1,
          lastLineNumber = lastLineIndex + 1,
          string = `${ruleName}(${firstLineNumber}-${lastLineNumber})`,
          stringLength = string.length,
          verticalBranchParseTreeWidth = stringLength, ///
          verticalBranchParseTree = VerticalBranchParseTree.fromWidth(verticalBranchParseTreeWidth),
          verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(),
          ruleNameParseTree = VerticalBranchParseTree.fromString(string, RuleNameParseTree, verticalBranchPosition);

    ruleNameParseTree.appendToTop(verticalBranchParseTree);

    return ruleNameParseTree;
  }
}

module.exports = RuleNameParseTree;
