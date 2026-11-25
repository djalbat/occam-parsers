"use strict";

const { characters } = require("necessary");

const Expression = require("./expression");

const { push, includes } = require("./utilities/array");

const { WILDCARD_CHARACTER } = characters;

class Query {
  constructor(spread, subQuery, ruleNames, tokenTypes, maximumDepth, infiniteDescent) {
    this.spread = spread;
    this.subQuery = subQuery;
    this.ruleNames = ruleNames;
    this.tokenTypes = tokenTypes;
    this.maximumDepth = maximumDepth;
    this.infiniteDescent = infiniteDescent;
  }

  getSpread() {
    return this.spread;
  }

  getSubQuery() {
    return this.subQuery;
  }

  getRuleNames() {
    return this.ruleNames;
  }

  getTokenTypes() {
    return this.tokenTypes;
  }

  getMaximumDepth() {
    return this.maximumDepth;
  }

  isInfiniteDescent() {
    return this.infiniteDescent;
  }

  execute(node, depth = 0, maximumDepth = this.maximumDepth) {
    const nodes = [];

    const intermediateNodes = this.find(node, depth, maximumDepth);

    this.apply(nodes, depth, maximumDepth, intermediateNodes);

    return nodes;
  }

  find(node, depth, maximumDepth, intermediateNodes = []) {
    if (depth <= maximumDepth) {
      const nodeTerminalNode = node.isTerminalNode(),
            nodeNonTerminalNode = !nodeTerminalNode;

      if (nodeTerminalNode) {
        const terminalNode = node,  ///
              type = terminalNode.getType(),
              tokenType = type,
              found = includes(this.tokenTypes, tokenType, WILDCARD_CHARACTER);

        if (found) {
          const intermediateNode = terminalNode; ///

          intermediateNodes.push(intermediateNode);
        }
      }

      if (nodeNonTerminalNode) {
        const nonTerminalNode = node, ///
              ruleName = nonTerminalNode.getRuleName(),
              found = includes(this.ruleNames, ruleName, WILDCARD_CHARACTER);

        if (found) {
          const intermediateNode = nonTerminalNode; ///

          intermediateNodes.push(intermediateNode);
        }

        if (this.infiniteDescent) {
          depth++;

          nonTerminalNode.forEachChildNode((childNode) => {
            const node = childNode; ///

            this.find(node, depth, maximumDepth, intermediateNodes);
          });
        }
      }
    }

    return intermediateNodes;
  }

  apply(nodes, depth, maximumDepth, intermediateNodes) {
    this.spread.adjustNodes(intermediateNodes);

    if (this.subQuery === null) {
      push(nodes, intermediateNodes);

      return;
    }

    depth++;

    intermediateNodes.forEach((intermediateNode) => {
      const intermedidateNodeNonTerminalNode = intermediateNode.isNonTerminalNode();

      if (intermedidateNodeNonTerminalNode) {
        const nonTerminalNode = intermediateNode, ///
              intermediateNodes = [];

        nonTerminalNode.forEachChildNode((childNode) => {
          const node = childNode; ///

          this.subQuery.find(node, depth, maximumDepth, intermediateNodes);
        });

        this.subQuery.apply(nodes, depth, maximumDepth, intermediateNodes);
      }
    });
  }

  static fromExpression(expression, maximumDepth = Infinity) {
    const spread = expression.getSpread(),
          subQuery = subQueryFromExpression(expression),
          ruleNames = expression.getRuleNames(),
          tokenTypes = expression.getTokenTypes(),
          infiniteDescent = expression.isInfiniteDescent(),
          intermediateNodes = [],
          query = new Query(spread, subQuery, ruleNames, tokenTypes, maximumDepth, infiniteDescent, intermediateNodes);

    return query;
  }

  static fromSubExpression(subExpression) {
    const spread = subExpression.getSpread(),
          subQuery = subQueryFromSubExpression(subExpression),
          ruleNames = subExpression.getRuleNames(),
          tokenTypes = subExpression.getTokenTypes(),
          maximumDepth = Infinity,
          infiniteDescent = subExpression.isInfiniteDescent(),
          query = new Query(spread, subQuery, ruleNames, tokenTypes, maximumDepth, infiniteDescent);

    return query;
  }

  static fromExpressionString(expressionString, maximumDepth = Infinity) {
    let query = null;

    const expression = Expression.fromExpressionString(expressionString);

    if (expression !== null) {
      const spread = expression.getSpread(),
            subQuery = subQueryFromExpression(expression),
            ruleNames = expression.getRuleNames(),
            tokenTypes = expression.getTokenTypes(),
            infiniteDescent = expression.isInfiniteDescent();

      query = new Query(spread, subQuery, ruleNames, tokenTypes, maximumDepth, infiniteDescent);
    }

    return query;
  }
}

module.exports = Query;

function subQueryFromExpression(expression) {
  let subQuery = null;

  const subExpression = expression.getSubExpression();

  if (subExpression !== null) {
    const query = Query.fromSubExpression(subExpression);

    subQuery = query; ///
  }

  return subQuery;
}

function subQueryFromSubExpression(subExpression) {
  let subQuery = null;

  subExpression = subExpression.getSubExpression(); ///

  if (subExpression !== null) {
    const query = Query.fromSubExpression(subExpression);

    subQuery = query; ///
  }

  return subQuery;
}
