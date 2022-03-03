"use strict";

import TerminalNode from "../terminal";
import EndOfLineBNFNodeParseTree from "../../parseTree/endOfLineNode";

import { EMPTY_STRING } from "../../constants";

export default class EndOfLineBNFNode extends TerminalNode {
  getContent() {
    const content = EMPTY_STRING;

    return content;
  }

  asParseTree(tokens) {
    const endOfLineBNFNodeParseTree = EndOfLineBNFNodeParseTree.fromNothing(),
          parseTree = endOfLineBNFNodeParseTree;  ///

    return parseTree;
  }

  static fromSignificantToken(significantToken) { return TerminalNode.fromSignificantToken(EndOfLineBNFNode, significantToken); }
}
