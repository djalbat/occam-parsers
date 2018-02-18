'use strict';

const lexers = require('occam-lexers');

const bnf = require('../basic/bnf'),
      Example = require('../example'),
      BasicParser = require('../basic/parser');

const { BasicLexer } = lexers,
      { entries } = BasicLexer;

class BasicExample {
  static run() {
    const content = '1+2/3',
          lexicalEntries = entries; ///
    
    Example.run(content, lexicalEntries, bnf, updateHandler);

    updateHandler();
  }
}

function updateHandler() {
  const ruleName = null;
  
  Example.updateLexer(BasicLexer);

  Example.updateParser(function(bnf) {
    const basicParser = BasicParser.fromBNF(bnf),
          parser = basicParser; //'
    
    return parser; 
  });
  
  Example.updateParseTree(ruleName);
}

module.exports = BasicExample;
