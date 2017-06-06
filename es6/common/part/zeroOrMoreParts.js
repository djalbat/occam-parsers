'use strict';

const SequenceOfPartsPart = require('./sequenceOfParts');

class ZeroOrMorePartsPart extends SequenceOfPartsPart {
  toString() {
    const operatorString = '*',
          string = super.toString(operatorString);

    return string;
  }

  parse(context, noWhitespace) {
    noWhitespace = this.getNoWhitespace();  ///

    let nodes = [];
    
    const productions = context.getProductions(),
          terminalPartOrProduction = this.getTerminalPartOrProduction(productions);

    if (terminalPartOrProduction !== null) {
      for(;;) {
        const terminalPartOrProductionNodeOrNodes = terminalPartOrProduction.parse(context, noWhitespace),
              terminalPartOrProductionParsed = (terminalPartOrProductionNodeOrNodes !== null);

        if (terminalPartOrProductionParsed) {
          nodes = nodes.concat(terminalPartOrProductionNodeOrNodes);
        } else {
          break;
        }
      }
    }

    return nodes;
  }
  
  static fromSymbol(symbol, significantTokenTypes, noWhitespace) {
    const regExp = /([^*]+)\*$/,
          Class = ZeroOrMorePartsPart,
          zeroOrMorePartsPart = super.fromSymbol(symbol, significantTokenTypes, noWhitespace, regExp, Class);

    return zeroOrMorePartsPart;
  }


  static fromOneOrMorePartsPart(oneOrMorePartsPart) {
    const terminalPart = oneOrMorePartsPart.getTerminalPart(),
          productionName = oneOrMorePartsPart.getProductionName(),
          noWhitespace = oneOrMorePartsPart.getNoWhitespace(),
          zeroOrMorePartsPart = new ZeroOrMorePartsPart(terminalPart, productionName, noWhitespace);

    return zeroOrMorePartsPart;
  }
}

module.exports = ZeroOrMorePartsPart;
