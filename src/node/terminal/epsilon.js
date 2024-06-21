"use strict";

import { specialSymbols } from "occam-lexers";

import TerminalNode from "../terminal";
import EpsilonNodeParseTree from "../../parseTree/epsilonNode";

const { epsilon } = specialSymbols;

export default class EpsilonNode extends TerminalNode {
  getType() {
    const type = null;  ///

    return type;
  }

  getContent() {
    const content = epsilon;  ///

    return content;
  }

  isEpsilonNode() {
    const epsilonNode = true;

    return epsilonNode;
  }

  asParseTree(tokens) {
    const epsilonNodeParseTree = EpsilonNodeParseTree.fromNothing(),
          parseTree = epsilonNodeParseTree;  ///

    return parseTree;
  }

  match(node, depth) {
    let matches = false;

    const nodeTerminalNode = node.isTerminalNode();

    if (nodeTerminalNode) {
      const terminalNode = node,  ///
            terminalNodeEpsilonNode = terminalNode.isEpsilonNode();

      if (terminalNodeEpsilonNode) {
        matches = true;
      }
    }

    return matches;
  }

  static fromNothing() { return TerminalNode.fromNothing(EpsilonNode); }
}
