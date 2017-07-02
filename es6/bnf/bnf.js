'use strict';

const bnf = `

    rules                ::= rule+ ;
    
    rule                 ::= ruleName "::=" definitions ";" ;
    
    definitions          ::= definition ( "|" definition )* ;
    
    definition           ::= part+ ;
    

    

    

    

    

    

    
    part                 ::= "<NO_WHITESPACE>" part part~
    

    

    


                           | "(" part+ ")" part~

                           | "(" part ( "|" part )+ ")" part~

                           | ruleName part~
    
                           | regularExpression part~
    
                           | significantTokenType part~
    
                           | terminalSymbol part~
    
                           | endOfLine part~
    
                           | epsilon part~
    
                           | wildcard part~ 
                           
                           ;
    
    ruleName             ::= [name] ;
    
    regularExpression    ::= [regularExpression] ;
    
    significantTokenType ::= [type] ;
    
    terminalSymbol       ::= [string] ;
    
    endOfLine            ::= "<END_OF_LINE>" ;
    
    epsilon              ::= "ε" ;
    
    wildcard             ::= "." ;
    
    part~                ::= <NO_WHITESPACE>"?" part~
    
                           | <NO_WHITESPACE>"*" part~
    
                           | <NO_WHITESPACE>"+" part~
    
                           | ε 
                           
                           ;
                                                 
`;

module.exports = bnf;
