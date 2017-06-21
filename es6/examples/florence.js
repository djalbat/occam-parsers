'use strict';

const easy = require('easy'),
      lexers = require('occam-lexers');

const Example = require('../example'),
      grammar = require('../florence/grammar'),
      mappings = require('../florence/mappings'),
      FlorenceParser = require('../florence/parser');

const { Checkbox, Textarea } = easy,
      { FlorenceLexer } = lexers;

const mappingsCheckboxSelector = '#mappings',
      productionNameTextareaSelector = '#productionName';

const florenceLexer = FlorenceLexer.fromNothing();

let productionName,
    mappingsCheckbox,
    productionNameTextarea;

const defaultMappings = mappings; ///

class FlorenceExample {
  static run() {
    mappingsCheckbox = new Checkbox(mappingsCheckboxSelector);
    productionNameTextarea = new Textarea(productionNameTextareaSelector);

    const bnfGrammarTextareaValue = grammar;  ///

    Example.setBNFGrammarTextareaValue(bnfGrammarTextareaValue);

    mappingsCheckbox.onChange(update);

    productionNameTextarea.onKeyUp(update);

    Example.onBNFGrammarTextareaKeyUp(update);

    Example.onContentTextareaKeyUp(update);

    update();
  }
}

module.exports = FlorenceExample;

function update() {
  const mappingsCheckboxChecked = mappingsCheckbox.isChecked(),
        mappings = mappingsCheckboxChecked ?
          defaultMappings :
            {},
        florenceParser = FlorenceParser.fromGrammarAndMappings(grammar, mappings),
        productionNameTextareaValue = productionNameTextarea.getValue(),
        productionName = productionNameTextareaValue, ///
        production = florenceParser.findProduction(productionName);

  Example.updateParseTreeTextarea(florenceLexer, florenceParser, production);
}
