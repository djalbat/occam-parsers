"use strict";

const Path = require("./path"),
      Spread = require("./spread"),
      SubExpression = require("./subExpression");

const { nodeFromExpressionString } = require("./utilities/expression"),
      { pathNodeFromExpressionNode,
         spreadNodeFromExpressionNode,
         errorNodesFromExpressionNode,
         subExpressionNodeFromExpressionNode } = require("./utilities/node");

class Expression {
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

  static fromExpressionNode(expressionNode) {
    const pathNode = pathNodeFromExpressionNode(expressionNode),
          spreadNode = spreadNodeFromExpressionNode(expressionNode),
          subExpressionNode = subExpressionNodeFromExpressionNode(expressionNode),
          path = Path.fromPathNode(pathNode),
          spread = Spread.fromSpreadNode(spreadNode),
          subExpression = SubExpression.fromSubExpressionNode(subExpressionNode),
          expression = new Expression(path, spread, subExpression);

    return expression;
  }

  static fromExpressionString(expressionString) {
    let expression = null;

    const node = nodeFromExpressionString(expressionString);

    if (node !== null) {
      const expressionNode = node, ///
            errorNodes = errorNodesFromExpressionNode(expressionNode),
            errorNodesLength = errorNodes.length;

      if (errorNodesLength === 0) {
        const pathNode = pathNodeFromExpressionNode(expressionNode),
              spreadNode = spreadNodeFromExpressionNode(expressionNode),
              subExpressionNode = subExpressionNodeFromExpressionNode(expressionNode),
              path = Path.fromPathNode(pathNode),
              spread = Spread.fromSpreadNode(spreadNode),
              subExpression = SubExpression.fromSubExpressionNode(subExpressionNode);

        expression = new Expression(path, spread, subExpression);
      }
    }

    return expression;
  }
}

module.exports = Expression;

