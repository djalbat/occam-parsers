'use strict';

const VerticalBranchParseTree = require('./verticalBranch');

class RuleNameParseTree extends VerticalBranchParseTree {
  static fromNonTerminalNodeAndLines(nonTerminalNode, lines) {
    const ruleName = nonTerminalNode.getRuleName(),
          lineNumbers = lineNumbersFromNonTerminalNodeAndLines(nonTerminalNode, lines),
          string = `${ruleName}${lineNumbers}`,
          stringLength = string.length,
          verticalBranchParseTreeWidth = stringLength, ///
          verticalBranchParseTree = VerticalBranchParseTree.fromWidth(verticalBranchParseTreeWidth),
          verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(),
          ruleNameParseTree = VerticalBranchParseTree.fromStringAndVerticalBranchPosition(RuleNameParseTree, string, verticalBranchPosition);

    ruleNameParseTree.appendToTop(verticalBranchParseTree);

    return ruleNameParseTree;
  }
}

module.exports = RuleNameParseTree;

function lineNumbersFromNonTerminalNodeAndLines(nonTerminalNode, lines) {
  let lineNumbers;

  const nonTerminalNodeNullified = nonTerminalNode.isNullified();

  if (nonTerminalNodeNullified) {
    lineNumbers = '';
  } else {
    const firstSignificantToken = nonTerminalNode.getFirstSignificantToken(),
          lastSignificantToken = nonTerminalNode.getLastSignificantToken(),
          firstSignificantTokenLine = firstSignificantToken.getLine(),
          lastSignificantTokenLine = lastSignificantToken.getLine(),
          firstLine = firstSignificantTokenLine,  ///
          lastLine = lastSignificantTokenLine;  ///

    if (firstLine === lastLine) {
      const line = firstLine, ///
            lineIndex = lines.indexOf(line),
            lineNumber = lineIndex + 1;

      lineNumbers = `(${lineNumber})`;
    } else {
      const firstLineIndex = lines.indexOf(firstLine),
            lastLineIndex = lines.indexOf(lastLine),
            firstLineNumber = firstLineIndex + 1,
            lastLineNumber = lastLineIndex + 1;

      lineNumbers = `(${firstLineNumber}-${lastLineNumber})`;
    }
  }

  return lineNumbers;
}
