"use strict";

const bnf = `
  
    S   ::= A... <END_OF_LINE> ;
    
    A   ::= A_ A~*
    
          | B_ B~* A~B
    
          ;
    
    B   ::= B_ B~*
    
          | A_ A~* B~A
    
          ;
    
    B_  ::= "d" ;
    
    A_  ::= "e" ;
    
    B~B ::= "f" ;
    
    A~B ::= "g" ;
    
    B~A ::= "h" ;
    
    B~  ::= B~B
    
          | A~B A~* B~A
    
          ;
    
    A~  ::= B~A B~* A~B ;

`;

export default bnf;
