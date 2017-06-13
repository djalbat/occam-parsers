'use strict';

const Definition = require('../definition'),
      GroupOfPartsPart = require('../part/groupOfParts'),
      ZeroOrMorePartsPart = require('../part/zeroOrMoreParts'),
      TerminalSymbolPart = require('../../common/part/terminalSymbol'),
      ProductionNamePart = require('../../common/part/productionName');

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
          verticalBarTerminalSymbolThenDefinitionProductionNameGroupOfPartsPart = new GroupOfPartsPart(verticalBarTerminalSymbolThenDefinitionProductionNameParts),
          zeroOrMoreVerticalBarTerminalSymbolThenDefinitionProductionNameGroupOfPartsPartsPart = new ZeroOrMorePartsPart(verticalBarTerminalSymbolThenDefinitionProductionNameGroupOfPartsPart),
          parts = [
            definitionProductionNamePart,
            zeroOrMoreVerticalBarTerminalSymbolThenDefinitionProductionNameGroupOfPartsPartsPart
          ];
    
    super(parts)
  }
}

module.exports = DefinitionsDefinition;
