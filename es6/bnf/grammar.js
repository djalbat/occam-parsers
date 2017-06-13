'use strict';

const grammar = `

  productions           ::=  verticalSpace? production+
  
  production            ::=  productionName "::=" definitions
  
  definitions           ::=  definition
  
  definition            ::=  part+ verticalSpace?
  
  part                  ::=  optionalPart  
                
                          |  group  
                
                          |  productionName  
                
                          |  regularExpression 
                
                          |  significantTokenType 

                          |  terminalSymbol
                        
                          |  noWhitespace 
                
                          |  endOfLine
                           
  optionalPart          ::=  optionalPart "?"
                          
  group                 ::=  "(" definitions ")"
  
  productionName        ::=  [name]

  regularExpression     ::=  [regularExpression]
  
  significantTokenType  ::=  [type]

  terminalSymbol        ::=  [string]
  
  verticalSpace         ::=  [endOfLine]+

  noWhitespace          ::=  "<NO_WHITESPACE>"
  
  endOfLine             ::=  "<END_OF_LINE>"
  
`;

module.exports = grammar;
