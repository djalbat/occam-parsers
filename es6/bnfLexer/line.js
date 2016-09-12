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
    var matches = content.match(/^(.+)::=(.+)$/),
        secondMatch = second(matches),
        thirdMatch = third(matches),
        expression = util.trimString(thirdMatch),
        choices = expression.split(/\s+\|\s+/),
        name = util.trimString(secondMatch),
        symbolSequences = choices.map(function(choice) {
          var symbolSequence = SymbolSequence.fromChoice(choice);
          
          return symbolSequence;
        });
    
    var line = new Line(name, symbolSequences);
    
    return line;
  }
}

module.exports = Line;

function second(array) { return array[1]; }
function third(array) { return array[2]; }
