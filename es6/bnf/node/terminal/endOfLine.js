'use strict';

var TerminalNode = require('../terminal');

class EndOfLineTerminalNode extends TerminalNode {
  getContent() {
    var content = '';
    
    return content;
  }
}

module.exports = EndOfLineTerminalNode;
