"use strict";

import { types } from "occam-lexers";

import Rule from "../rule";
import SignificantTokenTypeBNFNode from "../node/bnf/significantTokenType";
import SignificantTokenTypeDefinition from "../definition/significantTokenType";

import { significantTokenTypeRuleName } from "../ruleNames";

const { typeType } = types;

export default class SignificantTokenTypeRule extends Rule {
  constructor() {
    const typeSignificantTokenType = typeType,  ///
          typeSignificantTokenTypeDefinition = new SignificantTokenTypeDefinition(typeSignificantTokenType),
          name = significantTokenTypeRuleName,  ///
          ambiguous = false,
          definitions = [
            typeSignificantTokenTypeDefinition
          ],
          Node = SignificantTokenTypeBNFNode;
    
    super(name, ambiguous, definitions, Node)
  }
}
