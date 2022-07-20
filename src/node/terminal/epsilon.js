"use strict";

import { specialSymbols } from "occam-lexers";

import TerminalNode from "../terminal";
import EpsilonNodeParseTree from "../../parseTree/epsilonNode";

const { epsilon } = specialSymbols;

export default class EpsilonBNFNode extends TerminalNode {
  getContent() {
    const content = epsilon;  ///

    return content;
  }

  asParseTree(tokens) {
    const epsilonNodeParseTree = EpsilonNodeParseTree.fromNothing(),
          parseTree = epsilonNodeParseTree;  ///

    return parseTree;
  }

  static fromNothing() {
    const significantToken = null,
          epsilonBNFNode = TerminalNode.fromSignificantToken(EpsilonBNFNode, significantToken);

    return epsilonBNFNode;
  }
}
