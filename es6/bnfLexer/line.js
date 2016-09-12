'use strict';

var Expression = require('./expression');

class Line {
  constructor(name, expressions) {
    this.name = name;
    this.expressions = expressions;
  }
  
  getName() {
    return this.name;
  }
  
  mapExpressions(cb) {
    return this.expressions.map(cb);
  }

  static fromContent(content, specialSymbols) {
    var matches = content.match(/^\s*([^\s]+)\s+::=(.+)$/),
        secondMatch = second(matches),
        thirdMatch = third(matches),
        expressionString = thirdMatch.replace(/^\s+|\s+$/g, ''),
        expressionStrings = expressionString.split(/\s+\|\s+/),
        name = secondMatch,  ///
        expressions = expressionStrings.map(function(expressionString) {
          var expression = Expression.fromExpressionString(expressionString, specialSymbols);

          return expression;
        });

    var line = new Line(name, expressions);

    return line;
  }
}

module.exports = Line;

function second(array) { return array[1]; }
function third(array) { return array[2]; }
