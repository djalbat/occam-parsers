'use strict';

const Definition = require('../definition'),
      GroupOfPartsPart = require('../part/groupOfParts'),
      TerminalSymbolPart = require('../part/terminalSymbol'),
      ProductionNamePart = require('../part/productionName'),
      ZeroOrMorePartsPart = require('../part/zeroOrMoreParts');

class DefinitionsDefinition extends Definition {
  constructor() {
    const definitionProductionName = 'definition',
          verticalBarTerminalSymbolContent = '|',
          definitionProductionNamePart = new ProductionNamePart(definitionProductionName),
          verticalBarTerminalSymbolPart = new TerminalSymbolPart(verticalBarTerminalSymbolContent),
          verticalBarTerminalSymbolThenDefinitionProductionNameParts = [
            verticalBarTerminalSymbolPart,
            definitionProductionNamePart
          ],
          groupOfPartsPart = new GroupOfPartsPart(verticalBarTerminalSymbolThenDefinitionProductionNameParts),
          zeroOrMoreGroupOfPartsPart = new ZeroOrMorePartsPart(groupOfPartsPart),
          parts = [
            definitionProductionNamePart,
            zeroOrMoreGroupOfPartsPart
          ];
    
    super(parts)
  }
}

module.exports = DefinitionsDefinition;
