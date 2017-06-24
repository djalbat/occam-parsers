'use strict';

const lexers = require('occam-lexers');

const grammar = require('./grammar'),
      mappings = require('./mappings'),
      grammarUtil = require('../util/grammar'),
      CommonParser = require('../common/parser'),
      ExtendedBNFParser = require('../extendedBNF/parser'),
      defaultCustomGrammarsMap = require('./defaultCustomGrammarsMap'),
      defaultAdditionalMappings = require('./defaultAdditionalMappings');

const { ExtendedBNFLexer } = lexers;

const extendedBNFLexer = ExtendedBNFLexer.fromNothing(),
      extendedBNFParser = ExtendedBNFParser.fromNothing(),
      defaultCustomGrammars = grammarsFromGrammarsMap(defaultCustomGrammarsMap);

class FlorenceParser extends CommonParser {
  static fromCustomGrammarsAdditionalMappings(customGrammars, additionalMappings) {
    const florenceParser = FlorenceParser.fromGrammarAndMappings(grammar, mappings, customGrammars, additionalMappings);
  
    return florenceParser;
  }
  
  static fromGrammarAndMappings(grammar, mappings, customGrammars = defaultCustomGrammars, additionalMappings = defaultAdditionalMappings) {
    mappings = Object.assign(mappings, additionalMappings); ///

    const customProductions = customProductionsFromCustomGrammars(customGrammars, extendedBNFLexer, extendedBNFParser),
          lines = extendedBNFLexer.linesFromGrammar(grammar),
          node = extendedBNFParser.nodeFromLines(lines);
    
    let productions = ExtendedBNFParser.generateProductions(node, mappings);
    
    productions = productions.concat(customProductions);
    
    const florenceParser = new FlorenceParser(productions);

    return florenceParser;
  }
}

module.exports = FlorenceParser;

FlorenceParser.grammar = grammar;

FlorenceParser.mappings = mappings;

FlorenceParser.defaultCustomGrammarsMap = defaultCustomGrammarsMap;

function customProductionsFromCustomGrammars(customGrammars, extendedBNFLexer, extendedBNFParser) {
  const customProductions = customGrammars.reduce(function(customProductions, customGrammar) {
    const customGrammarProductions = grammarUtil.productionsFromGrammar(customGrammar, extendedBNFLexer, extendedBNFParser);

    customProductions = customProductions.concat(customGrammarProductions);
    
    return customProductions;
  }, []);
  
  return customProductions;
}

function grammarsFromGrammarsMap(grammarsMap) {
  const names = Object.keys(grammarsMap),
        grammars = names.reduce(function(grammars, name) {
          const grammar = grammarsMap[name];

          grammars.push(grammar);

          return grammar;
        }, []);

  return grammars;
}