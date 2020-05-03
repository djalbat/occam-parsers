"use strict";

const bnf = `

  expression  ::= expression_ operator expression expression~*

                | expression_

                ;

  operator    ::= "+"

                | "-"

                | "/"

                | "*"

                ;

  term        ::= /\\d+/ ;

  expression_ ::= "(" expression ")"

                | term

                ;

  expression~ ::= operator expression ;
  
`;

module.exports = bnf;
