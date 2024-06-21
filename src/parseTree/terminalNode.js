"use strict";

import VerticalBranchParseTree from "./verticalBranch";

import { EMPTY_STRING } from "../constants";
import { lineIndexFromTokenIndexAndTokens } from "../utilities/tokens";

export default class TerminalNodeParseTree extends VerticalBranchParseTree {
  static fromTerminalNodeAndTokens(terminalNode, tokens) {
    const type = terminalNode.getType(),
          content = terminalNode.getContent(),
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
