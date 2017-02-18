'use strict';

var SequenceOfPartsPart = require('./sequenceOfParts'),
    ZeroOrMorePartsPart = require('./zeroOrMoreParts');

class OneOrMorePartsPart extends SequenceOfPartsPart {
  parse(context, noWhitespace) {
    noWhitespace = this.getNoWhitespace();  ///
    
    var nodes = null,
        productions = context.getProductions(),
        terminalPartOrProduction = this.terminalPartOrProduction(productions);

    if (terminalPartOrProduction !== null) {
      var terminalPartOrProductionNodes = terminalPartOrProduction.parse(context, noWhitespace),
          terminalPartOrProductionParsed = (terminalPartOrProductionNodes !== null);

      if (terminalPartOrProductionParsed) {
        nodes = terminalPartOrProductionNodes;

        var zeroOrMorePartsPart = ZeroOrMorePartsPart.fromOneOrMorePartsPart(this), ///
            zeroOrMorePartsPartNodes = zeroOrMorePartsPart.parse(context, noWhitespace);

        nodes = nodes.concat(zeroOrMorePartsPartNodes);
      }
    }

    return nodes;
  }

  static fromSymbol(symbol, significantTokenTypes, noWhitespace) {
    var regExp = /([^*]+)\+$/,
        Class = OneOrMorePartsPart,
        oneOrMorePartsPart = super.fromSymbol(symbol, significantTokenTypes, noWhitespace, regExp, Class);

    return oneOrMorePartsPart;
  }
}

module.exports = OneOrMorePartsPart;
