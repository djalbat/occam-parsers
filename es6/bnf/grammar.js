'use strict';

const grammar = `

  productions        ::=  production+
  
  production         ::=  productionName "::=" rules [endOfLine]
  
  rules              ::=  rule
  
  rule               ::=  part+
  
  part               ::=  productionName  
                
                       |  regularExpression 
                
                       |  terminalSymbol
                        
                       |  noWhitespace 
                
                       |  endOfLine 
  
  productionName     ::=  [name]

  regularExpression  ::=  [regularExpression]

  terminalSymbol     ::=  [string]
  
  noWhitespace       ::=  "<NO_WHITESPACE>"
  
  endOfLine          ::=  "<END_OF_LINE>"

`;

module.exports = grammar;
