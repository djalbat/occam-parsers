'use strict';

var lexers = require('occam-lexers'),
    FlorenceLexer = lexers.FlorenceLexer;

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
