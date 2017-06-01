'use strict';

const grammar = `

  productions        ::=  production+
  
  production         ::=  productionName "::=" rules [endOfLine]
  
  rules              ::=  rule
  
  rule               ::=  part+
  
  part               ::=  productionName  
                
                       |  regularExpression 
                
                       |  terminalSymbol 
                
                       |  wildcard 
  
                       |  endOfLine 
                
                       |  significantToken 
                
                       |  OptionalPart 
                
                       |  oneOrMoreParts 
                
                       |  zeroOrMoreParts 
  
  productionName     ::=  [name]

  regularExpression  ::=  [regularExpression]
  
`;

module.exports = grammar;
