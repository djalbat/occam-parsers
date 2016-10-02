'use strict';

var Example = require('./example');

var mappings = {};

class FlorenceExample extends Example {
  static run() {
    Example.updateParser(mappings);

    Example.inputTextArea.onChange(function() {
      Example.updateParseTree();
    });
  }
}

module.exports = FlorenceExample;
