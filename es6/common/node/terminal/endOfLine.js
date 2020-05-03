"use strict";

const TerminalNode = require("../terminal"),
      EndOfLineNodeParseTree = require("../../parseTree/endOfLineNode");

class EndOfLineNode extends TerminalNode {
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

module.exports = EndOfLineNode;
