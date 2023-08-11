"use strict";

import VerticalBranchParseTree from "./verticalBranch";

import { EMPTY_STRING } from "../constants";

export default class RuleNameParseTree extends VerticalBranchParseTree {
  static fromNonTerminalNodeAndTokens(nonTerminalNode, tokens) {
    const ruleName = nonTerminalNode.getRuleName(),
          firstSignificantToken = nonTerminalNode.getFirstSignificantToken(),
          lastSignificantToken = nonTerminalNode.getLastSignificantToken(),
          firstSignificantTokenIndex = tokens.indexOf(firstSignificantToken),
          lastSignificantTokenIndex = tokens.indexOf(lastSignificantToken),
          tokenIndexes = (firstSignificantTokenIndex !== lastSignificantTokenIndex) ?
                          `${firstSignificantTokenIndex}-${lastSignificantTokenIndex}` :
                            `${firstSignificantTokenIndex}`,
          recursively = false;

    let string = `${ruleName} {${tokenIndexes}}`;

    let precedence = nonTerminalNode.getPrecedence(recursively);

    if (precedence !== null) {
      if (precedence === Infinity) {
        precedence = EMPTY_STRING;
      }

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
