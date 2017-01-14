'use strict';

var FatalErrorNode = require('../node/fatalError'),
    SequenceOfPartsPart = require('./sequenceOfParts'),
    ZeroOrMorePartsPart = require('./zeroOrMoreParts');

class OneOrMorePartsPart extends SequenceOfPartsPart {
  parse(context, productions, noWhitespace) {
    noWhitespace = this.getNoWhitespace();  ///
    
    var nodes = null,
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
        }

        nodes = terminalPartOrProductionNodes;

        var zeroOrMorePartsPart = ZeroOrMorePartsPart.fromOneOrMorePartsPart(this), ///
            zeroOrMorePartsPartNodes = zeroOrMorePartsPart.parse(context, productions, noWhitespace),
            zeroOrMorePartsPartNodesParsed = (zeroOrMorePartsPartNodes !== null);

        if (zeroOrMorePartsPartNodesParsed) {
          if (zeroOrMorePartsPartNodes !== undefined) {
            var firstZeroOrMorePartsPartNode = first(zeroOrMorePartsPartNodes);

            if (firstZeroOrMorePartsPartNode instanceof FatalErrorNode) {
              fatalErrorNode = firstZeroOrMorePartsPartNode;

              nodes = [fatalErrorNode];

              return nodes;
            }
          }

          nodes = nodes.concat(zeroOrMorePartsPartNodes);
        }
      }
    }

    return nodes;
  }

  static fromSymbol(symbol, terminalSymbolsRegExp, significantTokenTypes, noWhitespace) {
    var regExp = /([^*]+)\+$/,
        Class = OneOrMorePartsPart,
        oneOrMorePartsPart = super.fromSymbol(symbol, terminalSymbolsRegExp, significantTokenTypes, noWhitespace, regExp, Class);

    return oneOrMorePartsPart;
  }
}

module.exports = OneOrMorePartsPart;

function first(array) { return array[0]; }
