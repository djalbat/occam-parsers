'use strict';

const easy = require('easy'),
      lexers = require('occam-lexers');

const Example = require('../example'),
      bnf = require('../florence/bnf'),
      mappings = require('../florence/mappings'),
      FlorenceParser = require('../florence/parser');

const { Checkbox, Input } = easy,
      { FlorenceLexer } = lexers;

const mappingsCheckboxSelector = '#mappings',
      ruleNameInputSelector = '#ruleName';

let ruleName,
    mappingsCheckbox,
    ruleNameInput;

const defaultMappings = mappings; ///

class FlorenceExample {
  static run() {
    mappingsCheckbox = new Checkbox(mappingsCheckboxSelector);

    ruleNameInput = new Input(ruleNameInputSelector);

    mappingsCheckbox.onChange(updateHandler);

    ruleNameInput.onKeyUp(updateHandler);

    const content = '',
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
    const mappingsCheckboxChecked = mappingsCheckbox.isChecked(),
          mappings = mappingsCheckboxChecked ?
                      defaultMappings :
                        {},
          florenceParser = FlorenceParser.fromBNFAndMappings(bnf, mappings),    
          parser = florenceParser;  ///
    
    return parser;
  });

  Example.updateParseTree(ruleName);
}
