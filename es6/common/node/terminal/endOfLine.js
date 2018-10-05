'use strict';

const TerminalNode = require('../terminal');

class EndOfLineNode extends TerminalNode {
  getContent() {
    const content = '';  ///

    return content;
  }

  static fromToken(token) { return TerminalNode.fromToken(EndOfLineNode, token); }
}

module.exports = EndOfLineNode;
