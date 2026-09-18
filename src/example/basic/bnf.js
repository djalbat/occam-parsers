"use strict";

const bnf = `S ::= T... "." ;
    
A ::= . ;

B ::= . ;

T ::= . "(" (T) ")" (3)

    | A "u" B (2) 
    
    ;
`;

export default bnf;
