"use strict";

const bnf = `

          term  ::=  "1" "+" "2" "/" term    (1)
          
                  |  "3"                     (2)
                  
                  |  "1" "+" term            (4) 
          
                  |  "2" "/" "3"             (3)
                  
                  ;
  
`;

export default bnf;

