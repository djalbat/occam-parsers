'use strict';

var lexers = require('../../es6/occam-lexers'),
    FlorenceLexer = lexers.FlorenceLexer;

var Preprocessor = require ('../../es6/preprocessor');

var Example = require('./example');

var grammar = require ('../../es6/grammar/gallina');

var terminalSymbolsRegExpPattern = FlorenceLexer.terminalSymbolsRegExpPattern();

class FlorenceExample extends Example {
  constructor() {
    var preprocessor = new Preprocessor();

    super(FlorenceLexer, preprocessor);
  }

  run() {
    super.setGrammar(grammar);

    super.setTerminalSymbolsRegExpPattern(terminalSymbolsRegExpPattern);

    super.run();
  }
}

module.exports = FlorenceExample;
