'use strict';

const DEFAULT_MAXIMUM_DEPTH = 99;

class Configuration {
  constructor(tokens, rules, index, depth, maximumDepth) {
    this.tokens = tokens;
		this.rules = rules;
		this.index = index;
		this.depth = depth;
    this.maximumDepth = maximumDepth;
  }
  
  getTokens() {
    return this.tokens;
  }

  getRules() {
    return this.rules;
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

  getNextSignificantToken(noWhitespace) {
		let nextSignificantToken = null;

  	const tokensLength = this.tokens.length;

  	while (this.index < tokensLength) {
  		const token = this.tokens[this.index++],
						tokenSignificant = token.isSignificant();

  		if (tokenSignificant) {
				nextSignificantToken = token;	///

				break;
			} else if (noWhitespace) {
  			const tokenWhitespaceToken = token.isWhitespaceToken();

  			if (tokenWhitespaceToken) {
  				break;
				}
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

  static fromTokensAndRules(tokens, rules) {
    const index = 0,
					depth = 0,
					maximumDepth = DEFAULT_MAXIMUM_DEPTH,
					configuration = new Configuration(tokens, rules, index, depth, maximumDepth);

    return configuration;
  }
}

module.exports = Configuration;
