'use strict';

var Line = require('./bnfLexer/line');

class BNFLexer {
  static linesFromGrammar(grammar) {
    var contents = contentsFromGrammar(grammar),
        lines = contents.map(function(content) {
      var line = Line.fromContent(content);
      
      return line;
    });

    return lines;
  }
}

module.exports = BNFLexer;

function contentsFromGrammar(grammar) {
  var contents = grammar.split('\n').reduce(function (contents, content) {
    var matches;

    matches = content.match(Line.nameExpressionRegExp);

    if (matches !== null) {
      contents.push(content);

      return contents;
    }

      matches = content.match(Line.continuedExpressionRegExp);

    if (matches !== null) {
      var previousContent = contents.pop(),
          firstMatch = first(matches),
          continuedExpression = firstMatch, ///
          continuingContent = ' ' + continuedExpression;

      content = previousContent + continuingContent;

      contents.push(content);

      return contents;
    }

    return contents;
  }, []);

  return contents;
}

function first(array) { return array[0]; }
