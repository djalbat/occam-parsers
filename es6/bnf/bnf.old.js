'use strict';

const bnf = `

    rules                ::= rule+ ;
    
    rule                 ::= ruleName "::=" definitions ";" ;
    
    definitions          ::= definition ( "|" definition )* ;
    
    definition           ::= part+ ;
    
    optionalPart         ::= part<NO_WHITESPACE>"?" ;
    
    zeroOrMoreParts      ::= part<NO_WHITESPACE>"*" ;
    
    oneOrMoreParts       ::= part<NO_WHITESPACE>"+" ;
    
    noWhitespacePart     ::= "<NO_WHITESPACE>" part ;
    
    groupOfParts         ::= "(" part+ ")" ;
    
    choiceOfParts        ::= "(" part ( "|" part )+ ")" ;
    
    part                 ::= noWhitespacePart
    
                           | optionalPart  
                              
                           | zeroOrMoreParts  
                              
                           | oneOrMoreParts  
                              
                           | groupOfParts  
                              
                           | choiceOfParts  
                              
                           | ruleName  
                              
                           | regularExpression 
                              
                           | significantTokenType 
                              
                           | terminalSymbol
                              
                           | endOfLine
                              
                           | epsilon
                              
                           | wildcard
                              
                           ;
                              
    ruleName             ::= [name] ;
    
    regularExpression    ::= [regularExpression] ;
    
    significantTokenType ::= [type] ;
    
    terminalSymbol       ::= [string] ;
    
    endOfLine            ::= "<END_OF_LINE>" ;
    
    epsilon              ::= "ε" ;
    
    wildcard             ::= "." ;
                         
                         
                         
                
                         
                         
                         
                  
                         
                         
                         
`;

module.exports = bnf;
