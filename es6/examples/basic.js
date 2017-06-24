'use strict';

const lexers = require('occam-lexers');

const Example = require('../example'),
      grammar = require('../basic/grammar'),
      BasicParser = require('../basic/parser');

const { BasicLexer } = lexers;

class BasicExample {
  static run() {
    const content = '1+2/3',
          lexicalGrammar = BasicLexer.grammar,
          extendedBNFGrammar = grammar; ///
    
    Example.run(content, lexicalGrammar, extendedBNFGrammar, updateHandler);

    updateHandler();
  }
}

function updateHandler() {
  const ruleName = null;
  
  Example.updateLexer(BasicLexer);

  Example.updateParser(function(grammar) {
    const basicParser = BasicParser.fromGrammar(grammar),
          parser = basicParser; //'
    
    return parser; 
  });
  
  Example.updateParseTree(ruleName);
}

module.exports = BasicExample;
