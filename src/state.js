"use strict";

export default class State {
  constructor(index, tokens, ruleMap, precedence) {
		this.index = index;
    this.tokens = tokens;
    this.ruleMap = ruleMap;
    this.precedence = precedence;
  }

  getIndex() {
    return this.index;
  }

  getTokens() {
    return this.tokens;
  }

  getRuleMap() {
    return this.ruleMap;
  }

  getPrecedence() {
    return this.precedence;
  }

  setIndex(index) {
    this.index = index;
  }

  setTokens(tokens) {
    this.tokens = tokens;
  }

  setRuleMap(ruleMap) {
    this.ruleMap = ruleMap;
  }

  setPrecedence(precedence) {
    this.precedence = precedence;
  }

  getSavedPrecedence() {
    const savedPrecedence = this.precedence;

    return savedPrecedence;
  }

  getSavedIndex() {
    const savedIndex = this.index; ///
  
    return savedIndex;
  }

  getNextToken() {
    let nextToken = null;

    const tokensLength = this.tokens.length;

    if (this.index < tokensLength) {
      nextToken = this.tokens[this.index++];
    }

    return nextToken;
  }

  isAtStartOfContent() {
    const atStartOfContent = (this.index === 0);

    return atStartOfContent;
  }

  getNextSignificantToken() {
		let nextSignificantToken = null;

  	const tokensLength = this.tokens.length;

  	while (this.index < tokensLength) {
  		const token = this.tokens[this.index++],
						tokenSignificant = token.isSignificant();

  		if (tokenSignificant) {
  		  const significantToken = token; ///

				nextSignificantToken = significantToken;	///

				break;
			}
  	}

		return nextSignificantToken;
  }

  isNextTokenWhitespaceToken() {
    let nextTokenWhitespaceToken = false;

    const tokensLength = this.tokens.length;

    if (this.index < tokensLength) {
      const nextToken = this.tokens[this.index];

      nextTokenWhitespaceToken = nextToken.isWhitespaceToken();
    }

    return nextTokenWhitespaceToken;
  }

	backtrack(savedIndex) {
		this.index = savedIndex;  ///
	}

  resetPrecedence(savedPrecedence) {
    this.precedence = savedPrecedence;  ///
  }

  static fromTokensAndRuleMap(Class, tokens, ruleMap, ...remainingArguments) {
    if (ruleMap === undefined) {
      ruleMap = tokens; ///

      tokens = Class; ///

      Class = State;
    }

    const index = 0,
          precedence = null,
					state = new Class(index, tokens, ruleMap, precedence, ...remainingArguments);

    return state;
  }
}
