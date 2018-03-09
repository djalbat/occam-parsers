'use strict';

const Rule = require('../rule'),
      ruleNames = require('../ruleNames'),
      SignificantTokenTypeNode = require('../node/significantTokenType'),
      SignificantTokenTypeDefinition = require('../definition/significantTokenType');

const { SignificantTokenTypeRuleName } = ruleNames;

class SignificantTokenTypeRule extends Rule {
  constructor() {
    const typeSignificantTokenType = 'type',
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
