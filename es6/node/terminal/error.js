'use strict';

var TerminalNode = require('../terminal');

class ErrorNode extends TerminalNode {
  constructor() {
    var str = 'ERROR',
        type = null;
    
    super(str, type);
  }
}

module.exports = ErrorNode;
