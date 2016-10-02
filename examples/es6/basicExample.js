'use strict';

var BasicLexer = require('../../../Lexers/es6/basic/lexer');  ///

var Example = require('./example');

var mappings = {};

class BasicExample extends Example {
  static run() {
    Example.updateParser(mappings);

    Example.specialSymbolsRegExpInput.onChange(function() {
      Example.updateParser(mappings);
      Example.updateParseTree(BasicLexer);
    });

    Example.grammarTextArea.onChange(function() {
      Example.updateParser(mappings);
      Example.updateParseTree(BasicLexer);
    });

    Example.contentTextArea.onChange(function() {
      Example.updateParseTree(BasicLexer);
    });
  }
}

module.exports = BasicExample;
