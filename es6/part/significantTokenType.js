'use strict';

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
      var type = token.getType(),
          parsed = (type === this.type);  ///

      if (parsed) {
        var str = token.getString(),
            terminalNode = new TerminalNode(str, type);

        nodes = [terminalNode];
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
