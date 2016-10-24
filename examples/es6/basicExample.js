'use strict';

var lexers = require('../../es6/occam-lexers'),
    BasicLexer = lexers.BasicLexer;

var Preprocessor = require ('../../es6/preprocessor');

var Example = require('./example');

var grammar = `

  expr                       ::= term operatorThenTerm*
  
  operatorThenTerm           ::= operator term
  
  operator                   ::= + | - | * | /
  
  term                       ::= naturalNumber
  
                               | parenthesizedExpr
  
  naturalNumber              ::= /\d+/
  
  parenthesizedExpr          ::= ( expr )

`;

var terminalSymbolsRegExpPattern = `\\+|\\-|\\*|\\/|\\(|\\)|\\d+`;

class BasicExample extends Example {
  constructor() {
    var preprocessor = new Preprocessor();
    
    super(BasicLexer, preprocessor, grammar, terminalSymbolsRegExpPattern);
  }
  
  run() {
    super.setGrammar(grammar);
    
    super.setTerminalSymbolsRegExpPattern(terminalSymbolsRegExpPattern);
    
    super.run();
  }
}

module.exports = BasicExample;
