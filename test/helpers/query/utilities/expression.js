"use strict";

const ExpressionLexer = require("../expression/lexer"),
      ExpressionParser = require("../expression/parser");

const expressionLexer = ExpressionLexer.fromNothing(),
      expressionParser = ExpressionParser.fromNothing();

function nodeFromExpressionString(expressionString) {
  const content = expressionString, ///
        tokens = tokensFromContent(content),
        node = nodeFromTokens(tokens);

  return node;
}

function tokensFromContent(content) {
  const lexer = expressionLexer,  ///
        tokens = lexer.tokenise(content);

  return tokens;
}

function nodeFromTokens(tokens) {
  const parser = expressionParser,  ///
        node = parser.parse(tokens);

  return node;
}

module.exports = {
  nodeFromExpressionString,
  tokensFromContent,
  nodeFromTokens
};
