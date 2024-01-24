"use strict";

import VerticalBranchParseTree from "./verticalBranch";

import { tokenLineIndexFromTokenAndTokens } from "../utilities/tokens";

export default class TerminalNodeParseTree extends VerticalBranchParseTree {
  static fromTerminalNodeAndTokens(terminalNode, tokens) {
    const significantToken = terminalNode.getSignificantToken(),
          content = terminalNode.getContent(),
          type = significantToken.getType(),
          significantTokenLineIndex = tokenLineIndexFromTokenAndTokens(significantToken, tokens),
          string = `"${content}"[${type}] [${significantTokenLineIndex}]`,
          stringLength = string.length,
          verticalBranchParseTreeWidth = stringLength, ///
          verticalBranchParseTree = VerticalBranchParseTree.fromWidth(verticalBranchParseTreeWidth),
          verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(),
          terminalNodeParseTree = VerticalBranchParseTree.fromStringAndVerticalBranchPosition(TerminalNodeParseTree, string, verticalBranchPosition);

    terminalNodeParseTree.appendToTop(verticalBranchParseTree);

    return terminalNodeParseTree;
  }
}
