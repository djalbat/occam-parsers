'use strict';

const lexers = require('occam-lexers');

const grammar = require('./grammar'),
      mappings = require('./mappings'),
      BNFParser = require('../bnf/parser'),
      CommonParser = require('../common/parser'),
      parserUtil = require('../util/parser');

const { BNFLexer } = lexers;

class FlorenceParser extends CommonParser {
  static fromAdditionalMappings(additionalMappings) {
    const florenceParser = FlorenceParser.fromGrammarAndMappings(grammar, Object.assign(mappings, additionalMappings)); ///

    return florenceParser;
  }
  
  static fromGrammarAndMappings(grammar, mappings) {
    const bnfLexer = BNFLexer.fromNothing(),
          bnfParser = BNFParser.fromNothing(),
          lines = bnfLexer.linesFromGrammar(grammar),
          node = bnfParser.nodeFromLines(lines),
          productions = BNFParser.generateProductions(node, mappings),
          florenceParser = new FlorenceParser(productions);

    return florenceParser;
  }

  findProduction(productionName) {
    const productions = this.getProductions();

    return parserUtil.findProduction(productionName, productions);
  }
}

module.exports = FlorenceParser;

FlorenceParser.grammar = grammar;

FlorenceParser.mappings = mappings;
