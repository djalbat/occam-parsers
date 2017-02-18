'use strict';

var Production = require('../common/production'),
    ErrorNode = require('../common/node/nonTerminal/error');

class BNFParser {
  static parse(lines, significantTokenTypes, mappings) {
    var productions;

    mappings = Object.assign({
      'error': ErrorNode
    }, mappings);

    try {
      productions = lines.map(function(line) {
        var production = Production.fromLine(line, significantTokenTypes, mappings);

        return production;
      });
    } catch(exception) {
      productions = [];
    }

    return productions;
  }
}

module.exports = BNFParser;

