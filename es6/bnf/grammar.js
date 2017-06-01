'use strict';

const grammar = `

  productions           ::=  production+
  
  production            ::=  productionName "::=" rules [endOfLine]
  
  rules                 ::=  rule
  
  rule                  ::=  part+
  
  part                  ::=  productionName  
                
                          |  regularExpression 
                
                          |  significantTokenType 

                          |  terminalSymbol
                        
                          |  noWhitespace 
                
                          |  endOfLine 
  
  productionName        ::=  [name]

  regularExpression     ::=  [regularExpression]
  
  significantTokenType  ::=  [type]

  terminalSymbol        ::=  [string]
  
  noWhitespace          ::=  "<NO_WHITESPACE>"
  
  endOfLine             ::=  "<END_OF_LINE>"

`;

module.exports = grammar;
