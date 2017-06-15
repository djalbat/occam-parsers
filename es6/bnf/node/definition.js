'use strict';

const arrayUtil = require('../../util/array'),
      VerticalSpaceNode = require('../node/verticalSpace'),
      NonTerminalNode = require('../../common/node/nonTerminal');

class DefinitionNode extends NonTerminalNode {
  static fromNodesAndProductionName(nodes, productionName) {
    const lastNode = last(nodes),
          childNodes = (lastNode instanceof VerticalSpaceNode) ?
                         arrayUtil.discardLast(nodes) :
                           nodes;

    const productionsNode = NonTerminalNode.fromProductionNameAndChildNodes(productionName, childNodes);

    return productionsNode;
  }
}

module.exports = DefinitionNode;

function last(array) { return array[array.length - 1]; }
