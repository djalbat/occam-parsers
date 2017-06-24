'use strict';

const lexers = require('occam-lexers');

const Example = require('../example'),
      grammar = require('../extendedBNF/grammar'),
      ExtendedBNFParser = require('../extendedBNF/parser');

const { ExtendedBNFLexer } = lexers;

class ExtendedBNFExample {
  static run() {
    const content = grammar,
          lexicalGrammar = ExtendedBNFLexer.grammar,
          extendedBNFGrammar = grammar; ///
  
    Example.run(content, lexicalGrammar, extendedBNFGrammar, updateHandler);

    updateHandler();
  }
}

function updateHandler() {
  const ruleName = null;

  Example.updateLexer(ExtendedBNFLexer);

  Example.updateParser(function(grammar) {
    const extendedBNFParser = ExtendedBNFParser.fromNothing(),
          parser = extendedBNFParser; ///
    
    return parser;
  });

  const node = Example.updateParseTree(ruleName);

  ExtendedBNFParser.generateRules(node);
}

module.exports = ExtendedBNFExample;
