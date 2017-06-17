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
  const mappingsCheckboxChecked = mappingsCheckbox.isChecked();

  if (mappingsCheckboxChecked) {
    const productionNameTextareaValue = productionNameTextarea.getValue(),
          productionName = productionNameTextareaValue, ///
          mappings = {},
          florenceParser = FlorenceParser.fromGrammarAndMappings(grammar, mappings),
          production = florenceParser.findProduction(productionName);

    Example.updateParseTreeTextarea(florenceLexer, florenceParser, production);
  } else {
    const florenceParser = FlorenceParser.fromGrammarAndMappings(grammar, mappings);

    Example.updateParseTreeTextarea(florenceLexer, florenceParser);
  }
}

