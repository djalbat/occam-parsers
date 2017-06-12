'use strict';

const grammar = `

  productions           ::=  production+
  
  production            ::=  productionName "::=" definitions [endOfLine]
  
  definitions           ::=  definition
  
  definition            ::=  part+
  
  part                  ::=  group  
                
                          |  optionalPart  
                
                          |  productionName  
                
                          |  regularExpression 
                
                          |  significantTokenType 

                          |  terminalSymbol
                        
                          |  noWhitespace 
                
                          |  endOfLine
                           
  optionalPart          ::=  group "?" optionalPart~

                          |  productionName "?" optionalPart~
        
                          |  regularExpression "?" optionalPart~
        
                          |  significantTokenType "?" optionalPart~
        
                          |  terminalSymbol "?" optionalPart~
        
                          |  noWhitespace "?" optionalPart~
        
                          |  endOfLine "?" optionalPart~
                          
  optionalPart~         ::=  "?" optionalPart~ | ε
                          
  group                 ::=  "(" definitions ")"
  
  productionName        ::=  [name]

  regularExpression     ::=  [regularExpression]
  
  significantTokenType  ::=  [type]

  terminalSymbol        ::=  [string]
  
  noWhitespace          ::=  "<NO_WHITESPACE>"
  
  endOfLine             ::=  "<END_OF_LINE>"

`;

module.exports = grammar;
