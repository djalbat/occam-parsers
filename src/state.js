"use strict";

export default class State {
  constructor(ruleMap, tokens, index) {
    this.ruleMap = ruleMap;
    this.tokens = tokens;
		this.index = index;
  }

  getRuleMap() {
    return this.ruleMap;
  }

  getTokens() {
    return this.tokens;
  }

	getIndex() {
		return this.index;
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

  setIndex(index) {
    this.index = index;
  }

  static fromTokensAndRuleMap(tokens, ruleMap) {
    const index = 0,
					state = new State(ruleMap, tokens, index);

    return state;
  }
}
