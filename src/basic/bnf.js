"use strict";

const bnf = `

     expression ::= term... ;

          term  ::=  "1"
      
                     (
      
                       ( "+" "2" "/" )   (4)
      
                       |
      
                       "+"               (0)
      
                     )
      
                     term
      
                  |  argument            ( )
      
                  |  "3"                 (3)
      
                  ;
                  
     argument ::= "2" "/" "3"            (1)  ;
                  
    
`;

export default bnf;
