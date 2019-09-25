'use strict';

const bnf = `basicName  ::=  basicPart ;`;

module.exports = bnf;

/*

  expression    ::= expression_ expression~

                  | expression_

                  ;

  expression_   ::= "(" expression ")"

                  | term

                  ;

  expression~   ::= operator expression expression~? ;

  operator      ::= "+"

                  | "-"

                  | "/"

                  | "*"

                  ;

  term          ::= naturalNumber ;

  naturalNumber ::= /\d+/ ;

 */
