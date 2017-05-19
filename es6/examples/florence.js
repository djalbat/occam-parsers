'use strict';

const easy = require('easy'),
      lexers = require('occam-lexers');

const Example = require('../example'),
      FlorenceParser = require('../florence/parser'),
      florenceGrammar = require('../florence/grammar');

const { Textarea } = easy,
      { FlorenceLexer } = lexers;

const productionNameTextareaSelector = 'textarea#productionName';

const florenceLexer = FlorenceLexer.fromNothing();

let productionName,
    productionNameTextarea;

class FlorenceExample {
  static run() {
    productionNameTextarea = new Textarea(productionNameTextareaSelector);

    const grammarTextareaValue = florenceGrammar; ///

    Example.setGrammarTextareaValue(grammarTextareaValue);

    productionNameTextarea.onKeyUp(update);

    Example.onGrammarTextareaKeyUp(update);

    Example.onContentTextareaKeyUp(update);

    update();
  }
}

function update() {
  const grammarTextareaValue = Example.getGrammarTextareaValue(),
        productionNameTextareaValue = productionNameTextarea.getValue(),
        grammar = grammarTextareaValue, ///
        productionName = productionNameTextareaValue, ///
        florenceParser = FlorenceParser.fromGrammar(grammar),
        production = florenceParser.findProduction(productionName);

  Example.updateParseTree(florenceLexer, florenceParser, production);
}

module.exports = FlorenceExample;
