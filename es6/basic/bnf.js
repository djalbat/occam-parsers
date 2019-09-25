'use strict';

const bnf = `basicName ::= <NO_WHITESPACE>"blah" ;`;

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
