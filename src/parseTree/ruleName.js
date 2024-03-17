"use strict";

import { characters} from "necessary";

import VerticalBranchParseTree from "./verticalBranch";

import { tokenLineIndexFromTokenAndTokens } from "../utilities/tokens";

const { SPACE_CHARACTER } = characters;

export default class RuleNameParseTree extends VerticalBranchParseTree {
  static fromNonTerminalNodeAndTokens(nonTerminalNode, tokens) {
    const ruleName = nonTerminalNode.getRuleName(),
          opacity = nonTerminalNode.getOpacity(),
          firstSignificantToken = nonTerminalNode.getFirstSignificantToken(),
          lastSignificantToken = nonTerminalNode.getLastSignificantToken(),
          firstSignificantTokenLineIndex = tokenLineIndexFromTokenAndTokens(firstSignificantToken, tokens),
          lastSignificantTokenLineIndex = tokenLineIndexFromTokenAndTokens(lastSignificantToken, tokens),
          tokenLineIndexes = (firstSignificantTokenLineIndex !== lastSignificantTokenLineIndex) ?
                              `${firstSignificantTokenLineIndex}-${lastSignificantTokenLineIndex}` :
                                `${firstSignificantTokenLineIndex}`;

    let string = `${ruleName}`;

    if (opacity !== null) {
      string = `${string}${opacity}`;
    }

    string = `${string} [${tokenLineIndexes}]`;

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
