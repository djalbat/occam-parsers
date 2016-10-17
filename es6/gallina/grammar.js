'use strict';

var grammar = `

  var expr                   ::= term operatorThenTerm*
  
  operatorThenTerm           ::= operator term
  
  operator                   ::= + | - | * | /
  
  term                       ::= naturalNumber
  
                               | parenthesizedExpr
  
  naturalNumber              ::= /\d+/
  
  parenthesizedExpr          ::= ( expr )
  
`;

module.exports = grammar;
