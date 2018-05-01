'use strict';

const lexers = require('occam-lexers');

const bnf = require('../bnf/bnf'),
      Example = require('../example'),
      BNFParser = require('../bnf/parser');

const { BNFLexer } = lexers;

class BNFExample {
  static run() {
    const content = bnf,
          lexicalEntries = BNFLexer.entries;  ///
  
    Example.run(content, lexicalEntries, bnf, updateHandler);

    updateHandler();
  }
}

function updateHandler() {
  const ruleName = null;

  Example.updateLexer(BNFLexer);

  Example.updateParser(function(bnf) {
    const bnfParser = BNFParser.fromNothing(),
          parser = bnfParser; ///
    
    return parser;
  });

  const node = Example.updateParseTree(ruleName),
        mappings = {};

  BNFParser.generateRules(node, mappings);
}

module.exports = BNFExample;
