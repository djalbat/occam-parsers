'use strict';

const TerminalNode = require('../terminal'),
      NoWhitespaceNodeParseTree = require('../../parseTree/noWhitespaceNode');

class NoWhitespaceNode extends TerminalNode {
  getType() {
    const type = null;  ///

    return type;
  }

  getContent() {
    const content = '';  ///

    return content;
  }

  asParseTree(tokens) {
    const noWhitespaceNodeParseTree = NoWhitespaceNodeParseTree.fromNothing(),
          parseTree = noWhitespaceNodeParseTree;  ///

    return parseTree;
  }

  static fromNothing() {
    const significantToken = null,
          nonWhitespaceNode = TerminalNode.fromSignificantToken(NoWhitespaceNode, significantToken);

    return nonWhitespaceNode;
  }
}

module.exports = NoWhitespaceNode;
