'use strict';

var lexers = require('occam-lexers'),
    FlorenceLexer = lexers.FlorenceLexer;

var Example = require('../example');

var grammar = require('../../../es6/grammar/florence');

var lexer = FlorenceLexer.fromNothing();

class FlorenceExample {
  static run() {
    var grammarTextAreaValue = grammar; ///

    Example.setGrammarTextAreaValue(grammarTextAreaValue);

    update();

    Example.onGrammarTextAreaChange(function() {
      update();
    });

    Example.onContentTextAreaChange(function() {
      update();
    });
  }
}

function update() {
  updateParser();

  Example.updateParseTree(lexer);
}

module.exports = FlorenceExample;

function updateParser() {
  var terminalSymbolsRegExpPattern = FlorenceLexer.terminalSymbolsRegExpPattern(),
      significantTokenTypes = FlorenceLexer.significantTokenTypes();

  Example.updateParser(grammar, terminalSymbolsRegExpPattern, significantTokenTypes);
}
