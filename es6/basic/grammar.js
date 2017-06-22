'use strict';

const grammar = `

  expression    ::= "(" expression ")" expressionRR

                  | term expressionRR 
                  
                  ;

  operator      ::= "+"

                  | "-"

                  | "/"

                  | "*" 
                  
                  ;

  term          ::= naturalNumber ;

  naturalNumber ::= /\d+/ ;

  expressionRR  ::= operator expression expressionRR

                  | ε 
                  
                  ;

`;

module.exports = grammar;

/*

 expression               ::=  expression operator expression

                            |  "(" expression ")"

                            |  term

                            ;

 operator                 ::=  "+" | "-" | "/" | "*" ;

 term                     ::=  naturalNumber ;

 naturalNumber            ::=  /\\d+/ ;

 */