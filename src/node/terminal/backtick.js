"use strict";

import { specialSymbols } from "occam-lexers";

import TerminalNode from "../terminal";
import BacktickNodeParseTree from "../../parseTree/backtickNode";

const { backtick } = specialSymbols;

export default class BacktickNode extends TerminalNode {
  getType() {
    const type = null;  ///

    return type;
  }

  getContent() {
    const content = backtick;  ///

    return content;
  }

  isBacktickNode() {
    const backtickNode = true;

    return backtickNode;
  }

  asParseTree(tokens) {
    const backtickNodeParseTree = BacktickNodeParseTree.fromNothing(),
          parseTree = backtickNodeParseTree;  ///

    return parseTree;
  }

  match(node, depth) {
    let matches = false;

    const nodeTerminalNode = node.isTerminalNode();

    if (nodeTerminalNode) {
      const terminalNode = node,  ///
            terminalNodeBacktickNode = terminalNode.isBacktickNode();

      if (terminalNodeBacktickNode) {
        matches = true;
      }
    }

    return matches;
  }

  static fromNothing() { return TerminalNode.fromNothing(BacktickNode); }
}
