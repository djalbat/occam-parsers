"use strict";

import { EMPTY_STRING, TRANSPARENT_PRECEDENCE } from "../constants";

export function stringFromStringNonTermionalNodeAndTokens(string, nonTerminalNode, tokens) {
  const node = nonTerminalNode, ///
        precedence = precedenceFromNode(node),
        lineIndexes = lineIndexesFromNonTerminalNodeAndTokens(nonTerminalNode, tokens);

  string = `${string}${lineIndexes}${precedence}`;

  return string;
}

export function stringFromStringTerminalNodeAndTokens(string, terminalNode, tokens) {
  const node = terminalNode,  ///
        lineIndex = lineIndexFromTerminalNodeAndTokens(terminalNode, tokens);

  string = `${string}${lineIndex}`;

  return string;
}

function lineIndexesFromNonTerminalNodeAndTokens(nonTerminalNode, tokens) {
  let lineIndexes;

  const firstSignificantTokenIndex = nonTerminalNode.getFirstSignificantTokenIndex(tokens),
        lastSignificantTokenIndex = nonTerminalNode.getLastSignificantTokenIndex(tokens),
        firstLineIndex = lineIndexFromTokenIndexAndTokens(firstSignificantTokenIndex, tokens),
        lastLineIndex = lineIndexFromTokenIndexAndTokens(lastSignificantTokenIndex, tokens);

  if (firstLineIndex === lastLineIndex) {
    const lineIndex = firstLineIndex; ///

    if (lineIndex === null) {
      lineIndexes = EMPTY_STRING;
    } else {
      lineIndexes = ` [${lineIndex}]`;
    }
  } else {
    if (false) {
      ///
    } else if (firstLineIndex === null) {
      lineIndexes = ` [${lastLineIndex}]`;
    } else if (lastLineIndex === null) {
      lineIndexes = ` [${firstLineIndex}]`;
    } else {
      lineIndexes = ` [${firstLineIndex}-${lastLineIndex}]`
    }
  }

  return lineIndexes;
}

function lineIndexFromTerminalNodeAndTokens(terminalNode, tokens) {
  let lineIndex;

  const significantTokenIndex = terminalNode.getSignificantTokenIndex(tokens);

  lineIndex = lineIndexFromTokenIndexAndTokens(significantTokenIndex, tokens);

  if (lineIndex === null) {
    lineIndex = EMPTY_STRING;
  } else {
    lineIndex = ` [${lineIndex}]`;
  }

  return lineIndex;
}

function lineIndexFromTokenIndexAndTokens(tokenIndex, tokens) {
  let lineIndex = null;

  if (tokenIndex !== null) {
    lineIndex = 0;

    const start = 0,
          end = tokenIndex;

    tokens = tokens.slice(start, end);  ///

    tokens.forEach((token) => {
      const tokenEndOfLineToken = token.isEndOfLineToken();

      if (tokenEndOfLineToken) {
        lineIndex++;
      }
    });
  }

  return lineIndex;
}

function precedenceFromNode(node) {
  let precedence = node.getPrecedence();

  if (false) {
    ///
  } else if (precedence === null) {
    precedence = EMPTY_STRING;
  }else if (precedence === TRANSPARENT_PRECEDENCE) {
    precedence = ` ( )`;
  } else {
    precedence = ` (${precedence})`;
  }

  return precedence;
}
