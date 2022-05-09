"use strict";

import VerticalBranchParseTree from "./verticalBranch";

export default class RuleNameParseTree extends VerticalBranchParseTree {
  static fromNonTerminalNodeAndTokens(nonTerminalNode, tokens, abridged) {
    const ruleName = nonTerminalNode.getRuleName(),
          firstSignificantToken = nonTerminalNode.getFirstSignificantToken(),
          lastSignificantToken = nonTerminalNode.getLastSignificantToken(),
          firstSignificantTokenIndex = tokens.indexOf(firstSignificantToken),
          lastSignificantTokenIndex = tokens.indexOf(lastSignificantToken),
          tokenIndexes = (firstSignificantTokenIndex !== lastSignificantTokenIndex) ?
                           `${firstSignificantTokenIndex}-${lastSignificantTokenIndex}` :
                             `${firstSignificantTokenIndex}`,
          string = abridged ?
                     `${ruleName}` :
                       `${ruleName}(${tokenIndexes})`,
          stringLength = string.length,
          verticalBranchParseTreeWidth = stringLength, ///
          verticalBranchParseTree = VerticalBranchParseTree.fromWidth(verticalBranchParseTreeWidth),
          verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(),
          ruleNameParseTree = VerticalBranchParseTree.fromStringAndVerticalBranchPosition(RuleNameParseTree, string, verticalBranchPosition);

    ruleNameParseTree.appendToTop(verticalBranchParseTree);

    return ruleNameParseTree;
  }
}
