'use strict';

const Definition = require('../definition'),
      OneOrMorePartsPart = require('../part/oneOrMoreParts'),
      TerminalSymbolPart = require('../../common/part/terminalSymbol'),
      ProductionNamePart = require('../../common/part/productionName');

class GroupDefinition extends Definition {
  constructor() {
    const noWhitespace = false,
          openBracketTerminalSymbolContent = '(',
          partProductionName = 'part',
          closeBracketTerminalSymbolContent = ')',
          openBracketTerminalSymbolPart = new TerminalSymbolPart(openBracketTerminalSymbolContent, noWhitespace),
          partProductionNamePart = new ProductionNamePart(partProductionName, noWhitespace),
          oneOrMorePartProductionNamePartsPart = new OneOrMorePartsPart(partProductionNamePart, noWhitespace),
          closeBracketTerminalSymbolPart = new TerminalSymbolPart(closeBracketTerminalSymbolContent, noWhitespace),
          parts = [
            openBracketTerminalSymbolPart,
            oneOrMorePartProductionNamePartsPart,
            closeBracketTerminalSymbolPart
          ];
    
    super(parts)
  }
}

module.exports = GroupDefinition;
