'use strict';

const TerminalNode = require('../terminal');

class EndOfLineNode extends TerminalNode {
  getContent() {
    const content = '';  ///

    return content;
  }

  static fromSignificantToken(significantToken) { return TerminalNode.fromSignificantToken(EndOfLineNode, significantToken); }
}

module.exports = EndOfLineNode;
