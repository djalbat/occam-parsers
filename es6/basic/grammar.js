'use strict';

const grammar = `

  expression               ::=  expression '+' term | term

  term                     ::=  naturalNumber
  
  naturalNumber            ::=  /\\d+/
    
`;

module.exports = grammar;

/*

  expression               ::=  term operatorThenTerm*
  
  operatorThenTerm         ::=  operator term
  
  operator                 ::=  '+' | '-' | '*' | '/'
  
  term                     ::=  naturalNumber | parenthesizedExpression
  
  naturalNumber            ::=  /\\d+/
  
  parenthesizedExpression  ::=  '(' expression ')'

*/
