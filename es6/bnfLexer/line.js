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
    var matches = content.match(/^\s*([^\s]+)\s+::=(.+)$/),
        secondMatch = second(matches),
        thirdMatch = third(matches),
        expression = thirdMatch.replace(/^\s+|\s+$/g, ''),
        choices = expression.split(/\s+\|\s+/), 
        name = secondMatch,  ///
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
