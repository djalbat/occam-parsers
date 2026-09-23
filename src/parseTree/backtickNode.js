"use strict";

import { specialSymbols } from "occam-lexers";

import VerticalBranchParseTree from "../parseTree/verticalBranch";

const { backtick } = specialSymbols;

class BacktickNodeParseTree extends VerticalBranchParseTree {
  static fromNothing() {
    const string = backtick, ///
          stringLength = string.length,
          verticalBranchParseTreeWidth = stringLength, ///
          verticalBranchParseTree = VerticalBranchParseTree.fromWidth(verticalBranchParseTreeWidth),
          verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(),
          terminalNodeParseTree = VerticalBranchParseTree.fromStringAndVerticalBranchPosition(BacktickNodeParseTree, string, verticalBranchPosition);

    terminalNodeParseTree.appendToTop(verticalBranchParseTree);

    const backtickNodeParseTree = terminalNodeParseTree; ///

    return backtickNodeParseTree;
  }
}

module.exports = BacktickNodeParseTree;