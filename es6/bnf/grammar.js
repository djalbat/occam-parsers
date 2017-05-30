'use strict';

const grammar = `

  productions ::=  production+
  
  production  ::=  productionName "::=" rules <END_OF_LINE>
  
  rules       ::=  rule orThenRule*
  
  orThenRule  ::=  "|" rule
  
  rule        ::=  parts
  
  parts       ::=  part+
  
  part        ::=  wildcardPart 
  
                |  endOfLinePart 
                
                |  regularExpressionPart 
                
                |  significantTokenPart 
                
                |  terminalSymbolPart 
                
                |  OptionalPartPart 
                
                |  oneOrMorePartsPart 
                
                |  zeroOrMorePartsPart 
                
                |  productionNamePart  
  
  
`;

module.exports = grammar;
