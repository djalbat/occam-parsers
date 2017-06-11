'use strict';

const cycles = require('../grammar/cycles'),
      leftRecursion = require('../grammar/leftRecursion'),
      Production = require('../common/production'),
      ErrorNode = require('../common/node/nonTerminal/error');

class PrimitiveParser {
  static parse(lines, significantTokenTypes, mappings) {
    let productions;

    mappings = Object.assign({
      'error': ErrorNode
    }, mappings);

    try {
      productions = lines.map(function(line) {
        const production = Production.fromLine(line, significantTokenTypes, mappings);

        return production;
      });
    } catch(error) {
      productions = [];
    }
    
    productions = cycles.eliminate(productions);  ///

    productions = leftRecursion.eliminate(productions);  ///

    return productions;
  }
}

module.exports = PrimitiveParser;

