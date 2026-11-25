"use strict";

const bnf = `

    expression       ::=  path spread? subExpression?   
    
                       |  error+ 
                                 
                       ;
  
    path             ::=  "/" infiniteDescent? selectors ;
    
    subExpression    ::=  path spread? subExpression?;

    infiniteDescent  ::=  "/" ;
    
    selectors        ::=  selector ( "|" selector )* ;

    spread           ::=  unique
    
                       |  "[" 

                          ( 
                            
                            ( startIndex "..." endIndex ) 
                            
                            | 
                            
                            ( startIndex "..." ) 
                            
                            | 
                            
                            ( "..." endIndex )
                             
                            | 
                            
                            index 
                            
                          )  
                          
                          "]" 
                          
                       ;

    selector         ::=  ruleName | tokenType ;
                       
    ruleName         ::=  [name] | "*" ;
                       
    tokenType        ::=  "@"<NO_WHITESPACE>( [name] | "*" ) ;
                       
    startIndex       ::=  [number] ;
                       
    endIndex         ::=  [number] ;
                       
    index            ::=  [number] ;
                       
    unique           ::=  "!" ;
                       


    error.           ::=  . ;
    
`;

module.exports = bnf;
