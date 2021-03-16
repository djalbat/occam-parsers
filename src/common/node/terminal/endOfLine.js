"use strict";

import TerminalNode from "../terminal";
import EndOfLineNodeParseTree from "../../parseTree/endOfLineNode";

export default class EndOfLineNode extends TerminalNode {
  getContent() {
    const content = "";  ///

    return content;
  }

  asParseTree(tokens) {
    const endOfLineNodeParseTree = EndOfLineNodeParseTree.fromNothing(),
          parseTree = endOfLineNodeParseTree;  ///

    return parseTree;
  }

  static fromSignificantToken(significantToken) { return TerminalNode.fromSignificantToken(EndOfLineNode, significantToken); }
}
