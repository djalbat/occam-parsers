'use strict';

const lexers = require('occam-lexers');

const TerminalPart = require('../../part/terminal'),
      NoWhitespaceNode = require('../../../common/node/terminal/noWhitespace');

const { specialSymbols } = lexers,
      { NO_WHITESPACE } = specialSymbols;

class NoWhitespacePart extends TerminalPart {
  parse(configuration) {
    let noWhitespaceNode = null;

    const savedIndex = configuration.getSavedIndex(),
          nextToken = configuration.getNextToken(),
          token = nextToken; ///

    if (token !== null) {
      const tokenWhitespaceToken = token.isWhitespaceToken();

      if (!tokenWhitespaceToken) {
        noWhitespaceNode = NoWhitespaceNode.fromNothing();
      }
    }

    configuration.backtrack(savedIndex);

    return noWhitespaceNode;
  }

  asString() {
    const string = NO_WHITESPACE; ///

    return string;
  }

  clone() { return super.clone(NoWhitespacePart); }
}

module.exports = NoWhitespacePart;
