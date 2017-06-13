'use strict';

const Definition = require('../definition'),
      TerminalSymbolPart = require('../../common/part/terminalSymbol'),
      ProductionNamePart = require('../../common/part/productionName');

class GroupDefinition extends Definition {
  constructor() {
    const noWhitespace = false,
          openBracketTerminalSymbolContent = '(',
          definitionsProductionName = 'definitions',
          closeBracketTerminalSymbolContent = ')',
          openBracketTerminalSymbolPart = new TerminalSymbolPart(openBracketTerminalSymbolContent, noWhitespace),
          definitionsProductionNamePart = new ProductionNamePart(definitionsProductionName, noWhitespace),
          closeBracketTerminalSymbolPart = new TerminalSymbolPart(closeBracketTerminalSymbolContent, noWhitespace),
          parts = [
            openBracketTerminalSymbolPart,
            definitionsProductionNamePart,
            closeBracketTerminalSymbolPart
          ];
    
    super(parts)
  }
}

module.exports = GroupDefinition;
