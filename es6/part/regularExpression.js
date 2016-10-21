'use strict';

var TerminalNode = require('../node/terminal');

class RegularExpressionPart {
  constructor(regExp, noWhitespace) {
    this.regExp = regExp;
    this.noWhitespace = noWhitespace;
  }

  parse(context, productions, noWhitespace) {
    noWhitespace = noWhitespace || this.noWhitespace; ///

    var nodes = null,
        savedIndex = context.savedIndex(),
        nextNonWhitespaceToken = context.getNextNonWhitespaceToken(noWhitespace),
        token = nextNonWhitespaceToken; ///

    if (token !== null) {
      var str = token.getString(),
          matches = str.match(this.regExp);

      if (matches !== null) {
        var firstMatch = first(matches),
            parsed = (firstMatch === str);

        if (parsed) {
          var type = RegularExpressionPart.type,
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
    var regularExpressionPart = null,
        regularExpressionPartRegExp = /\/([^/]+)\//,
        matches = symbol.match(regularExpressionPartRegExp);

    if (matches !== null) {
      var secondMatch = second(matches),
          regExpPattern = secondMatch,  ///
          regExp = new RegExp(`^${regExpPattern}$`); ///

      regularExpressionPart = new RegularExpressionPart(regExp, noWhitespace);
    }

    return regularExpressionPart;
  }
}

RegularExpressionPart.type = 'regexp'; ///

module.exports = RegularExpressionPart;

function first(array) { return array[0]; }
function second(array) { return array[1]; }
