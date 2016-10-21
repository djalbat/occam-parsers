'use strict';

var lexers = require('occam-lexers'),
    SignificantToken = lexers.SignificantToken;

var TerminalNode = require('../node/terminal');

class SignificantTokenTypePart {
  constructor(type, noWhitespace) {
    this.type = type;
    this.noWhitespace = noWhitespace;
  }

  parse(context, productions, noWhitespace) {
    noWhitespace = noWhitespace || this.noWhitespace; ///
    
    var nodes = null,
        savedIndex = context.savedIndex(),
        nextNonWhitespaceToken = context.getNextNonWhitespaceToken(noWhitespace),
        token = nextNonWhitespaceToken; ///

    if (token !== null) {
      if (token instanceof SignificantToken) {
        var significantToken = token,
            type = significantToken.getType(),
            parsed = (type === this.type);  ///

        if (parsed) {
          var str = significantToken.getString(),
              terminalNode = new TerminalNode(str, type);

          nodes = [terminalNode];
        }
      }
    }

    if (nodes === null) {
      context.backtrack(savedIndex);
    }

    return nodes;
  }

  static fromSymbol(symbol, terminalSymbolsRegExp, significantTokenTypes, noWhitespace) {
    var significantTokenTypePart = null,
        type = symbol,  ///
        foundType = significantTokenTypes.find(function(significantTokenType) {
          var found = (type === significantTokenType);

          return found;
        }),
        found = (foundType !== undefined);

    if (found) {
      significantTokenTypePart = new SignificantTokenTypePart(type, noWhitespace);
    }

    return significantTokenTypePart;
  }
}

module.exports = SignificantTokenTypePart;
