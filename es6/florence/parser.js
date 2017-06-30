'use strict';

const lexers = require('occam-lexers');

const mappings = require('./mappings'),
      extendedBNF = require('./extendedBNF'),
      CommonParser = require('../common/parser'),
      ExtendedBNFParser = require('../extendedBNF/parser'),
      defaultCustomBNFMap = require('./defaultCustomBNFMap'),
      defaultAdditionalMappings = require('./defaultAdditionalMappings');

const { ExtendedBNFLexer } = lexers;

const extendedBNFLexer = ExtendedBNFLexer.fromNothing(),
      extendedBNFParser = ExtendedBNFParser.fromNothing(),
      defaultCustomBNF = bnfFromBNFMap(defaultCustomBNFMap);

class FlorenceParser extends CommonParser {
  static fromCustomBNFAndAdditionalMappings(customBNF, additionalMappings) {
    const florenceParser = FlorenceParser.fromExtendedBNFAndMappings(extendedBNF, mappings, customBNF, additionalMappings);
  
    return florenceParser;
  }
  
  static fromExtendedBNFAndMappings(extendedBNF, mappings, customBNF = defaultCustomBNF, additionalMappings = defaultAdditionalMappings) {
    extendedBNF = `${extendedBNF}\n\n${customBNF}`; ///    
    mappings = Object.assign(mappings, additionalMappings); ///

    const lines = extendedBNFLexer.linesFromExtendedBNF(extendedBNF),
          node = extendedBNFParser.nodeFromLines(lines),
          rules = ExtendedBNFParser.generateRules(node, mappings),
          florenceParser = new FlorenceParser(rules);

    return florenceParser;
  }
}

module.exports = FlorenceParser;

FlorenceParser.mappings = mappings;

FlorenceParser.extendedBNF = extendedBNF;

FlorenceParser.defaultCustomBNFMap = defaultCustomBNFMap;

function bnfFromBNFMap(bnfMap) {
  const ruleNames = Object.keys(bnfMap),
        bnf = ruleNames.reduce(function(bnf, ruleName) {
          const ruleBNF = bnfMap[ruleName];
  
          bnf = `${bnf}${ruleBNF}`;
  
          return bnf;
        }, '');

  return bnf;
}
