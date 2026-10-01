"use strict";

import { characters } from "necessary";

import VerticalBranchParseTree from "./verticalBranch";

import { stringFromStringTerminalNodeAndTokens } from "../utilities/parseTree";

const { NEW_LINE_CHARACTER, CARRIAGE_RETURN_CHARACTER } = characters;

export default class TerminalNodeParseTree extends VerticalBranchParseTree {
  static fromTerminalNodeAndTokens(terminalNode, tokens) {
    const type = terminalNode.getType(),
          content = contentFromTerminalNode(terminalNode);

    let string;

    string = `"${content}"[${type}]`;

    string = stringFromStringTerminalNodeAndTokens(string, terminalNode, tokens);

    const stringLength = string.length,
          verticalBranchParseTreeWidth = stringLength, ///
          verticalBranchParseTree = VerticalBranchParseTree.fromWidth(verticalBranchParseTreeWidth),
          verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(),
          terminalNodeParseTree = VerticalBranchParseTree.fromStringAndVerticalBranchPosition(TerminalNodeParseTree, string, verticalBranchPosition);

    terminalNodeParseTree.appendToTop(verticalBranchParseTree);

    return terminalNodeParseTree;
  }
}

function contentFromTerminalNode(terminalNode) {
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

  return content;
}
