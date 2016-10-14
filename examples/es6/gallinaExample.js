'use strict';

var lexers = require('occam-lexers'),
    GallinaLexer = lexers.GallinaLexer;

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
