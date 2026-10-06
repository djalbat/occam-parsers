"use strict";

export default class State {
  constructor(index, tokens, parser) {
    this.index = index;
    this.tokens = tokens;
    this.parser = parser;
  }

  getIndex() {
    return this.index;
  }

  getTokens() {
    return this.tokens;
  }

  getParser() {
    return this.parser;
  }

  isEmpty() {
    const tokensLength = this.tokens.length,
          empty = (this.index === tokensLength);

    return empty;
  }

  findRule(ruleName) { return this.parser.findRule(ruleName); }

  NonTerminalNodeFromRuleName(ruleName) { return this.parser.NonTerminalNodeFromRuleName(ruleName); }

  isNextTokenWhitespaceToken() {
    const nextToken = this.tokens[this.index],
          nextTokenWhitespaceToken = nextToken.isWhitespaceToken();

    return nextTokenWhitespaceToken;
  }

  getNextSignificantToken() {
    let nextSignificantToken = null;

    let index = this.index;

    while (true) {
      const token = this.tokens[index],
            tokenSignificant = token.isSignificant();

      if (tokenSignificant) {
        nextSignificantToken = token; ///

        break;
      }

      index++;
    }

    return nextSignificantToken;
  }

  advance() {
    const nextSignificantToken = this.getNextSignificantToken();

    let index;

    index = this.tokens.indexOf(nextSignificantToken, this.index);

    index++;

    const tokensSignificant = areTokensSignificant(this.tokens, index);

    if (!tokensSignificant) {
      const tokensLength = this.tokens.length;

      index = tokensLength; ///
    }

    const state = new State(index, this.tokens, this.parser);

    return state;
  }

  static fromTokensAndParser(tokens, parser) {
    const tokensSignificant = areTokensSignificant(tokens),
          tokensLength = tokens.length,
          index = tokensSignificant ?
                    0 :
                      tokensLength, ///
    state = new State(index, tokens, parser);

    return state;
  }
}

function areTokensSignificant(tokens, index = 0) {
  let tokensSignificant = false;

  const length = tokens.length;

  while (index < length) {
    const token = tokens[index],
          tokenSignificant = token.isSignificant();

    if (tokenSignificant) {
      break;
    }

    index++;
  }

  if (index < length) {
    tokensSignificant = true;
  }

  return tokensSignificant;
}
