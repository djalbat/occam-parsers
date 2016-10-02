'use strict';

var GallinaLexer = require('../../../Lexers/es6/gallina/lexer');

var Example = require('./example');

var mappings = {};

class GallinaExample extends Example {
  static run() {
    Example.updateParser(mappings);

    Example.contentTextArea.onChange(function() {
      Example.updateParseTree(GallinaLexer);
    });
  }
}

module.exports = GallinaExample;
