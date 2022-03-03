"use strict";

import { specialSymbols } from "occam-lexers";

import VerticalBranchParseTree from "./verticalBranch";

const { END_OF_LINE } = specialSymbols;

export default class EndOfLineBNFNodeParseTree extends VerticalBranchParseTree {
  static fromNothing() {
    const string = END_OF_LINE, ///
          stringLength = string.length,
          verticalBranchParseTreeWidth = stringLength, ///
          verticalBranchParseTree = VerticalBranchParseTree.fromWidth(verticalBranchParseTreeWidth),
          verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(),
          terminalNodeParseTree = VerticalBranchParseTree.fromStringAndVerticalBranchPosition(EndOfLineBNFNodeParseTree, string, verticalBranchPosition);

    terminalNodeParseTree.appendToTop(verticalBranchParseTree);

    const endOfLineBNFNodeParseTree = terminalNodeParseTree; ///

    return endOfLineBNFNodeParseTree;
  }
}
