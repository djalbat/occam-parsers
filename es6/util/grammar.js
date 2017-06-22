'use strict';

const cycles = require('../grammar/cycles'),
      leftRecursion = require('../grammar/leftRecursion'),
      ExtendedBNFParser = require('../extendedBNF/parser');

class grammarUtil {
  static productionsFromGrammar(grammar, extendedBNFLexer, extendedBNFParser) {
    let productions;
    
    const lines = extendedBNFLexer.linesFromGrammar(grammar),
          node = extendedBNFParser.nodeFromLines(lines);
    
    productions = ExtendedBNFParser.generateProductions(node);

    productions = cycles.eliminate(productions);  ///

    productions = leftRecursion.eliminate(productions);  ///

    return productions;
  }
}

module.exports = grammarUtil;
