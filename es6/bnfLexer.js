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
    var blank = (content.search(/^\s*$/) === 0);

    if (!blank) {
      var matches = content.match(/^\s+(\|.*)$/),
          continuing = (matches !== null);

      if (continuing) {
        var previousContent = contents.pop(),
            firstMatch = first(matches),
            continuingContent = ' ' + firstMatch; ///

        previousContent = previousContent + continuingContent;

        content = previousContent;
      }

      contents.push(content);
    }

    return contents;
  }, []);

  return contents;
}

function first(array) { return array[0]; }
