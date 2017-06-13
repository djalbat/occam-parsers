'use strict';

const grammar = `

  productions           ::=  verticalSpace? production+
  
  production            ::=  productionName "::=" definitions
  
  definitions           ::=  definition ( "|" definition )*
  
  definition            ::=  part+ verticalSpace?
  
  part                  ::=  optionalPart  
                
                          |  zeroOrMoreParts  
                
                          |  oneOrMoreParts  
                
                          |  group  
                           
                          |  productionName  
                
                          |  regularExpression 
                
                          |  significantTokenType 

                          |  terminalSymbol
                        
                          |  noWhitespace 
                
                          |  endOfLine
                
  optionalPart          ::=  part<NO_WHITESPACE>"?"
                          
  zeroOrMoreParts       ::=  part<NO_WHITESPACE>"*"
                          
  oneOrMoreParts        ::=  part<NO_WHITESPACE>"+"
                          
  group                 ::=  "(" part+ ")"
  
  productionName        ::=  [name]

  regularExpression     ::=  [regularExpression]
  
  significantTokenType  ::=  [type]

  terminalSymbol        ::=  [string]
  
  verticalSpace         ::=  [endOfLine]+
  
`;

module.exports = grammar;
