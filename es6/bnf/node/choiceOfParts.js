"use strict";

import NonTerminalNode from "../../common/node/nonTerminal";
import ChoiceOfPartsPart from "../part/nonTerminal/choiceOfParts";

export default class ChoiceOfPartsNode extends NonTerminalNode {
  generatePart(lookAhead) {
    const childNodes = this.getChildNodes(),
          nodes = childNodes.slice(),
          part = ChoiceOfPartsPart.fromNodes(nodes);

    return part;
  }

  static fromRuleNameAndChildNodes(ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(ChoiceOfPartsNode, ruleName, childNodes); }
}
