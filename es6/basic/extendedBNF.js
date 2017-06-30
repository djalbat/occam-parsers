'use strict';

const extendedBNF = `

  expression    ::= "(" expression ")" expression~

                  | term expression~ ;

  operator      ::= "+"

                  | "-"

                  | "/"

                  | "*" ;

  term          ::= naturalNumber ;

  naturalNumber ::= /\\d+/ ;

  expression~   ::= operator expression expression~

                  | ε ;

`;

module.exports = extendedBNF;
