'use strict';

const cycles = require('../grammar/cycles'),
      leftRecursion = require('../grammar/leftRecursion'),
      ExtendedBNFParser = require('../extendedBNF/parser');

class grammarUtil {
  static rulesFromGrammar(grammar, extendedBNFLexer, extendedBNFParser) {
    let rules;
    
    const lines = extendedBNFLexer.linesFromGrammar(grammar),
          node = extendedBNFParser.nodeFromLines(lines);
    
    rules = ExtendedBNFParser.generateRules(node);

    rules = cycles.eliminate(rules);  ///

    rules = leftRecursion.eliminate(rules);  ///

    return rules;
  }

  static grammarsFromGrammarMap(grammarMap) {
    const names = Object.keys(grammarMap),
          grammars = names.reduce(function(grammars, name) {
            const grammar = grammarMap[name];
  
            grammars.push(grammar);
  
            return grammars;
          }, []);

    return grammars;
  }

  static rulesFromGrammars(grammars, extendedBNFLexer, extendedBNFParser) {
    const rules = grammars.reduce(function(rules, grammar) {
      const grammarRules = grammarUtil.rulesFromGrammar(grammar, extendedBNFLexer, extendedBNFParser);

      rules = rules.concat(grammarRules);

      return rules;
    }, []);

    return rules;
  }
}

module.exports = grammarUtil;
