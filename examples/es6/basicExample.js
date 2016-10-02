'use strict';

var Example = require('./example');

var mappings = {};

class BasicExample extends Example {
  static run() {
    Example.updateParser(mappings);

    Example.specialSymbolsRegExpInput.onChange(function() {
      Example.updateParser(mappings);
      Example.updateParseTree();
    });

    Example.grammarTextArea.onChange(function() {
      Example.updateParser(mappings);
      Example.updateParseTree();
    });

    Example.inputTextArea.onChange(function() {
      Example.updateParseTree();
    });
  }
}

module.exports = BasicExample;
