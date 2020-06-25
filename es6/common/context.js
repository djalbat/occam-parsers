"use strict";

import { DEFAULT_MAXIMUM_DEPTH } from "../constants";

export default class Context {
  constructor(ruleMap, tokens, index, depth, maximumDepth) {
    this.ruleMap = ruleMap;
    this.tokens = tokens;
		this.index = index;
		this.depth = depth;
    this.maximumDepth = maximumDepth;
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

  getDepth() {
    return this.depth;
  }

	getMaximumDepth() {
		return this.maximumDepth;
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

  isTooDeep() {
    const tooDeep = (this.depth > this.maximumDepth);

    return tooDeep;
  }

	backtrack(savedIndex) {
		this.index = savedIndex;  ///
	}

  setIndex(index) {
    this.index = index;
  }

  increaseDepth() {
    this.depth++;
  }

  decreaseDepth() {
    this.depth--;
  }

  static fromTokensAndRuleMap(tokens, ruleMap) {
    const index = 0,
					depth = 0,
					maximumDepth = DEFAULT_MAXIMUM_DEPTH,
					context = new Context(ruleMap, tokens, index, depth, maximumDepth);

    return context;
  }
}
