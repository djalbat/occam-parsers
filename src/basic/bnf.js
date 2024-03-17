"use strict";

const bnf = `expression ::= term... "." ;

term       ::= term_ term~* ;

operator   ::= "+"

             | "-"

             | "/"

             | "*"

             ;

number     ::= /\\d+/ ;

term_      ::= "(" term ")"

             | number

             ;

term~term  ::= operator term ;

term~      ::= term~term ;

`;

export default bnf;
