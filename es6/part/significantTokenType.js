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
        token = context.getNextToken(noWhitespace);

    if (token !== undefined) {
      var str = token.getString(),
          type = token.getType(),
          parsed = (type === this.type);  ///

      if (parsed) {
        var terminalNode = new TerminalNode(str);

        nodes = [terminalNode];

        context.advanceJustPastToken(token);
      }
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
