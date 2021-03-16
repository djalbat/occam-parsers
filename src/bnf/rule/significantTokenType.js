"use strict";

import { types } from "occam-lexers";

import Rule from "../rule";
import SignificantTokenTypeNode from "../node/significantTokenType";
import SignificantTokenTypeDefinition from "../definition/significantTokenType";

import { SignificantTokenTypeRuleName } from "../ruleNames";

const { typeType } = types;

export default class SignificantTokenTypeRule extends Rule {
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
