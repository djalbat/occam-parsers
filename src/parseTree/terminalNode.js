"use strict";

import VerticalBranchParseTree from "./verticalBranch";

export default class TerminalNodeParseTree extends VerticalBranchParseTree {
  static fromTerminalNodeTokensAndAbridged(terminalNode, tokens, abridged) {
    const significantToken = terminalNode.getSignificantToken(),
          content = terminalNode.getContent(),
          type = significantToken.getType(),
          tokenIndex = tokens.indexOf(significantToken),
          string = abridged ?
                     `${content}[${type}]` :
                       `${content}[${type}](${tokenIndex})`,
          stringLength = string.length,
          verticalBranchParseTreeWidth = stringLength, ///
          verticalBranchParseTree = VerticalBranchParseTree.fromWidth(verticalBranchParseTreeWidth),
          verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(),
          terminalNodeParseTree = VerticalBranchParseTree.fromStringAndVerticalBranchPosition(TerminalNodeParseTree, string, verticalBranchPosition);

    terminalNodeParseTree.appendToTop(verticalBranchParseTree);

    return terminalNodeParseTree;
  }
}
