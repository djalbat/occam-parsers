'use strict';

const lexers = require('occam-lexers');

const Example = require('../example'),
      grammar = require('../extendedBNF/grammar'),
      ExtendedBNFParser = require('../extendedBNF/parser');

const { ExtendedBNFLexer } = lexers;

class ExtendedBNFExample {
  static run() {
    const lexicalGrammar = ExtendedBNFLexer.grammar,
          lexicalGrammarTextareaValue = JSON.stringify(lexicalGrammar, null, '  '), ///
          bnfGrammarTextareaValue = grammar,  ///
          contentTextareaValue = grammar; ///

    Example.setContentTextareaValue(contentTextareaValue);

    Example.setLexicalGrammarTextareaValue(lexicalGrammarTextareaValue);

    Example.setExtendedBNFGrammarTextareaValue(bnfGrammarTextareaValue);

    Example.onContentTextareaKeyUp(update);

    Example.onLexicalGrammarTextareaKeyUp(update);

    Example.onExtendedBNFGrammarTextareaKeyUp(update);

    update();
  }
}

function update() {
  const productionName = null;

  Example.updateLexer(ExtendedBNFLexer);

  Example.updateParser(function(grammar) {
    const extendedBNFParser = ExtendedBNFParser.fromNothing(),
          parser = extendedBNFParser; ///
    
    return parser;
  });

  Example.updateParseTree(productionName);
}

module.exports = ExtendedBNFExample;
