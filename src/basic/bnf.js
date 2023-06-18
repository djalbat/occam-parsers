"use strict";

const bnf = `

    term              ::= term_ term~* ;
    
    compoundTerm      ::= term_ term~* compoundTerm~term ;
    
    number            ::= /\\d+/ ;
    
    term_             ::= "(" term ")"
    
                        | number
    
                        ;
    
    term~compoundTerm ::= ε ;
    
    compoundTerm~term ::= ( 
    
                            "+" (1) | 
                            
                            "-" (2) | 
                            
                            "/" (3) | 
                            
                            "*" (4)
                          
                          ) term ;
    
    term~             ::= compoundTerm~term compoundTerm~* term~compoundTerm ;
    
    compoundTerm~     ::= term~compoundTerm term~* compoundTerm~term ;
  
`;

export default bnf;
