"use strict";

const bnf = `
  
S   ::= T... "." ;

T   ::= T_ T~* ;

T_  ::= ( "1" | "2" | "3" | "4" )
    
      | "1" "+" T (12)

      ;

T~T ::= <NO_WHITESPACE> T (100) ;

T~  ::= T~T ;

`;

export default bnf;
