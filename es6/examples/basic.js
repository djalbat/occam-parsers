'use strict';

const lexers = require('occam-lexers');

const Example = require('../example'),
      extendedBNF = require('../basic/extendedBNF'),
      BasicParser = require('../basic/parser');

const { BasicLexer } = lexers;

class BasicExample {
  static run() {
    const content = '1+2/3',
          lexicalEntries = BasicLexer.entries; /// 
    
    Example.run(content, lexicalEntries, extendedBNF, updateHandler);

    updateHandler();
  }
}

function updateHandler() {
  const ruleName = null;
  
  Example.updateLexer(BasicLexer);

  Example.updateParser(function(extendedBNF) {
    const basicParser = BasicParser.fromExtendedBNF(extendedBNF),
          parser = basicParser; //'
    
    return parser; 
  });
  
  Example.updateParseTree(ruleName);
}

module.exports = BasicExample;
