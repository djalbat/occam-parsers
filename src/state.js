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

  static fromTokensAndRuleMap(tokens, ruleMap) {
    const index = 0,
          precedence = null,
					state = new State(index, tokens, ruleMap, precedence);

    return state;
  }
}
