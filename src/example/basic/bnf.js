"use strict";

const bnf = `
  
  S   ::= A... <END_OF_LINE> ;
  
  A   ::= T ":" . ;
  
  T   ::= T_ T~* ;
  
  B   ::= T_ T~* B~T ;
  
  V   ::= . ;
  
  T_  ::= V ;
  
  T~B ::= ":" B ;
  
  B~T ::= ε ;
  
  T~  ::= B~T B~* T~B ;
  
  B~  ::= T~B T~* B~T ;

`;

export default bnf;
