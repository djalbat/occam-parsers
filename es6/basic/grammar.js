'use strict';

const grammar = `

 A ::= B | C

 B ::= A "a" | C "b"

 C ::= C | D

 D ::= A | B "c"

 E ::= B | E | "d"

 F ::= "e"
  
`;

module.exports = grammar;

/*



 expression               ::=  "(" expression ")"

 | expression operator expression

 | term

 operator                 ::=  "+" | "-" | "/" | "*"

 term                     ::=  naturalNumber

 naturalNumber            ::=  /\\d+/


 */