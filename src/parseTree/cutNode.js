"use strict";

import { specialSymbols } from "occam-lexers";

import VerticalBranchParseTree from "../parseTree/verticalBranch";

const { backtick } = specialSymbols;

class CutNodeParseTree extends VerticalBranchParseTree {
  static fromNothing() {
    const string = `${backtick}:${backtick}`,
          stringLength = string.length,
          verticalBranchParseTreeWidth = stringLength, ///
          verticalBranchParseTree = VerticalBranchParseTree.fromWidth(verticalBranchParseTreeWidth),
          verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(),
          terminalNodeParseTree = VerticalBranchParseTree.fromStringAndVerticalBranchPosition(CutNodeParseTree, string, verticalBranchPosition);

    terminalNodeParseTree.appendToTop(verticalBranchParseTree);

    const cutNodeParseTree = terminalNodeParseTree; ///

    return cutNodeParseTree;
  }
}

module.exports = CutNodeParseTree;
