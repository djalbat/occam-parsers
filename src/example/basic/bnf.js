"use strict";

const bnf = `S ::= T... "." ;
    
A ::= T ( ) ;

B ::= . ;

C ::= . ;

T ::= . "(" (A) ")" (3)

    | B "u" C (2) 
    
    ;
`;

export default bnf;
