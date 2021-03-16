"use strict";

import Rule from "../rule";
import DocumentNode from "../node/document";
import DocumentDefinition from "../definition/document";

import { DocumentRuleName } from "../ruleNames";

export default class DocumentRule extends Rule {
  constructor() {
    const documentDefinition = new DocumentDefinition(),
          name = DocumentRuleName,
          definitions = [
            documentDefinition
          ],
          Node = DocumentNode;
    
    super(name, definitions, Node)
  }
}
