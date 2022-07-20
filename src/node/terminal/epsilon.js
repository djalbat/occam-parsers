"use strict";

import TerminalNode from "../terminal";
import EpsilonNodeParseTree from "../../parseTree/epsilonNode";

import { EPSILON } from "../../constants";

export default class EpsilonBNFNode extends TerminalNode {
  getContent() {
    const content = EPSILON;

    return content;
  }

  asParseTree(tokens) {
    const epsilonNodeParseTree = EpsilonNodeParseTree.fromNothing(),
          parseTree = epsilonNodeParseTree;  ///

    return parseTree;
  }

  static fromSignificantToken(significantToken) { return TerminalNode.fromSignificantToken(EpsilonBNFNode, significantToken); }
}
