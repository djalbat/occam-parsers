'use strict';

const lexers = require('occam-lexers');

const bnf = require('./bnf'),
      mappings = require('./mappings'),
      arrayUtil = require('../util/array'),
      BNFParser = require('../bnf/parser'),
      CommonParser = require('../common/parser'),
      customGrammarDefaultBNFMap = require('./customGrammar/defaultBNFMap');

const { BNFLexer } = lexers;

const bnfLexer = BNFLexer.fromNothing(),
      bnfParser = BNFParser.fromNothing(),
      customGrammarDefaultRules = rulesFromBNFMap(customGrammarDefaultBNFMap),
      defaultAdditionalMappings = {};

class FlorenceParser extends CommonParser {
  static fromCombinedCustomGrammarsRulesAndAdditionalMappings(combinedCustomGrammarsRules, additionalMappings) {
    const florenceParser = FlorenceParser.fromBNFAndMappings(bnf, mappings, combinedCustomGrammarsRules, additionalMappings);
  
    return florenceParser;
  }
  
  static fromBNFAndMappings(bnf, mappings, combinedCustomGrammarsRules = customGrammarDefaultRules, additionalMappings = defaultAdditionalMappings) {
    mappings = Object.assign(mappings, additionalMappings); ///

    const lines = bnfLexer.linesFromBNF(bnf),
          node = bnfParser.nodeFromLines(lines),
          rules = BNFParser.generateRules(node, mappings);

    arrayUtil.push(rules, combinedCustomGrammarsRules);
    
    const florenceParser = new FlorenceParser(rules);

    return florenceParser;
  }
}

module.exports = FlorenceParser;

FlorenceParser.mappings = mappings;

FlorenceParser.bnf = bnf;

FlorenceParser.customGrammarDefaultBNFMap = customGrammarDefaultBNFMap;

function rulesFromBNFMap(bnfMap) {
  const ruleNames = Object.keys(bnfMap),
        bnf = ruleNames.reduce(function(bnf, ruleName) {
          const ruleBNF = bnfMap[ruleName];
  
          bnf = `${bnf}${ruleBNF}`;
  
          return bnf;
        }, ''),
        lines = bnfLexer.linesFromBNF(bnf),
        node = bnfParser.nodeFromLines(lines),
        rules = BNFParser.generateRules(node);

  return rules;
}
