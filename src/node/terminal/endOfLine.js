"use strict";

import TerminalNode from "../terminal";
import EndOfLineNodeParseTree from "../../parseTree/endOfLineNode";

import { EMPTY_STRING } from "../../constants";

export default class EndOfLineNode extends TerminalNode {
  getContent(faithful = false) {
    const content = faithful ?
                      super.getContent() :
                        EMPTY_STRING; ///

    return content;
  }

  asParseTree(tokens) {
    const endOfLineNodeParseTree = EndOfLineNodeParseTree.fromNothing(),
          parseTree = endOfLineNodeParseTree;  ///

    return parseTree;
  }

  static fromSignificantToken(significantToken) { return TerminalNode.fromSignificantToken(EndOfLineNode, significantToken); }
}
