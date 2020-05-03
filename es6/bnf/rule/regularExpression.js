"use strict";

const lexers = require("occam-lexers");

const Rule = require("../rule"),
      ruleNames = require("../ruleNames"),
      RegularExpressionNode = require("../node/regularExpression"),
      SignificantTokenTypeDefinition = require("../definition/significantTokenType");

const { types } = lexers,
      { regularExpressionType } = types,
      { RegularExpressionRuleName } = ruleNames;

class RegularExpressionRule extends Rule {
  constructor() {
    const regularExpressionSignificantTokenType = regularExpressionType,  ///
          regularExpressionSignificantTokenTypeDefinition = new SignificantTokenTypeDefinition(regularExpressionSignificantTokenType),
          name = RegularExpressionRuleName,
          definitions = [
            regularExpressionSignificantTokenTypeDefinition
          ],
          Node = RegularExpressionNode;
    
    super(name, definitions, Node)
  }
}

module.exports = RegularExpressionRule;
