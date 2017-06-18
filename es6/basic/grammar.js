'use strict';

const grammar = `

 constructor     ::= constructorName

 constructorName ::= /\w+/
 
`;

module.exports = grammar;

/*



 A ::= B | C

 B ::= A "a" | C "b"

 C ::= C | D

 D ::= A | B "c"

 E ::= B | E | "d"

 F ::= "e"




 expression               ::=  "(" expression ")"

 | expression operator expression

 | term

 operator                 ::=  "+" | "-" | "/" | "*"

 term                     ::=  naturalNumber

 naturalNumber            ::=  /\\d+/


 */