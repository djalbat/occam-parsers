'use strict';

const bnf = `


    document              ::= ( rule | error )+ ;
    
    rule                  ::= name "::=" definitions ";" ;
    
    definitions           ::= definition ( "|" definition )* ;
    
    definition            ::= part+ ;
    

    

    

    

    

    

    
    part                  ::= "<NO_WHITESPACE>" part part~
    

    

    


                            | "(" part part+ ")" part~

                            | "(" part ( "|" part )+ ")" part~
 
                            | ruleName part~
     
                            | regularExpression part~
     
                            | significantTokenType part~
     
                            | terminalSymbol part~
     
                            | endOfLine part~
     
                            | epsilon part~
     
                            | wildcard part~ 
                             
                            ;
    
    name                  ::= [name] ;
    
    ruleName              ::= [name] ;

    regularExpression     ::= [regular-expression] ;
    
    significantTokenType  ::= [type] ;
    
    terminalSymbol        ::= [string-literal] ;
    
    endOfLine             ::= "<END_OF_LINE>" ;
    
    epsilon               ::= "ε" ;
    
    wildcard              ::= "." ;
    
    part~                 ::= <NO_WHITESPACE>"?" part~
    
                            | <NO_WHITESPACE>"*" part~
     
                            | <NO_WHITESPACE>"+" part~
     
                            | <NO_WHITESPACE>"!" part~
     
                            | ε 
                           
                            ;
       
    error                 ::= . ;
                                                 
`;

module.exports = bnf;
