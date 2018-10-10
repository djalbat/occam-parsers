'use strict';

const lexers = require('occam-lexers');

const Example = require('../example'),
      BNFParser = require('../bnf/parser');

const { BNFLexer } = lexers;

class BNFExample {
  static run() {
    const { bnf } = BNFParser,
          content = bnf,
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

  const node = Example.updateParseTree(ruleName);

  BNFParser.generateRules(node);
}

module.exports = BNFExample;
