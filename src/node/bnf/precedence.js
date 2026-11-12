"use strict";

import { arrayUtilities } from "necessary";

import Precedence from "../../precedence";
import NonTerminalNode from "../../node/nonTerminal";

import { interveningPrecedence } from "../../precedence";
import { NON_INTERVENING_MULTIPLICITY } from "../../constants";

const { second } = arrayUtilities;

export default class PrecedenceBNFNode extends NonTerminalNode {
  generatePrecedence() {
    let precedence = interveningPrecedence; ///

    const multiplicity = this.getMultiplicity();

    if (multiplicity === NON_INTERVENING_MULTIPLICITY) {
      const childNodes = this.getChildNodes(),
            secondChildNode = second(childNodes),
            terminalNode = secondChildNode,  ///
            content = terminalNode.getContent(),
            number = Number(content);

      precedence = Precedence.fromNumber(number);
    }

    return precedence;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(PrecedenceBNFNode, ruleName, childNodes, precedence, opacity); }
}
