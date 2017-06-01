'use strict';

const grammar = `

  productions     ::=  production+
  
  production      ::=  productionName "::=" rules [endOfLine]
  
  productionName  ::=  [name]

  rules           ::=  rule
  
  rule            ::=  part+
  
  part            ::=  regularExpression 
                
                    |  productionName  
                
                    |  wildcard 
  
                    |  endOfLine 
                
                    |  significantToken 
                
                    |  terminalSymbol 
                
                    |  OptionalPart 
                
                    |  oneOrMoreParts 
                
                    |  zeroOrMoreParts 
  
  
`;

module.exports = grammar;
