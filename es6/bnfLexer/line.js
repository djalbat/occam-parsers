'use strict';

var util = require('../util'),
    SymbolSequence = require('./symbolSequence');

class Line {
  constructor(name, symbolSequences) {
    this.name = name;
    this.symbolSequences = symbolSequences;
  }
  
  getName() {
    return this.name;
  }
  
  mapSymbolSequences(cb) {
    return this.symbolSequences.map(cb);
  }
  
  static fromContent(content) {
    var matches = content.match(Line.nameExpressionRegExp),
        secondMatch = second(matches),
        thirdMatch = third(matches),
        name = secondMatch, ///
        expression = thirdMatch, ///
        choices = expression.split(Line.choiceDelimiterRegExp),
        symbolSequences = choices.map(function(choice) {
          var symbolSequence = SymbolSequence.fromChoice(choice);
          
          return symbolSequence;
        });
    
    var line = new Line(name, symbolSequences);
    
    return line;
  }
}

Line.nameExpressionRegExp = /^\s*(.*?)\s+::=\s+(.*?)\s*$/;
Line.continuedExpressionRegExp = /^\s*(\|\s+.*?)\s*$/;
Line.choiceDelimiterRegExp = /\s+\|\s+/;

module.exports = Line;

function second(array) { return array[1]; }
function third(array) { return array[2]; }
