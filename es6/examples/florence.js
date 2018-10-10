'use strict';

const easy = require('easy'),
      lexers = require('occam-lexers');

const Example = require('../example'),
      FlorenceParser = require('../florence/parser');

const { Input } = easy,
      { FlorenceLexer } = lexers;

const ruleNameInputSelector = '#ruleName';

let ruleNameInput;

class FlorenceExample {
  static run() {
    ruleNameInput = new Input(ruleNameInputSelector);

    ruleNameInput.onKeyUp(updateHandler);

    const { bnf } = FlorenceParser,
          content = '',
          lexicalEntries = FlorenceLexer.entries; ///

    Example.run(content, lexicalEntries, bnf, updateHandler);

    updateHandler();
  }
}

module.exports = FlorenceExample;

function updateHandler() {
  const ruleNameInputValue = ruleNameInput.getValue(),
        ruleName = ruleNameInputValue;

  Example.updateLexer(FlorenceLexer);

  Example.updateParser(function(bnf) {
    const florenceParser = FlorenceParser.fromBNF(bnf),
          parser = florenceParser;  ///
    
    return parser;
  });

  Example.updateParseTree(ruleName);
}
