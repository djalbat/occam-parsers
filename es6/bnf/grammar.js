'use strict';

const grammar = `

  productions              ::=  verticalSpace? production+
  
  production               ::=  productionName "::=" definitions
  
  definitions              ::=  definition ( "|" definition )*
  
  definition               ::=  part+ verticalSpace?
  
  noWhitespacePart         ::=  "<NO_WHITESPACE>" part

  optionalPart             ::=  part<NO_WHITESPACE>"?"
                          
  zeroOrMoreParts          ::=  part<NO_WHITESPACE>"*"
                          
  oneOrMoreParts           ::=  part<NO_WHITESPACE>"+"
  
  groupOfParts             ::=  "(" part+ ")"
  
  part                     ::=  noWhitespacePart  
                
                             |  optionalPart  
                
                             |  zeroOrMoreParts  
                
                             |  oneOrMoreParts  
                
                             |  groupOfParts  
                           
                             |  productionName  
                
                             |  regularExpression 
                
                             |  significantTokenType 

                             |  terminalSymbol
                          
                             |  endOfLineSymbol
                
  productionName           ::=  [name]

  regularExpression        ::=  [regularExpression]
  
  significantTokenType     ::=  [type]

  terminalSymbol           ::=  [string]
  
  endOfLineSymbol          ::=  "<END_OF_LINE>"

  verticalSpace            ::=  <END_OF_LINE>+
  
`;

module.exports = grammar;
