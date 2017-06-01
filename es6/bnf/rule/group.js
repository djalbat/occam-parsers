'use strict';

const Rule = require('../rule'),
      TerminalSymbolPart = require('../../common/part/terminalSymbol'),
      ProductionNamePart = require('../../common/part/productionName');

class GroupRule extends Rule {
  constructor() {
    const noWhitespace = false,
          openBracketTerminalSymbolContent = '(',
          rulesProductionName = 'rules',
          closeBracketTerminalSymbolContent = ')',
          openBracketTerminalSymbolPart = new TerminalSymbolPart(openBracketTerminalSymbolContent, noWhitespace),
          rulesProductionNamePart = new ProductionNamePart(rulesProductionName, noWhitespace),
          closeBracketTerminalSymbolPart = new TerminalSymbolPart(closeBracketTerminalSymbolContent, noWhitespace),
          parts = [
            openBracketTerminalSymbolPart,
            rulesProductionNamePart,
            closeBracketTerminalSymbolPart
          ];
    
    super(parts)
  }
}

module.exports = GroupRule;
