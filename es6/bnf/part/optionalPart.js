'use strict';

var FatalErrorNode = require('../node/fatalError'),
    SequenceOfPartsPart = require('./sequenceOfParts');

class OptionalPartPart extends SequenceOfPartsPart {
  parse(context, productions, noWhitespace) {
    noWhitespace = this.getNoWhitespace();  ///

    var nodes = [],
        fatalErrorNode,
        terminalPartOrProduction = this.terminalPartOrProduction(productions);
    
    if (terminalPartOrProduction !== null) {
      var terminalPartOrProductionNodes = terminalPartOrProduction.parse(context, productions, noWhitespace),
          terminalPartOrProductionParsed = (terminalPartOrProductionNodes !== null);

      if (terminalPartOrProductionParsed) {
        if (terminalPartOrProductionNodes !== undefined) {
          var firstTerminalPartOrProductionNode = first(terminalPartOrProductionNodes);

          if (firstTerminalPartOrProductionNode instanceof FatalErrorNode) {
            fatalErrorNode = firstTerminalPartOrProductionNode;

            nodes = [fatalErrorNode];

            return nodes;
          }

          nodes = terminalPartOrProductionNodes;
        }
      }
    }

    return nodes;
  }
  
  static fromSymbol(symbol, terminalSymbolsRegExp, significantTokenTypes, noWhitespace) {
    var regExp = /([^*]+)\?$/,
        Class = OptionalPartPart,
        optionalPartPart = super.fromSymbol(symbol, terminalSymbolsRegExp, significantTokenTypes, noWhitespace, regExp, Class);

    return optionalPartPart;
  }
}

module.exports = OptionalPartPart;

function first(array) { return array[0]; }
