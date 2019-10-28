'use strict';

const lexers = require('occam-lexers');

const TerminalPart = require('../../part/terminal'),
      EpsilonNode = require('../../../common/node/terminal/epsilon');

const { specialSymbols } = lexers,
      { epsilon } = specialSymbols;

class EpsilonPart extends TerminalPart {
  parse(configuration) {
    const epsilonNode = EpsilonNode.fromNothing();

    return epsilonNode;
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
