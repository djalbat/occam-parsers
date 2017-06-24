'use strict';

const easy = require('easy'),
      lexers = require('occam-lexers');

const Example = require('../example'),
      grammar = require('../florence/grammar'),
      mappings = require('../florence/mappings'),
      FlorenceParser = require('../florence/parser');

const { Checkbox, Input } = easy,
      { FlorenceLexer } = lexers;

const mappingsCheckboxSelector = '#mappings',
      productionNameInputSelector = '#productionName';

let productionName,
    mappingsCheckbox,
    productionNameInput;

const defaultMappings = mappings; ///

class FlorenceExample {
  static run() {
    mappingsCheckbox = new Checkbox(mappingsCheckboxSelector);
    productionNameInput = new Input(productionNameInputSelector);

    const lexicalGrammar = FlorenceLexer.grammar,
          lexicalGrammarTextareaValue = JSON.stringify(lexicalGrammar, null, '  '), ///
          bnfGrammarTextareaValue = grammar,  ///
          contentTextareaValue = ''; ///

    Example.setContentTextareaValue(contentTextareaValue);

    Example.setLexicalGrammarTextareaValue(lexicalGrammarTextareaValue);

    Example.setExtendedBNFGrammarTextareaValue(bnfGrammarTextareaValue);

    mappingsCheckbox.onChange(update);

    productionNameInput.onKeyUp(update);

    Example.onContentTextareaKeyUp(update);

    Example.onLexicalGrammarTextareaKeyUp(update);

    Example.onExtendedBNFGrammarTextareaKeyUp(update);

    update();
  }
}

module.exports = FlorenceExample;

function update() {
  const productionNameInputValue = productionNameInput.getValue(),
        productionName = productionNameInputValue;

  Example.updateLexer(FlorenceLexer);

  Example.updateParser(function(grammar) {
    const mappingsCheckboxChecked = mappingsCheckbox.isChecked(),
          mappings = mappingsCheckboxChecked ?
                      defaultMappings :
                        {},
          florenceParser = FlorenceParser.fromGrammarAndMappings(grammar, mappings),    
          parser = florenceParser;  ///
    
    return parser;
  });

  Example.updateParseTree(productionName);
}
