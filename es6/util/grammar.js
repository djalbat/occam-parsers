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

  static grammarsFromGrammarsMap(grammarsMap) {
    const names = Object.keys(grammarsMap),
          grammars = names.reduce(function(grammars, name) {
            const grammar = grammarsMap[name];
  
            grammars.push(grammar);
  
            return grammars;
          }, []);

    return grammars;
  }

  static productionsFromGrammars(grammars, extendedBNFLexer, extendedBNFParser) {
    const productions = grammars.reduce(function(productions, grammar) {
      const grammarProductions = grammarUtil.productionsFromGrammar(grammar, extendedBNFLexer, extendedBNFParser);

      productions = productions.concat(grammarProductions);

      return productions;
    }, []);

    return productions;
  }
}

module.exports = grammarUtil;
