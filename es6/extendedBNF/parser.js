'use strict';

const Parts = require('./parts'),
      Definition = require('./definition'),
      Production = require('./production'),
      cycles = require('../grammar/cycles'),
      leftRecursion = require('../grammar/leftRecursion'),
      CommonParser = require('../common/parser'),
      PartProduction = require('./production/part'),
      EpsilonProduction = require('./production/epsilon'),
      WildcardProduction = require('./production/wildcard'),
      EndOfLineProduction = require('./production/endOfLine'),
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
      TerminalSymbolProduction = require('./production/terminalSymbol'),
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
          epsilonProduction = new EpsilonProduction(),
          wildcardProduction = new WildcardProduction(),
          endOfLineProduction = new EndOfLineProduction(),
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
          terminalSymbolProduction = new TerminalSymbolProduction(),
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
          endOfLineProduction,
          epsilonProduction,
          wildcardProduction
        ];

    productions = cycles.eliminate(productions);  ///

    productions = leftRecursion.eliminate(productions);  ///

    const extendedBNFParser = new ExtetendedBNFParser(productions);
    
    return extendedBNFParser;
  }
}

module.exports = ExtetendedBNFParser;
