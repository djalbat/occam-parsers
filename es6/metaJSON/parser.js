'use strict';

const lexers = require('occam-lexers');

const bnf = require('./bnf'),
      BNFParser = require('../bnf/parser'),
      CommonParser = require('../common/parser');

const { BNFLexer } = lexers;

const bnfLexer = BNFLexer.fromNothing(),
      bnfParser = BNFParser.fromNothing(),
      defaultMappings = {};

class MetaJSONParser extends CommonParser {
  static fromBNF(bnf) {
    let metaJSONParser = null;

    try {
      const tokens = bnfLexer.tokensFromBNF(bnf),
            rulesNode = bnfParser.rulesNodeFromTokens(tokens),
            mappings = {},
            rules = BNFParser.generateRules(rulesNode, mappings);

      metaJSONParser = new MetaJSONParser(rules);
    } catch (error) {
      
    }

    return metaJSONParser;
  }

  static fromBNFAndMappings(bnf, mappings = defaultMappings) {
    let metaJSONParser = null;

    try {
      const tokens = bnfLexer.tokensFromBNF(bnf),
            rulesNode = bnfParser.rulesNodeFromTokens(tokens),
            rules = BNFParser.generateRules(rulesNode, mappings);

      metaJSONParser = new MetaJSONParser(rules);
    } catch (error) {

    }

    return metaJSONParser;
  }

  static fromNothing() {
    const metaJSONParser = MetaJSONParser.fromBNF(bnf);

    return metaJSONParser;
  }
  
  static fromMappings(mappings) {
    const metaJSONParser = MetaJSONParser.fromBNFAndMappings(bnf, mappings);

    return metaJSONParser;
    
  }
}

Object.assign(MetaJSONParser, {
  bnf
});

module.exports = MetaJSONParser;
