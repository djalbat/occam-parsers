"use strict";

const Path = require("./path"),
      Spread = require("./spread");

const { pathNodeFromSubExpressionNode, spreadNodeFromSubExpressionNode, subExpressionNodeFromSubExpressionNode } = require("./utilities/node");

class SubExpression {
  constructor(path, spread, subExpression) {
    this.path = path;
    this.spread = spread;
    this.subExpression = subExpression;
  }

  getPath() {
    return this.path;
  }

  getSpread() {
    return this.spread;
  }

  getSubExpression() {
    return this.subExpression;
  }

  getRuleNames() { return this.path.getRuleNames(); }

  getTokenTypes() { return this.path.getTokenTypes(); }

  isInfiniteDescent() { return this.path.isInfiniteDescent(); }

  static fromSubExpressionNode(subExpressionNode) {
    let subExpression = null;

    if (subExpressionNode !== null) {
      const pathNode = pathNodeFromSubExpressionNode(subExpressionNode),
            spreadNode = spreadNodeFromSubExpressionNode(subExpressionNode);

      subExpressionNode = subExpressionNodeFromSubExpressionNode(subExpressionNode);  ///

      const path = Path.fromPathNode(pathNode),
            spread = Spread.fromSpreadNode(spreadNode);

      subExpression = SubExpression.fromSubExpressionNode(subExpressionNode);

      subExpression = new SubExpression(path, spread, subExpression); ///
    }

    return subExpression;
  }
}

module.exports = SubExpression;
