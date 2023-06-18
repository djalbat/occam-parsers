"use strict";

import NonTerminalNode from "../../node/nonTerminal";
import ChoiceOfPartsPart from "../../part/nonTerminal/choiceOfParts";

import { partRuleName } from "../../ruleNames";

export default class ChoiceOfPartsBNFNode extends NonTerminalNode {
  generatePart(lookAhead) {
    const childNodes = this.getChildNodes(),
          partBNFNodes = childNodes.filter((childNode) => {
            const childNodeNonTerminalNode = childNode.isNonTerminalNode();

            if (childNodeNonTerminalNode) {
              const nonTerminalNode = childNode,  ///
                    ruleName = nonTerminalNode.getRuleName(),
                    ruleNamePartRuleName = (ruleName === partRuleName);

              if (ruleNamePartRuleName) {
                return true;
              }
            }
          });

    lookAhead = false;  ///

    const parts = partBNFNodes.map((partBNFNode) => {
            const part = partBNFNode.generatePart(lookAhead);

            return part;
          }),
          choiceOfPartsPart = new ChoiceOfPartsPart(parts),
          part = choiceOfPartsPart; ///

    return part;
  }

  static fromRuleNamePrecedenceAndChildNodes(ruleName, precedence, childNodes) { return NonTerminalNode.fromRuleNamePrecedenceAndChildNodes(ChoiceOfPartsBNFNode, ruleName, precedence, childNodes); }
}
