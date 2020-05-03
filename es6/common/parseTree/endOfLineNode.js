"use strict";

import { specialSymbols } from "occam-lexers";

import VerticalBranchParseTree from "./verticalBranch";

const { END_OF_LINE } = specialSymbols;

class EndOfLineNodeParseTree extends VerticalBranchParseTree {
  static fromNothing() {
    const string = END_OF_LINE, ///
          stringLength = string.length,
          verticalBranchParseTreeWidth = stringLength, ///
          verticalBranchParseTree = VerticalBranchParseTree.fromWidth(verticalBranchParseTreeWidth),
          verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(),
          terminalNodeParseTree = VerticalBranchParseTree.fromStringAndVerticalBranchPosition(EndOfLineNodeParseTree, string, verticalBranchPosition);

    terminalNodeParseTree.appendToTop(verticalBranchParseTree);

    const epsilonNodeParseTree = terminalNodeParseTree; ///

    return epsilonNodeParseTree;
  }
}

module.exports = EndOfLineNodeParseTree;
