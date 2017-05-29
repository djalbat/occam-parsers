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

    const bnfGrammarTextareaValue = grammar; ///

    Example.setBNFGrammarTextareaValue(bnfGrammarTextareaValue);

    mappingsCheckbox.onChange(update);

    productionNameTextarea.onKeyUp(update);

    Example.onBNFGrammarTextareaKeyUp(update);

    Example.onContentTextareaKeyUp(update);

    update();
  }
}

function update() {
  const mappingsCheckboxChecked = mappingsCheckbox.isChecked(),
        bnfGrammarTextareaValue = Example.getBNFGrammarTextareaValue(),
        productionNameTextareaValue = productionNameTextarea.getValue(),
        adjustedMappings = mappingsCheckboxChecked ? 
                             mappings : 
                               {},
        adjustedGrammar = bnfGrammarTextareaValue, ///
        productionName = productionNameTextareaValue, ///
        florenceParser = FlorenceParser.fromGrammarAndMappings(adjustedGrammar, adjustedMappings),
        production = florenceParser.findProduction(productionName);

  Example.updateParseTreeTextarea(florenceLexer, florenceParser, production);
}

module.exports = FlorenceExample;
