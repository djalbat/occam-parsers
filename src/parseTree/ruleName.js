"use strict";

import VerticalBranchParseTree from "./verticalBranch";

export default class RuleNameParseTree extends VerticalBranchParseTree {
  static fromNonTerminalNodeAndTokens(nonTerminalNode, tokens) {
    const ruleName = nonTerminalNode.getRuleName(),
          firstSignificantToken = nonTerminalNode.getFirstSignificantToken(),
          lastSignificantToken = nonTerminalNode.getLastSignificantToken(),
          firstSignificantTokenIndex = tokens.indexOf(firstSignificantToken),
          lastSignificantTokenIndex = tokens.indexOf(lastSignificantToken),
          tokenIndexes = (firstSignificantTokenIndex !== lastSignificantTokenIndex) ?
                          `${firstSignificantTokenIndex}-${lastSignificantTokenIndex}` :
                            `${firstSignificantTokenIndex}`;

    let string = `${ruleName} {${tokenIndexes}}`;

    const precedence = nonTerminalNode.getPrecedence();

    if (precedence !== null) {
      string = `${string} (${precedence})`;
    }

    const stringLength = string.length,
          verticalBranchParseTreeWidth = stringLength, ///
          verticalBranchParseTree = VerticalBranchParseTree.fromWidth(verticalBranchParseTreeWidth),
          verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(),
          ruleNameParseTree = VerticalBranchParseTree.fromStringAndVerticalBranchPosition(RuleNameParseTree, string, verticalBranchPosition);

    ruleNameParseTree.appendToTop(verticalBranchParseTree);

    return ruleNameParseTree;
  }
}
