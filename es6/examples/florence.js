'use strict';

var lexers = require('occam-lexers'),
    FlorenceLexer = lexers.FlorenceLexer;

var Example = require('../example');

var FlorenceParser = require('../florence/parser'),
    florenceGrammar = require('../florence/grammar');

var florenceLexer = FlorenceLexer.fromNothing(),
    florenceParser = FlorenceParser.fromNothing();

class FlorenceExample {
  static run() {
    var grammarTextareaValue = florenceGrammar; ///

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
