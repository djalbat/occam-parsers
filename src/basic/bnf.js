"use strict";

const bnf = `

    expression  ::=  term... "." ;

          term  ::=  "1" "+" "2" "/" term    (2)
          
                  |  "3"                     (1)
                  
                  |  "1" "+" term            (3) 
          
                  |  "2" "/" "3"             (4)
                  
                  ;
  
`;

export default bnf;

