"use strict";

import RuleNamePart from "../part/nonTerminal/ruleName";
import NonTerminalNode from "../../common/node/nonTerminal";

import { first } from "../../utilities/array";

export default class RuleNameNode extends NonTerminalNode {
  generatePart(lookAhead) {
    const ruleName = this.getRuleName(),
          ruleNamePart = new RuleNamePart(ruleName, lookAhead);

    return ruleNamePart;
  }

  getRuleName() {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          terminalNode = firstChildNode,  ///
          terminalNodeContent = terminalNode.getContent(),
          ruleName = terminalNodeContent; ///
    
    return ruleName;
  }

  static fromRuleNameAndChildNodes(ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(RuleNameNode, ruleName, childNodes); }
}
