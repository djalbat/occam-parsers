"use strict";

const arrayUtilities = require("../../utilities/array"),
      NonTerminalNode = require("../../common/node/nonTerminal");

const { first } = arrayUtilities;

class NameNode extends NonTerminalNode {
  getName() {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          terminalNode = firstChildNode,  ///
          terminalNodeContent = terminalNode.getContent(),
          name = terminalNodeContent; ///
    
    return name;
  }

  static fromRuleNameAndChildNodes(ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(NameNode, ruleName, childNodes); }
}

module.exports = NameNode;
