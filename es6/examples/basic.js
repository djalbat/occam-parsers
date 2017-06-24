'use strict';

const lexers = require('occam-lexers');

const Example = require('../example'),
      grammar = require('../basic/grammar'),
      BasicParser = require('../basic/parser');

const { BasicLexer } = lexers;

class BasicExample {
  static run() {
    const lexicalGrammar = BasicLexer.grammar,
          lexicalGrammarTextareaValue = JSON.stringify(lexicalGrammar, null, '  '),
          bnfGrammarTextareaValue = grammar, ///
          contentTextareaValue = '1+(2/3)';

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
  
  Example.updateLexer(BasicLexer);

  Example.updateParser(function(grammar) {
    const basicParser = BasicParser.fromGrammar(grammar),
          parser = basicParser; //'
    
    return parser; 
  });
  
  Example.updateParseTree(productionName);
}

module.exports = BasicExample;
