'use strict';

const Definition = require('../definition'),
      GroupOfPartsPart = require('../part/groupOfParts'),
      OneOrMorePartsPart = require('../part/oneOrMoreParts'),
      TerminalSymbolPart = require('../part/terminalSymbol'),
      ProductionNamePart = require('../part/productionName');

class ChoiceOfPartsDefinition extends Definition {
  constructor() {
    const partProductionName = 'part',
          verticalBarTerminalSymbolContent = '|',
          openBracketTerminalSymbolContent = '(',
          closeBracketTerminalSymbolContent = ')',
          partProductionNamePart = new ProductionNamePart(partProductionName),
          verticalBarTerminalSymbolPart = new TerminalSymbolPart(verticalBarTerminalSymbolContent),
          openBracketTerminalSymbolPart = new TerminalSymbolPart(openBracketTerminalSymbolContent),
          closeBracketTerminalSymbolPart = new TerminalSymbolPart(closeBracketTerminalSymbolContent),
          verticalBarTerminalSymbolThenPartProductionNameParts = [
            verticalBarTerminalSymbolPart,
            partProductionNamePart
          ],
          groupOfPartsPart = new GroupOfPartsPart(verticalBarTerminalSymbolThenPartProductionNameParts),
          oneOrMoreGroupOfPartsPart = new OneOrMorePartsPart(groupOfPartsPart),
          parts = [
            openBracketTerminalSymbolPart,
            partProductionNamePart,
            oneOrMoreGroupOfPartsPart,
            closeBracketTerminalSymbolPart
          ];
    
    super(parts)
  }
}

module.exports = ChoiceOfPartsDefinition;
