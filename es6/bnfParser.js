'use strict';

var Production = require('./bnfParser/production');

class BNFParser {
  static parse(lines, terminalSymbolsRegExpPattern, mappings) {
    var productions;

    try {
      var terminalSymbolsRegExp = new RegExp('^(?:' + terminalSymbolsRegExpPattern + ')$');

      productions = lines.map(function(line) {
        var production = Production.fromLine(line, terminalSymbolsRegExp, mappings);

        return production;
      });
    } catch(exception) {
      productions = [];
    }

    return productions;
  }
}

module.exports = BNFParser;

