'use strict';

const lexers = require('occam-lexers'),
      FlorenceLexer = lexers.FlorenceLexer;

const Example = require('../example');

const FlorenceParser = require('../florence/parser'),
      florenceGrammar = require('../florence/grammar');

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
