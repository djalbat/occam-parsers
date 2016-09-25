'use strict';

var ParseTree = require('../parseTree'),
    ChildNodesParseTree = require('../parseTree/childNodes'),
    ProductionNameParseTree = require('../parseTree/productionName');

class NonTerminalNodeParseTree extends ParseTree {
  static fromNonTerminalNode(nonTerminalNode) {
    var productionName = nonTerminalNode.getProductionName(),
        childNodes = nonTerminalNode.getChildNodes(),
        productionNameParseTree = ProductionNameParseTree.fromProductionName(productionName),
        childNodesParseTreeParseTree = ChildNodesParseTree.fromChildNodes(childNodes);

    var parseTree = productionNameParseTree,  ///
        parseTreeWidth = parseTree.getWidth(),
        childNodesParseTreeParseTreeWidth = childNodesParseTreeParseTree.getWidth(),
        differenceInWidths = Math.abs(parseTreeWidth - childNodesParseTreeParseTreeWidth),
        leftMarginWidth = Math.floor(differenceInWidths/2),
        rightMarginWidth = Math.ceil(differenceInWidths/2);

    if (false) {

    } else if (parseTreeWidth < childNodesParseTreeParseTreeWidth) {
      parseTree.addLeftMargin(leftMarginWidth);
      parseTree.addRightMargin(rightMarginWidth);
    } else if (childNodesParseTreeParseTreeWidth < parseTreeWidth) {
      childNodesParseTreeParseTree.addLeftMargin(leftMarginWidth);
      childNodesParseTreeParseTree.addRightMargin(rightMarginWidth);
    }

    parseTree.appendToBottom(childNodesParseTreeParseTree);

    return parseTree;
  }
}

module.exports = NonTerminalNodeParseTree;
