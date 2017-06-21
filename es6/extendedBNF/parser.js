'use strict';

const Parts = require('./parts'),
      Definition = require('./definition'),
      Production = require('./production'),
      cycles = require('../grammar/cycles'),
      leftRecursion = require('../grammar/leftRecursion'),
      CommonParser = require('../common/parser'),
      PartProduction = require('./production/part'),
      DefinitionProduction = require('./production/definition'),
      ProductionProduction = require('./production/production'),
      DefinitionsProduction = require('./production/definitions'),
      ProductionsProduction = require('./production/productions'),
      GroupOfPartsProduction = require('./production/groupOfParts'),
      ChoiceOfPartsProduction = require('./production/choiceOfParts'),
      OptionalPartProduction = require('./production/optionalPart'),
      ZeroOrMorePartsProduction = require('./production/zeroOrMoreParts'),
      OneOrMorePartsProduction = require('./production/oneOrMoreParts'),
      ProductionNameProduction = require('./production/productionName'),
      WildcardSymbolProduction = require('./production/wildcardSymbol'),
      TerminalSymbolProduction = require('./production/terminalSymbol'),
      EndOfLineSymbolProduction = require('./production/endOfLineSymbol'),
      NoWhitespacePartProduction = require('./production/noWhitespacePart'),
      RegularExpressionProduction = require('./production/regularExpression'),
      SignificantTokenTypeProduction = require('./production/significantTokenType');

class ExtetendedBNFParser extends CommonParser {
  static generateProductions(node, mappings = {}) {
    const productions = (node !== null) ?
                          node.generateProductions(Production, Definition, Parts, mappings) :
                            [];

    return productions;
  }

  static fromNothing() {
    const partProduction = new PartProduction(),
          definitionProduction = new DefinitionProduction(),
          productionProduction = new ProductionProduction(),
          definitionsProduction = new DefinitionsProduction(),
          productionsProduction = new ProductionsProduction(),
          groupOfPartsProduction = new GroupOfPartsProduction(),
          choiceOfPartsProduction = new ChoiceOfPartsProduction(),
          optionalPartProduction = new OptionalPartProduction(),
          zeroOrMorePartsProduction = new ZeroOrMorePartsProduction(),
          oneOrMorePartsProduction = new OneOrMorePartsProduction(),
          productionNameProduction = new ProductionNameProduction(),
          wildcardSymbolProduction = new WildcardSymbolProduction(),
          terminalSymbolProduction = new TerminalSymbolProduction(),
          endOfLineSymbolProduction = new EndOfLineSymbolProduction(),
          noWhitespacePartProduction = new NoWhitespacePartProduction(),
          regularExpressionProduction = new RegularExpressionProduction(),
          significantTokenTypeProduction = new SignificantTokenTypeProduction();

    let productions = [
          productionsProduction,
          productionProduction,
          definitionsProduction,
          definitionProduction,
          noWhitespacePartProduction,
          optionalPartProduction,
          zeroOrMorePartsProduction,
          oneOrMorePartsProduction,
          groupOfPartsProduction,
          choiceOfPartsProduction,
          partProduction,
          productionNameProduction,
          regularExpressionProduction,
          significantTokenTypeProduction,
          terminalSymbolProduction,
          endOfLineSymbolProduction,
          wildcardSymbolProduction
        ];

    productions = cycles.eliminate(productions);  ///

    productions = leftRecursion.eliminate(productions);  ///

    const extendedBNFParser = new ExtetendedBNFParser(productions);
    
    return extendedBNFParser;
  }
}

module.exports = ExtetendedBNFParser;
