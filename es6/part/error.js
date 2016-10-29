'use strict';

var lexers = require('../occam-lexers'),
    ErrorToken = lexers.ErrorToken;

var ErrorNode = require('../node/error');

class ErrorPart {
  parse(context, productions, noWhitespace) {
    var nodes = null,
        savedIndex = context.savedIndex(),
        nextNonWhitespaceToken = context.getNextNonWhitespaceSignificantToken(noWhitespace),
        token = nextNonWhitespaceToken; ///

    if (token !== null) {
      if (token instanceof ErrorToken) {
        var errorToken = token,
            str = errorToken.getString(),
            message = errorToken.getMessage(),
            terminalNode = new ErrorNode(str, message);

        nodes = [terminalNode];
      }

      return nodes;
    }

    if (nodes === null) {
      context.backtrack(savedIndex);
    }
  }

  static fromSymbol(symbol, terminalSymbolsRegExp, significantTokenTypes, noWhitespace) {
    var errorPart = null,
        found = (symbol === 'ε');
    
    if (found) {
      errorPart = new ErrorPart();
    }

    return errorPart;
  }
}

module.exports = ErrorPart;