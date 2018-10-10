'use strict';

const lexers = require('occam-lexers');

const Example = require('../example'),
      MetaJSONParser = require('../metaJSON/parser');

const { MetaJSONLexer } = lexers,
      { entries } = MetaJSONLexer;

class MetaJSONExample {
  static run() {
    const { bnf } = MetaJSONParser,
          content = '1+2/3',
          lexicalEntries = entries; ///
    
    Example.run(content, lexicalEntries, bnf, updateHandler);

    updateHandler();
  }
}

function updateHandler() {
  const ruleName = null;
  
  Example.updateLexer(MetaJSONLexer);

  Example.updateParser(function(bnf) {
    const metaJSONParser = MetaJSONParser.fromBNF(bnf),
          parser = metaJSONParser; //'
    
    return parser; 
  });
  
  Example.updateParseTree(ruleName);
}

module.exports = MetaJSONExample;
