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
      productionNameTextareaSelector = '#productionName',
      adjustedBNFGrammarTextareaSelector = 'textarea#adjustedBNFGrammar';

const florenceLexer = FlorenceLexer.fromNothing();

let productionName,
    mappingsCheckbox,
    productionNameTextarea,
    adjustedBNFGrammarTextarea;

class FlorenceExample {
  static run() {
    mappingsCheckbox = new Checkbox(mappingsCheckboxSelector);
    productionNameTextarea = new Textarea(productionNameTextareaSelector);
    adjustedBNFGrammarTextarea = new Textarea(adjustedBNFGrammarTextareaSelector);

    mappingsCheckbox.onChange(update);

    productionNameTextarea.onKeyUp(update);

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

    updateAdjustedBNFGrammar(florenceParser);

    Example.updateParseTreeTextarea(florenceLexer, florenceParser, production);
  } else {
    const florenceParser = FlorenceParser.fromGrammarAndMappings(grammar, mappings);

    updateAdjustedBNFGrammar(florenceParser);

    Example.updateParseTreeTextarea(florenceLexer, florenceParser);
  }
}

function updateAdjustedBNFGrammar(florenceParser) {
  const florenceParserString = florenceParser.toString(),
        adjustedBNFGrammarTextareaValue = florenceParserString;  ///

  adjustedBNFGrammarTextarea.setValue(adjustedBNFGrammarTextareaValue);
}

