"use strict";

import { specialSymbols } from "occam-lexers";

import TerminalNode from "../terminal";
import CutNodeParseTree from "../../parseTree/cutNode";

const { backtick } = specialSymbols;

export default class CutNode extends TerminalNode {
  getType() {
    const type = null;  ///

    return type;
  }

  getContent() {
    const content = backtick;  ///

    return content;
  }

  isCutNode() {
    const cutNode = true;

    return cutNode;
  }

  asParseTree(tokens) {
    const cutNodeParseTree = CutNodeParseTree.fromNothing(),
          parseTree = cutNodeParseTree;  ///

    return parseTree;
  }

  match(node, depth) {
    let matches = false;

    const nodeTerminalNode = node.isTerminalNode();

    if (nodeTerminalNode) {
      const terminalNode = node,  ///
            terminalNodeCutNode = terminalNode.isCutNode();

      if (terminalNodeCutNode) {
        matches = true;
      }
    }

    return matches;
  }

  static fromNothing() { return TerminalNode.fromNothing(CutNode); }
}
