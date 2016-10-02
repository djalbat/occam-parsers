'use strict';

var BasicLexer = require('../../../Lexers/es6/basic/lexer');  ///

var Example = require('./example');

var mappings = {},
    basicLexer = undefined;

class BasicExample extends Example {
  static run() {
    updateBasicLexer();    
    Example.updateParser(mappings);

    Example.terminalSymbolsRegExpPatternInput.onChange(function() {
      updateBasicLexer();
      Example.updateParser(mappings);
      Example.updateParseTree(basicLexer);
    });

    Example.grammarTextArea.onChange(function() {
      Example.updateParser(mappings);
      Example.updateParseTree(basicLexer);
    });

    Example.contentTextArea.onChange(function() {
      Example.updateParseTree(basicLexer);
    });
  }
}

module.exports = BasicExample;

function updateBasicLexer() {
  var terminalSymbolsRegExpPatternInputValue = Example.terminalSymbolsRegExpPatternInput.getValue(),
      terminalSymbolsRegExpPattern = terminalSymbolsRegExpPatternInputValue; ///

  basicLexer = BasicLexer.fromTerminalSymbolsRegExpPattern(terminalSymbolsRegExpPattern);
}
