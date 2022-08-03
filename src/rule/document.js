"use strict";

import Rule from "../rule";
import DocumentBNFNode from "../node/bnf/document";
import DocumentDefinition from "../definition/document";

import { documentRuleName } from "../ruleNames";

export default class DocumentRule extends Rule {
  constructor() {
    const documentDefinition = new DocumentDefinition(),
          name = documentRuleName,  ///
          ambiguous = false,
          definitions = [
            documentDefinition
          ],
          Node = DocumentBNFNode;
    
    super(name, ambiguous, definitions, Node)
  }
}
