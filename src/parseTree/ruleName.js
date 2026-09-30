"use strict";

import { characters } from "necessary";
import { specialSymbols } from "occam-lexers";

import VerticalBranchParseTree from "./verticalBranch";

import { EMPTY_STRING } from "../constants";
import { lineIndexFromTokenIndexAndTokens } from "../utilities/tokens";

const { backtick } = specialSymbols,
      { SPACE_CHARACTER } = characters;

export default class RuleNameParseTree extends VerticalBranchParseTree {
  static fromNonTerminalNodeAndTokens(nonTerminalNode, tokens) {
    const opacity = nonTerminalNode.getOpacity(),
          ruleName = nonTerminalNode.getRuleName(),
          committed = nonTerminalNode.isCommitted(),
          firstSignificantTokenIndex = nonTerminalNode.getFirstSignificantTokenIndex(tokens),
          lastSignificantTokenIndex = nonTerminalNode.getLastSignificantTokenIndex(tokens),
          firstLineIndex = lineIndexFromTokenIndexAndTokens(firstSignificantTokenIndex, tokens),
          lastLineIndex = lineIndexFromTokenIndexAndTokens(lastSignificantTokenIndex, tokens);

    let lineIndexes;

    if (firstLineIndex === lastLineIndex) {
      const lineIndex = firstLineIndex; ///

      if (lineIndex === null) {
        lineIndexes = EMPTY_STRING;
      } else {
        lineIndexes = ` [${lineIndex}]`;
      }
    } else {
      if (false) {
        ///
      } else if (firstLineIndex === null) {
        lineIndexes = ` [${lastLineIndex}]`;
      } else if (lastLineIndex === null) {
        lineIndexes = ` [${firstLineIndex}]`;
      } else {
        lineIndexes = ` [${firstLineIndex}-${lastLineIndex}]`
      }
    }

    let string = `${ruleName}`;

    if (opacity !== null) {
      string = `${string}${opacity}`;
    }

    string = `${string}${lineIndexes}`;

    let precedence = nonTerminalNode.getPrecedence();

    if (precedence === Infinity) {
      precedence = SPACE_CHARACTER;
    }

    if (precedence !== null) {
      string = `${string} (${precedence})`;
    }

    if (committed) {
      string = `${backtick}${string}`;
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
