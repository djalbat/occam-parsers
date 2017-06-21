'use strict';

const BNFParser = require('../bnf/parser'),
      cycles = require('../grammar/cycles'),
      leftRecursion = require('../grammar/leftRecursion');

class grammarUtil {
  static productionsFromGrammar(grammar, bnfLexer, bnfParser) {
    let productions;
    
    const lines = bnfLexer.linesFromGrammar(grammar),
          node = bnfParser.nodeFromLines(lines);
    
    productions = BNFParser.generateProductions(node);

    productions = cycles.eliminate(productions);  ///

    productions = leftRecursion.eliminate(productions);  ///

    return productions;
  }
}

module.exports = grammarUtil;
