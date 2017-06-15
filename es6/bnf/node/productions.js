'use strict';

const arrayUtil = require('../../util/array'),
      VerticalSpaceNode = require('../node/verticalSpace'),
      NonTerminalNode = require('../../common/node/nonTerminal');

class ProductionsNode extends NonTerminalNode {
  static fromNodesAndProductionName(nodes, productionName) {
    const firstNode = first(nodes),
          childNodes = (firstNode instanceof VerticalSpaceNode) ?
            arrayUtil.discardFirst(nodes) :
              nodes;

    const productionsNode = NonTerminalNode.fromProductionNameAndChildNodes(productionName, childNodes, ProductionsNode);

    return productionsNode;
  }
}

module.exports = ProductionsNode;

function first(array) { return array[0]; }
