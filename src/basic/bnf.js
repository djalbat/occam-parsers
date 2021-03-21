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

  term        ::= /\d+/ ;

  expression_ ::= "(" expression ")"

                | term

                ;

  expression~ ::= operator expression ;
  
`;

export default bnf;