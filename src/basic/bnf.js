"use strict";

const bnf = `

    expressions  ::=  expression+ ;

    expression   ::=  start term... "." ;
    
    start        ::=  <START_OF_CONTENT> ;

    term         ::=  term_ term~* ;
    
    operator     ::=  "+"
    
                   |  "-"
    
                   |  "*"
    
                   ;
    
    number       ::=  /\\d+/ ;
    
    term_        ::=  "(" term ")"
    
                   |  number
    
                   ;
    
    term~term    ::=  operator term ;
    
    term~        ::=  term~term ;

`;

export default bnf;
