'use strict';

const CommonParser = require('../common/parser'),
      PartProduction = require('./production/part'),
      GroupProduction = require('./production/group'),
      EndOfLineProduction = require('./production/endOfLine'),
      DefinitionProduction = require('./production/definition'),
      DefinitionsProduction = require('./production/definitions'),
      ProductionProduction = require('./production/production'),
      ProductionsProduction = require('./production/productions'),
      OptionalPartProduction = require('./production/optionalPart'),
      NoWhitespaceProduction = require('./production/noWhitespace'),
      ProductionNameProduction = require('./production/productionName'),
      TerminalSymbolProduction = require('./production/terminalSymbol'),
      RegularExpressionProduction = require('./production/regularExpression'),
      SignificantTokenTypeProduction = require('./production/significantTokenType');

class BNFParser extends CommonParser {
  static fromNothing() {
    const partProduction = new PartProduction(),
          groupProduction = new GroupProduction(),
          endOfLineProduction = new EndOfLineProduction(),
          definitionProduction = new DefinitionProduction(),
          definitionsProduction = new DefinitionsProduction(),
          productionProduction = new ProductionProduction(),
          productionsProduction = new ProductionsProduction(),
          optionalPartProduction = new OptionalPartProduction(),
          noWhitespaceProduction = new NoWhitespaceProduction(),
          productionNameProduction = new ProductionNameProduction(),
          terminalSymbolProduction = new TerminalSymbolProduction(),
          regularExpressionProduction = new RegularExpressionProduction(),
          significantTokenTypeProduction = new SignificantTokenTypeProduction(),
          productions = [
            productionsProduction,
            productionProduction,
            definitionsProduction,
            definitionProduction,
            partProduction,
            groupProduction,
            optionalPartProduction,
            productionNameProduction,
            regularExpressionProduction,
            significantTokenTypeProduction,
            terminalSymbolProduction,
            noWhitespaceProduction,
            endOfLineProduction
          ],
          bnfParser = new BNFParser(productions);
    
    return bnfParser;
  }
}

module.exports = BNFParser;
