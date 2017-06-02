'use strict';

const grammar = `

  expression               ::=  term expression'

  expression'              ::=  '+' term expression' | ε

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
