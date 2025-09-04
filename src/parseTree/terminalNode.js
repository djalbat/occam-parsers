"use strict";

import { characters } from "necessary";

import VerticalBranchParseTree from "./verticalBranch";

import { EMPTY_STRING } from "../constants";
import { lineIndexFromTokenIndexAndTokens } from "../utilities/tokens";

const { NEW_LINE_CHARACTER, CARRIAGE_RETURN_CHARACTER } = characters;

export default class TerminalNodeParseTree extends VerticalBranchParseTree {
  static fromTerminalNodeAndTokens(terminalNode, tokens) {
    let content;

    content = terminalNode.getContent();

    content = content.replace(/[\r\n]/g, (match) => {
      switch (match) {
        case CARRIAGE_RETURN_CHARACTER:
          return "\\r";

        case NEW_LINE_CHARACTER:
          return "\\n";

        default:
          return match;
      }
    });

    const type = terminalNode.getType(),
          significantTokenIndex = terminalNode.getSignificantTokenIndex(tokens),
          lineIndex = lineIndexFromTokenIndexAndTokens(significantTokenIndex, tokens);

    let lineIndexes;

    if (lineIndex === null) {
      lineIndexes = EMPTY_STRING;
    } else {
      lineIndexes = ` [${lineIndex}]`;
    }

    const string = `"${content}"[${type}]${lineIndexes}`,
          stringLength = string.length,
          verticalBranchParseTreeWidth = stringLength, ///
          verticalBranchParseTree = VerticalBranchParseTree.fromWidth(verticalBranchParseTreeWidth),
          verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(),
          terminalNodeParseTree = VerticalBranchParseTree.fromStringAndVerticalBranchPosition(TerminalNodeParseTree, string, verticalBranchPosition);

    terminalNodeParseTree.appendToTop(verticalBranchParseTree);

    return terminalNodeParseTree;
  }
}
