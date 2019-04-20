'use strict';

const lexers = require('occam-lexers');

const Rule = require('../rule'),
      ruleNames = require('../ruleNames'),
      SignificantTokenTypeNode = require('../node/significantTokenType'),
      SignificantTokenTypeDefinition = require('../definition/significantTokenType');

const { types } = lexers,
      { typeType } = types,
      { SignificantTokenTypeRuleName } = ruleNames;

class SignificantTokenTypeRule extends Rule {
  constructor() {
    const typeSignificantTokenType = typeType,  ///
          typeSignificantTokenTypeDefinition = new SignificantTokenTypeDefinition(typeSignificantTokenType),
          name = SignificantTokenTypeRuleName,
          definitions = [
            typeSignificantTokenTypeDefinition
          ],
          Node = SignificantTokenTypeNode;
    
    super(name, definitions, Node)
  }
}

module.exports = SignificantTokenTypeRule;
