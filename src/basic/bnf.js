"use strict";

const bnf = `

    term              ::= term_ term~* ;
    
    compoundTerm      ::= term_ term~* compoundTerm~term ;
    
    number            ::= /\\d+/ ;
    
    term_             ::= "(" term ")"
    
                        | number
    
                        ;
    
    term~compoundTerm ::= ε ;
    
    compoundTerm~term ::= "+" term (1) 
    
                        | "-" term (2) 
                        
                        | "/" term (3) 
                        
                        | "*" term (4)
                          
                        ;
    
    term~             ::= compoundTerm~term compoundTerm~* term~compoundTerm ;
    
    compoundTerm~     ::= term~compoundTerm term~* compoundTerm~term ;
  
`;

export default bnf;
