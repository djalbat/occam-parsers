'use strict';

const lexers = require('occam-lexers');

const mappings = require('./mappings'),
      extendedBNF = require('./extendedBNF'),
      CommonParser = require('../common/parser'),
      ExtendedBNFParser = require('../extendedBNF/parser'),
      defaultAdditionalMappings = require('./defaultAdditionalMappings'),
      defaultCustomExtendedBNFMap = require('./defaultCustomExtendedBNFMap');

const { ExtendedBNFLexer } = lexers;

const extendedBNFLexer = ExtendedBNFLexer.fromNothing(),
      extendedBNFParser = ExtendedBNFParser.fromNothing(),
      defaultCustomExtendedBNF = extendedBNFFromExtendedBNFMap(defaultCustomExtendedBNFMap);

class FlorenceParser extends CommonParser {
  static fromCustomExtendedBNFAndAdditionalMappings(customExtendedBNF, additionalMappings) {
    const florenceParser = FlorenceParser.fromExtendedBNFAndMappings(extendedBNF, mappings, customExtendedBNF, additionalMappings);
  
    return florenceParser;
  }
  
  static fromExtendedBNFAndMappings(extendedBNF, mappings, customExtendedBNF = defaultCustomExtendedBNF, additionalMappings = defaultAdditionalMappings) {
    extendedBNF = `${extendedBNF}\n\n${customExtendedBNF}`; ///
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

FlorenceParser.defaultCustomExtendedBNFMap = defaultCustomExtendedBNFMap;

function extendedBNFFromExtendedBNFMap(extendedBNFMap) {
  const ruleNames = Object.keys(extendedBNFMap),
        extendedBNF = ruleNames.reduce(function(extendedBNF, ruleName) {
          const ruleExtendedBNF = extendedBNFMap[ruleName];
  
          extendedBNF = `${extendedBNF}${ruleExtendedBNF}`;
  
          return extendedBNF;
        }, '');

  return extendedBNF;
}
