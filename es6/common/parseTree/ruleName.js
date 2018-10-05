'use strict';

const VerticalBranchParseTree = require('./verticalBranch');

class RuleNameParseTree extends VerticalBranchParseTree {
  static fromNonTerminalNodeAndTokens(nonTerminalNode, tokens) {
    const ruleName = nonTerminalNode.getRuleName(),
          tokenIndexes = tokenIndexesFromNonTerminalNodeAndTokens(nonTerminalNode, tokens),
          string = `${ruleName}${tokenIndexes}`,
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

function tokenIndexesFromNonTerminalNodeAndTokens(nonTerminalNode, tokens) {
  let tokenIndexes;

  const nonTerminalNodeNullified = nonTerminalNode.isNullified();

  if (nonTerminalNodeNullified) {
    tokenIndexes = '';
  } else {
    const firstToken = nonTerminalNode.getFirstToken(),
          lastToken = nonTerminalNode.getLastToken(),
          firstTokenIndex = tokens.indexOf(firstToken),
          lastTokenIndex = tokens.indexOf(lastToken);

    tokenIndexes = (firstTokenIndex !== lastTokenIndex) ?
                      `(${firstTokenIndex}-${lastTokenIndex})` :
                        `(${firstTokenIndex})`;
  }

  return tokenIndexes;
}
