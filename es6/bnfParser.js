'use strict';

var Production = require('./bnfParser/production');

class BNFParser {
  static parse(lines, specialSymbolsRegExpPattern, mappings) {
    var productions;

    try {
      var specialSymbolsRegExp = new RegExp('^(?:' + specialSymbolsRegExpPattern + ')$');

      productions = lines.map(function(line) {
        var production = Production.fromLine(line, specialSymbolsRegExp, mappings);

        return production;
      });
    } catch(exception) {
      productions = [];
    }

    return productions;
  }
}

module.exports = BNFParser;

