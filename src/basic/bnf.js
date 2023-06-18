"use strict";

const bnf = `

    term  ::=  "1" "+" "2" "/" term    (2) 
    
            |  "3"                     (1)
            
            |  "1" "+" term            (1)
    
            |  "2" "/" "3"             (2)
    
            ;
  
`;

export default bnf;
