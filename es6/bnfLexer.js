'use strict';

var Line = require('./bnfLexer/line');

class BNFLexer {
  static linesFromGrammar(grammar, specialSymbols) {
    var contents = contentsFromGrammar(grammar),
        lines = contents.map(function(content) {
      var line = Line.fromContent(content, specialSymbols);
      
      return line;
    });

    return lines;
  }
}

module.exports = BNFLexer;

function contentsFromGrammar(grammar) {
  var contents = grammar.split('\n').reduce(function (contents, content) {
    var matches;

    matches = content.match(/^(.+)::=(.+)$/);

    if (matches !== null) {
      contents.push(content);

      return contents;
    }

    matches = content.match(/^\s*(\|.*)$/);

    if (matches !== null) {
      var previousContent = contents.pop(),
          firstMatch = first(matches),
          continuingContent = ' ' + firstMatch; ///

      content = previousContent + continuingContent;

      contents.push(content);

      return contents;
    }

    return contents;
  }, []);

  return contents;
}

function first(array) { return array[0]; }
