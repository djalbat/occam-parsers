"use strict";

import { characters} from "necessary";

import VerticalBranchParseTree from "./verticalBranch";

const { SPACE_CHARACTER } = characters;

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

    let precedence = nonTerminalNode.getPrecedence();

    if (precedence !== null) {
      if (precedence === Infinity) {
        precedence = SPACE_CHARACTER;
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
