'use strict';

var TerminalNode = require('../../common/node/terminal');

class SignificantTokenTypePart {
  constructor(type, noWhitespace) {
    this.type = type;
    this.noWhitespace = noWhitespace;
  }

  parse(context, productions, noWhitespace) {
    noWhitespace = noWhitespace || this.noWhitespace; ///
    
    var nodes = null,
        savedIndex = context.savedIndex(),
        nextNonWhitespaceSignificantToken = context.getNextNonWhitespaceSignificantToken(noWhitespace),
        significantToken = nextNonWhitespaceSignificantToken; ///

    if (significantToken !== null) {
      var type = significantToken.getType(),
          parsed = (type === this.type);  ///

      if (parsed) {
        var terminalNode = new TerminalNode(significantToken);

        nodes = [terminalNode];
      }
    }

    if (nodes === null) {
      context.backtrack(savedIndex);
    }

    return nodes;
  }

  static fromSymbol(symbol, significantTokenTypes, noWhitespace) {
    var significantTokenTypePart = null,
        significantTokenTypePartRegExp = /^\[([^/]+)\]$/,
        matches = symbol.match(significantTokenTypePartRegExp);

    if (matches !== null) {
      var secondMatch = second(matches),
          type = secondMatch, ///
          foundType = significantTokenTypes.find(function(significantTokenType) {
            var found = (type === significantTokenType);

            return found;
          }),
          found = (foundType !== undefined);

      if (found) {
        significantTokenTypePart = new SignificantTokenTypePart(type, noWhitespace);
      }
    }

    return significantTokenTypePart;
  }
}

module.exports = SignificantTokenTypePart;

function second(array) { return array[1]; }