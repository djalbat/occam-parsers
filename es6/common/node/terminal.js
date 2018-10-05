'use strict';

const TerminalNodeParseTree = require('../parseTree/terminalNode');

class TerminalNode {
  constructor(token) {
    this.token = token;
  }

  getToken() {
    return this.token;
  }

  getFirstToken() {
    const firstToken = this.token;  ///

    return firstToken;
  }

  getLastToken() {
    const lastToken = this.token;  ///

    return lastToken;
  }

  isEpsilonNode() {
    const epsilonNode = false;

    return epsilonNode;
  }

  isTerminalNode() {
    const terminalNode = true;
    
    return terminalNode;
  }

  isNonTerminalNode() {
    const nonTerminalNode = false;

    return nonTerminalNode;
  }

  getContent() { return this.token.getContent(); }

  asParseTree(tokens) {
    const terminalNode = this,  ///
          terminalNodeParseTree = TerminalNodeParseTree.fromTerminalNodeAndTokens(terminalNode, tokens),
          parseTree = terminalNodeParseTree;  ///

    return parseTree;
  }

  static fromToken(Class, token) {
    if (token === undefined) {
      token = Class;
      Class = TerminalNode
    }

    const terminalNode = new Class(token);
    
    return terminalNode;
  }
}

module.exports = TerminalNode;
