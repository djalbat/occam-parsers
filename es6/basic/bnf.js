'use strict';

const bnf = `


  statement     ::= body ";" ;
  
  body          ::= expression | nonsense ;

  nonsense      ::= ( term | operator )+ ;

  expression    ::= "(" expression ")" expression~

                  | term expression~ 
                  
                  ;

  operator      ::= "+" | "-" | "/" | "*" ;

  term          ::= naturalNumber ;

  naturalNumber ::= /\\d+/ ;

  expression~   ::= operator expression expression~

                  | ε 
                  
                  ;


`;

module.exports = bnf;
