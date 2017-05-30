'use strict';

const EpsilonTerminalNode = require('../../common/node/terminal/epsilon');

class EpsilonPart {
  parse(context, noWhitespace) {
    const epsilonTerminalNode = new EpsilonTerminalNode();

    return epsilonTerminalNode;
  }
}

module.exports = EpsilonPart;
