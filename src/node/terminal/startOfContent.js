"use strict";

import TerminalNode from "../terminal";
import StartOfContentNodeParseTree from "../../parseTree/startOfContentNode";

import { EMPTY_STRING } from "../../constants";

export default class StartOfContentNode extends TerminalNode {
  getType() {
    const type = null;  ///

    return type;
  }

  getContent() {
    const content = EMPTY_STRING;

    return content;
  }

  isStartOfContentNode() {
    const startOfContentNode = true;

    return startOfContentNode;
  }

  asParseTree(tokens) {
    const startOfContentNodeParseTree = StartOfContentNodeParseTree.fromNothing(),
          parseTree = startOfContentNodeParseTree;  ///

    return parseTree;
  }

  match(node, depth) {
    let matches = false;

    const nodeTerminalNode = node.isTerminalNode();

    if (nodeTerminalNode) {
      const terminalNode = node,  ///
            terminalNodeStartOfContentNode = terminalNode.isStartOfContentNode();

      if (terminalNodeStartOfContentNode) {
        matches = true;
      }
    }

    return matches;
  }

  static fromNothing() { return TerminalNode.fromNothing(StartOfContentNode); }
}
