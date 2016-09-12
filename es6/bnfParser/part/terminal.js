'use strict';

class TerminalPart {
  constructor(string) {
    this.string = string;
  }

  parse(input, context, productions) {
    var parsed = false,
        index = context.index,
        inputLength = input.length;

    if (index < inputLength) {
      var inputSubstring = input.substr(index),
          string = this.string,
          stringIndex = inputSubstring.indexOf(string);

      if (stringIndex === 0) {
        var stringLength = string.length;

        context.index += stringLength;

        parsed = true;
      }
    }

    return parsed;
  }

  static fromSymbol(symbol) {
    var terminalPart = null,
        terminalRegExp = /'([^']+)'/,
        matches = symbol.match(terminalRegExp);

    if (matches !== null) {
      var string = matches[1];

      terminalPart = new TerminalPart(string);
    }

    return terminalPart;
  }
}

module.exports = TerminalPart;
