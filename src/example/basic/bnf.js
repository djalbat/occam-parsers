"use strict";

const bnf = `
  
expression ::= term... "." ;

term       ::= term_ term~* ;

term_      ::= ( "1" | "2" | "3" ) ;

term~term  ::= <NO_WHITESPACE> term (100)
    
             | "+" term (12)

             ;

term~      ::= term~term ;

`;

export default bnf;
