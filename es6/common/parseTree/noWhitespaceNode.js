"use strict";

import { specialSymbols } from "occam-lexers";

import VerticalBranchParseTree from "./verticalBranch";

const { NO_WHITESPACE } = specialSymbols;

class NoWhitespaceNodeParseTree extends VerticalBranchParseTree {
  static fromNothing() {
    const string = NO_WHITESPACE, ///
          stringLength = string.length,
          verticalBranchParseTreeWidth = stringLength, ///
          verticalBranchParseTree = VerticalBranchParseTree.fromWidth(verticalBranchParseTreeWidth),
          verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(),
          terminalNodeParseTree = VerticalBranchParseTree.fromStringAndVerticalBranchPosition(NoWhitespaceNodeParseTree, string, verticalBranchPosition);

    terminalNodeParseTree.appendToTop(verticalBranchParseTree);

    const epsilonNodeParseTree = terminalNodeParseTree; ///

    return epsilonNodeParseTree;
  }
}

module.exports = NoWhitespaceNodeParseTree;
