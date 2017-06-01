'use strict';

const grammar = `

  productions           ::=  production+
  
  production            ::=  productionName "::=" rules [endOfLine]
  
  rules                 ::=  rule
  
  rule                  ::=  part+
  
  part                  ::=  group  
                
                          |  productionName  
                
                          |  regularExpression 
                
                          |  significantTokenType 

                          |  terminalSymbol
                        
                          |  noWhitespace 
                
                          |  endOfLine
                           
  group                 ::=  "(" rules ")"
  
  productionName        ::=  [name]

  regularExpression     ::=  [regularExpression]
  
  significantTokenType  ::=  [type]

  terminalSymbol        ::=  [string]
  
  noWhitespace          ::=  "<NO_WHITESPACE>"
  
  endOfLine             ::=  "<END_OF_LINE>"

`;

module.exports = grammar;
