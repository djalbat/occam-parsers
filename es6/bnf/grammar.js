'use strict';

const grammar = `

  productions     ::=  production*
  
  production      ::=  productionName "::=" rules <END_OF_LINE>
  
  productionName  ::=  [name]
  
  rules           ::=  rule orThenRule*
  
  orThenRule      ::=  "|" rule
  
  rule            ::=  parts
  
  parts           ::=  part+
  
  part            ::=  regularExpressionPart 
                
                    |  wildcardPart 
  
                    |  endOfLinePart 
                
                    |  significantTokenPart 
                
                    |  terminalSymbolPart 
                
                    |  OptionalPartPart 
                
                    |  oneOrMorePartsPart 
                
                    |  zeroOrMorePartsPart 
                
                    |  productionNamePart  
  
  
`;

module.exports = grammar;
