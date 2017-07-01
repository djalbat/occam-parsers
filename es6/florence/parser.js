'use strict';

const lexers = require('occam-lexers');

const arrayUtil = require('../util/array'),
      mappings = require('./mappings'),
      extendedBNF = require('./extendedBNF'),
      CommonParser = require('../common/parser'),
      ExtendedBNFParser = require('../extendedBNF/parser'),
      defaultCustomGrammarExtendedBNFMap = require('./defaultCustomGrammar/extendedBNFMap');

const { ExtendedBNFLexer } = lexers;

const extendedBNFLexer = ExtendedBNFLexer.fromNothing(),
      extendedBNFParser = ExtendedBNFParser.fromNothing(),
      defaultCustomGrammarRules = rulesFromExtendedBNFMap(defaultCustomGrammarExtendedBNFMap),
      defaultAdditionalMappings = {};

class FlorenceParser extends CommonParser {
  static fromCustomGrammarRulesAndAdditionalMappings(customGrammarRules, additionalMappings) {
    const florenceParser = FlorenceParser.fromExtendedBNFAndMappings(extendedBNF, mappings, customGrammarRules, additionalMappings);
  
    return florenceParser;
  }
  
  static fromExtendedBNFAndMappings(extendedBNF, mappings, customGrammarRules = defaultCustomGrammarRules, additionalMappings = defaultAdditionalMappings) {
    extendedBNF = `${extendedBNF}\n\n${customExtendedBNF}`; ///
    mappings = Object.assign(mappings, additionalMappings); ///

    const lines = extendedBNFLexer.linesFromExtendedBNF(extendedBNF),
          node = extendedBNFParser.nodeFromLines(lines),
          rules = ExtendedBNFParser.generateRules(node, mappings);

    arrayUtil.push(rules, customGrammarRules);
    
    const florenceParser = new FlorenceParser(rules);

    return florenceParser;
  }
}

module.exports = FlorenceParser;

FlorenceParser.mappings = mappings;

FlorenceParser.extendedBNF = extendedBNF;

FlorenceParser.defaultCustomGrammarExtendedBNFMap = defaultCustomGrammarExtendedBNFMap;

function rulesFromExtendedBNFMap(extendedBNFMap) {
  const ruleNames = Object.keys(extendedBNFMap),
        extendedBNF = ruleNames.reduce(function(extendedBNF, ruleName) {
          const ruleExtendedBNF = extendedBNFMap[ruleName];
  
          extendedBNF = `${extendedBNF}${ruleExtendedBNF}`;
  
          return extendedBNF;
        }, ''),
        lines = extendedBNFLexer.linesFromExtendedBNF(extendedBNF),
        node = extendedBNFParser.nodeFromLines(lines),
        rules = ExtendedBNFParser.generateRules(node);

  return rules;
}
