'use strict';

const CommonParser = require('../common/parser'),
      ProductionsProduction = require('./production/productions'),
      ProductionProduction = require('./production/production'),
      RulesProduction = require('./production/rules'),
      RuleProduction = require('./production/rule'),
      PartProduction = require('./production/part'),
      ProductionNameProduction = require('./production/productionName'),
      RegularExpressionProduction = require('./production/regularExpression'),
      TerminalSymbolProduction = require('./production/terminalSymbol'),
      NoWhitespaceProduction = require('./production/noWhitespace'),
      EndOfLineProduction = require('./production/endOfLine');

class BNFParser extends CommonParser {
  static fromNothing() {
    const productionsProduction = new ProductionsProduction(),
          productionProduction = new ProductionProduction(),
          rulesProduction = new RulesProduction(),
          ruleProduction = new RuleProduction(),
          partProduction = new PartProduction(),
          productionNameProduction = new ProductionNameProduction(),
          regularExpressionProduction = new RegularExpressionProduction(),
          terminalSymbolProduction = new TerminalSymbolProduction(),
          noWhitespaceProduction = new NoWhitespaceProduction(),
          endOfLineProduction = new EndOfLineProduction(),
          productions = [
            productionsProduction,
            productionProduction,
            rulesProduction,
            ruleProduction,
            partProduction,
            productionNameProduction,
            regularExpressionProduction,
            terminalSymbolProduction,
            noWhitespaceProduction,
            endOfLineProduction
          ],
          bnfParser = new BNFParser(productions);
    
    return bnfParser;
  }
}

module.exports = BNFParser;
