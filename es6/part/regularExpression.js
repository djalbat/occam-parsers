'use strict';

var TerminalNode = require('../node/terminal');

class RegularExpressionPart {
  constructor(regExp) {
    this.regExp = regExp;
  }

  parse(input, context, productions) {
    var nodes = null,
        index = context.getIndex(),
        inputLength = input.length;

    if (index < inputLength) {
      var inputSubstring = input.substr(index),
          matches = this.regExp.exec(inputSubstring),
          parsed = (matches && matches.index === 0);

      if (parsed) {
        var firstMatch = first(matches),
            firstMatchLength = firstMatch.length,
            str = inputSubstring.substr(0, firstMatchLength),
            terminalNode = new TerminalNode(str),
            amount = firstMatchLength;  ///

        nodes = [terminalNode];

        context.advance(amount);
      }
    }

    return nodes;
  }

  static fromSymbol(symbol, specialSymbolsRegExp) {
    var regularExpressionPart = null,
        regularExpressionRegExp = /\/([^/]+)\//,
        matches = symbol.match(regularExpressionRegExp);

    if (matches !== null) {
      var secondMatch = second(matches),
          pattern = secondMatch,  ///
          regExp = new RegExp(pattern);

      regularExpressionPart = new RegularExpressionPart(regExp);
    }

    return regularExpressionPart;
  }
}

module.exports = RegularExpressionPart;

function first(array) { return array[0]; }
function second(array) { return array[1]; }
