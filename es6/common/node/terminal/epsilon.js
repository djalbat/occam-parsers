'use strict';

const TerminalNode = require('../terminal');

class EpsilonTerminalNode extends TerminalNode {
  getContent() {
    const content = 'ε';
    
    return content;
  }
}

module.exports = EpsilonTerminalNode;
