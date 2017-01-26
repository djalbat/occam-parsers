'use strict';

var TerminalNode = require('../terminal');

class EpsilonTerminalNode extends TerminalNode {
  getContent() {
    var content = 'ε';
    
    return content;
  }
}

module.exports = EpsilonTerminalNode;
