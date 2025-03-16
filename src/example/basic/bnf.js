"use strict";

const bnf = `
  
  S   ::= F... <END_OF_LINE> ;
  
  A   ::= A_ A~*
  
        | F_ F~* E~F E~* A~E
  
        ;
  
  E   ::= F_ F~* E~F
  
        | A_ A~* F~A F~* E~F
  
        ;
  
  T   ::= "n" ;
  
  F   ::= F_ F~*
  
        | A_ A~* F~A
  
        ;
  
  F_  ::= "(" A ")" ;
  
  A_  ::= T ;
  
  F~A ::= "+" A ;
  
  A~E ::= ε ;
  
  E~F ::= ε ;
  
  F~  ::= E~F E~* A~E A~* F~A ;
  
  A~  ::= F~A F~* E~F E~* A~E ;
  
  E~  ::= A~E A~* F~A F~* E~F ;

`;

export default bnf;
