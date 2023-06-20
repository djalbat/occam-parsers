"use strict";

import TerminalNode from "../terminal";
import EndOfLineNodeParseTree from "../../parseTree/endOfLineNode";

import { EMPTY_STRING } from "../../constants";

export default class EndOfLineNode extends TerminalNode {
  getContent() {
    const content = EMPTY_STRING; ///

    return content;
  }

  asParseTree(tokens) {
    const endOfLineNodeParseTree = EndOfLineNodeParseTree.fromNothing(),
          parseTree = endOfLineNodeParseTree;  ///

    return parseTree;
  }

  static fromPrecedenceAndSignificantToken(precedence, significantToken) { return TerminalNode.fromPrecedenceAndSignificantToken(EndOfLineNode, precedence, significantToken); }
}
