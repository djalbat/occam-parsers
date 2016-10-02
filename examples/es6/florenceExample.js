'use strict';

var FlorenceLexer = require('../../../Lexers/es6/florence/lexer');

var Example = require('./example');

var mappings = {};

class FlorenceExample extends Example {
  static run() {
    Example.updateParser(mappings);

    Example.contentTextArea.onChange(function() {
      Example.updateParseTree(FlorenceLexer);
    });
  }
}

module.exports = FlorenceExample;
