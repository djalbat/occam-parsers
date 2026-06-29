"use strict";

const bnf = `S   ::= T... "." ;

T   ::= T_ T~* ;

A   ::= "\`" .* "\`" ;

T_  ::= .

      ;

T~T ::= <NO_WHITESPACE> A ;

T~  ::= T~T ;
          
`;

export default bnf;
