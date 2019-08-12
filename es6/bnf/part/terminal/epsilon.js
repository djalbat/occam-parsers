'use strict';

const lexers = require('occam-lexers');

const TerminalPart = require('../../part/terminal'),
      EpsilonTerminalNode = require('../../../common/node/terminal/epsilon');

const { specialSymbols } = lexers,
      { epsilon } = specialSymbols;

class EpsilonPart extends TerminalPart {
  parse(configuration, noWhitespace) {
    const epsilonTerminalNode = new EpsilonTerminalNode();

    return epsilonTerminalNode;
  }

  isEpsilonPart() {
    const epsilonPart = true;

    return epsilonPart;
  }

  asString() {
    const string = epsilon; ///

    return string;
  }

  clone() { return super.clone(EpsilonPart); }
}

module.exports = EpsilonPart;
