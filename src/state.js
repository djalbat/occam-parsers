"use strict";

export default class State {
  constructor(parser, tokens, index, branches) {
    this.parser = parser;
    this.tokens = tokens;
    this.index = index;
    this.branches = branches;
  }

  getParser() {
    return this.parser;
  }

  getTokens() {
    return this.tokens;
  }

  getIndex() {
    return this.index;
  }

  getBranches() {
    return this.branches;
  }

  isBranching() {
    const branching = (this.branches > 0);

    return branching;
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

    const branches = this.branches,
          state = new State(this.parser, this.tokens, index, branches);

    return state;
  }

  branch() {
    const index = this.index,
          branches = this.branches + 1,
          state = new State(this.parser, this.tokens, index, branches);

    return state;
  }

  prune() {
    const index = this.index,
          branches = this.branches - 1,
          state = new State(this.parser, this.tokens, index, branches);

    return state;
  }

  static fromTokensAndParser(tokens, parser) {
    const tokensSignificant = areTokensSignificant(tokens),
          tokensLength = tokens.length,
          index = tokensSignificant ?
                    0 :
                      tokensLength, ///
          branches = 0,
          state = new State(parser, tokens, index, branches);

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
