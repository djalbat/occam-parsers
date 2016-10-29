'use strict';

var lexers = require('../../../es6/occam-lexers'),
    GallinaLexer = lexers.GallinaLexer;

var Example = require('../example');

var grammar = require('../../../es6/grammar/gallina');

var lexer = GallinaLexer.fromNothing();

class GallinaExample {
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

module.exports = GallinaExample;

function updateParser() {
  var terminalSymbolsRegExpPattern = GallinaLexer.terminalSymbolsRegExpPattern(),
      significantTokenTypes = GallinaLexer.significantTokenTypes();

  Example.updateParser(grammar, terminalSymbolsRegExpPattern, significantTokenTypes);
}
