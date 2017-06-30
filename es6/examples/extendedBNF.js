'use strict';

const lexers = require('occam-lexers');

const Example = require('../example'),
      extendedBNF = require('../extendedBNF/extendedBNF'),
      ExtendedBNFParser = require('../extendedBNF/parser');

const { ExtendedBNFLexer } = lexers;

class ExtendedBNFExample {
  static run() {
    const content = extendedBNF,
          lexicalEntries = ExtendedBNFLexer.entries;  ///
  
    Example.run(content, lexicalEntries, extendedBNF, updateHandler);

    updateHandler();
  }
}

function updateHandler() {
  const ruleName = null;

  Example.updateLexer(ExtendedBNFLexer);

  Example.updateParser(function(extendedBNF) {
    const extendedBNFParser = ExtendedBNFParser.fromNothing(),
          parser = extendedBNFParser; ///
    
    return parser;
  });

  const node = Example.updateParseTree(ruleName);

  ExtendedBNFParser.generateRules(node);
}

module.exports = ExtendedBNFExample;
