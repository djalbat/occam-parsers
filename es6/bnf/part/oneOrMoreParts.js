'use strict';

const SequenceOfPartsPart = require('./sequenceOfParts'),
      ZeroOrMorePartsPart = require('./zeroOrMoreParts');

class OneOrMorePartsPart extends SequenceOfPartsPart {
  parse(context, noWhitespace) {
    noWhitespace = this.getNoWhitespace();  ///

    let nodes = null;
    
    const productions = context.getProductions(),
          terminalPartOrProduction = this.terminalPartOrProduction(productions);

    if (terminalPartOrProduction !== null) {
      const terminalPartOrProductionNodeOrNodes = terminalPartOrProduction.parse(context, noWhitespace),
            terminalPartOrProductionParsed = (terminalPartOrProductionNodeOrNodes !== null);

      if (terminalPartOrProductionParsed) {
        nodes = (terminalPartOrProductionNodeOrNodes instanceof Array) ?
                  terminalPartOrProductionNodeOrNodes :
                    [terminalPartOrProductionNodeOrNodes];

        const zeroOrMorePartsPart = ZeroOrMorePartsPart.fromOneOrMorePartsPart(this), ///
              zeroOrMorePartsPartNodeOrNodes = zeroOrMorePartsPart.parse(context, noWhitespace);

        nodes = nodes.concat(zeroOrMorePartsPartNodeOrNodes);
      }
    }

    return nodes;
  }
}

module.exports = OneOrMorePartsPart;
