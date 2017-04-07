'use strict';

const lexers = require('occam-lexers');

const Example = require('../example'),
      FlorenceParser = require('../florence/parser'),
      florenceGrammar = require('../florence/grammar');

const { FlorenceLexer } = lexers;

const florenceLexer = FlorenceLexer.fromNothing(),
      florenceParser = FlorenceParser.fromNothing();

class FlorenceExample {
  static run() {
    const grammarTextareaValue = florenceGrammar; ///

    Example.setGrammarTextareaValue(grammarTextareaValue);

    update();

    Example.onContentTextareaKeyUp(function() {
      update();
    });
  }
}

function update() {
  Example.updateParseTree(florenceLexer, florenceParser);
}

module.exports = FlorenceExample;
