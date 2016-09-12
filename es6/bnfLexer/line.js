'use strict';

var SequenceOfSymbols = require('./sequenceOfSymbols');

class Line {
  constructor(name, sequencesOfSymbols) {
    this.name = name;
    this.sequencesOfSymbols = sequencesOfSymbols;
  }
  
  getName() {
    return this.name;
  }
  
  mapSequencesOfSymbols(cb) {
    return this.sequencesOfSymbols.map(cb);
  }
  
  static fromContent(content) {
    var matches = content.match(/^(.+)::=(.+)$/),
        secondMatch = second(matches),
        thirdMatch = third(matches),
        name = trim(secondMatch),
        expression = trim(thirdMatch),
        choices = expression.split(/\s+\|\s+/), 
        sequencesOfSymbols = choices.map(function(choice) {
          var sequenceOfSymbols = SequenceOfSymbols.fromChoice(choice);
          
          return sequenceOfSymbols;
        });
    
    var line = new Line(name, sequencesOfSymbols);
    
    return line;
  }
}

module.exports = Line;

function second(array) { return array[1]; }
function third(array) { return array[2]; }

function trim(string) { 
  return string.replace(/^\s+|\s+$/g, ''); 
}
