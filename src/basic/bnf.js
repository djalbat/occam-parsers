"use strict";

const bnf = `

              term  ::=  "1" 
              
                         ( 
                          
                           plus2DividedBy           (1) 
                            
                           | 
                            
                           plus                     (4) 
                          
                         ) 
                          
                         term    
              
                      |  "3"                        (2)                      

                      |  "2" "/" "3"                (3)
                      
                      ;
                      
    plus2DividedBy  ::=  "+" "2" "/" ;         
    
              plus  ::=  "+" ;         
      
`;

export default bnf;

