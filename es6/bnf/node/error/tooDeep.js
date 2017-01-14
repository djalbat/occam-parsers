'use strict';

var ErrorNode = require('../error');

const MESSAGE = 'The parse tree is too deep. This is likely caused by left recursion.';

class TooDeepErrorNode extends ErrorNode {
  constructor() {
    var message = MESSAGE;

    super(message);
  }
}

module.exports = TooDeepErrorNode;
