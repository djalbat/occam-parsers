"use strict";

export default class State {
  constructor(index, tokens, ruleMap, precedence, startOfContent, NonTerminalNodeMap, defaultNonTerminalNode) {
		this.index = index;
    this.tokens = tokens;
    this.ruleMap = ruleMap;
    this.precedence = precedence;
    this.startOfContent = startOfContent;
    this.NonTerminalNodeMap = NonTerminalNodeMap;
    this.defaultNonTerminalNode = defaultNonTerminalNode;
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

  getStartOfContent() {
    return this.startOfContent;
  }

  getNonTerminalNode() {
    return this.NonTerminalNodeMap;
  }

  getDefaultNonTerminalNode() {
    return this.defaultNonTerminalNode;
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

  setStartOfContent(startOfContent) {
    this.startOfContent = startOfContent;
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
    const atStartOfContent = this.startOfContent ?
                              (this.index === 0):
                                false;

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

  NonTerminalNodeFromRuleName(ruleName) {
    const NonTerminalNode = Object.hasOwn(this.NonTerminalNodeMap, ruleName) ?
                              this.NonTerminalNodeMap[ruleName] :
                                this.defaultNonTerminalNode;

    return NonTerminalNode;
  }

  static fromTokensRuleMapStartOfContentNonTerminalNodeMapAndDefaultNonTerminalNode(tokens, ruleMap, startOfContent, NonTerminalNodeMap, defaultNonTerminalNode) {
    const index = 0,
          precedence = null,
					state = new State(index, tokens, ruleMap, precedence, startOfContent, NonTerminalNodeMap, defaultNonTerminalNode);

    return state;
  }
}
