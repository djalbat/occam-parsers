'use strict';

var lexers = require('occam-lexers'),
    GallinaLexer = lexers.GallinaLexer;

var Example = require('../example');

var GallinaParser = require('../gallina/parser'),
    gallinaGrammar = require('../gallina/grammar');

var gallinaLexer = GallinaLexer.fromNothing(),
    gallinaParser = GallinaParser.fromNothing();

class GallinaExample {
  static run() {
    var grammarTextAreaValue = gallinaGrammar; ///

    Example.setGrammarTextAreaValue(grammarTextAreaValue);

    update();

    Example.onContentTextAreaChange(function() {
      update();
    });
  }
}

function update() {
  Example.updateParseTree(gallinaLexer, gallinaParser);
}

module.exports = GallinaExample;
