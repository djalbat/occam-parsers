"use strict";

import TerminalNode from "../terminal";
import NoWhitespaceNodeParseTree from "../../parseTree/noWhitespaceNode";

export default class NoWhitespaceNode extends TerminalNode {
  getType() {
    const type = null;  ///

    return type;
  }

  getContent() {
    const content = "";  ///

    return content;
  }

  asParseTree(tokens) {
    const noWhitespaceNodeParseTree = NoWhitespaceNodeParseTree.fromNothing(),
          parseTree = noWhitespaceNodeParseTree;  ///

    return parseTree;
  }

  static fromNothing() {
    const significantToken = null,
          noWhitespaceNode = TerminalNode.fromSignificantToken(NoWhitespaceNode, significantToken);

    return noWhitespaceNode;
  }
}
