"use strict";

import { specialSymbols } from "occam-lexers";

import VerticalBranchParseTree from "./verticalBranch";

const { startOfContent } = specialSymbols;

export default class StartOfContentNodeParseTree extends VerticalBranchParseTree {
  static fromNothing() {
    const string = startOfContent, ///
          stringLength = string.length,
          verticalBranchParseTreeWidth = stringLength, ///
          verticalBranchParseTree = VerticalBranchParseTree.fromWidth(verticalBranchParseTreeWidth),
          verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(),
          terminalNodeParseTree = VerticalBranchParseTree.fromStringAndVerticalBranchPosition(StartOfContentNodeParseTree, string, verticalBranchPosition);

    terminalNodeParseTree.appendToTop(verticalBranchParseTree);

    const startOfContentNodeParseTree = terminalNodeParseTree; ///

    return startOfContentNodeParseTree;
  }
}
