'use strict';

const easy = require('easy'),
      lexers = require('occam-lexers');

const Example = require('../example'),
      FlorenceParser = require('../florence/parser'),
      grammar = require('../florence/grammar'),
      mappings = require('../florence/mappings');

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

    const grammarTextareaValue = grammar; ///

    Example.setGrammarTextareaValue(grammarTextareaValue);

    mappingsCheckbox.onChange(update);

    productionNameTextarea.onKeyUp(update);

    Example.onGrammarTextareaKeyUp(update);

    Example.onContentTextareaKeyUp(update);

    update();
  }
}

function update() {
  const mappingsCheckboxChecked = mappingsCheckbox.isChecked(),
        grammarTextareaValue = Example.getGrammarTextareaValue(),
        productionNameTextareaValue = productionNameTextarea.getValue(),
        adjustedMappings = mappingsCheckboxChecked ? mappings : {},
        adjustedGrammar = grammarTextareaValue, ///
        productionName = productionNameTextareaValue, ///
        florenceParser = FlorenceParser.fromGrammarAndMappings(adjustedGrammar, adjustedMappings),
        production = florenceParser.findProduction(productionName);

  Example.updateParseTree(florenceLexer, florenceParser, production);
}

module.exports = FlorenceExample;
