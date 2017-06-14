'use strict';

const grammar = `


  productions              ::=  verticalSpace? production+
  
  production               ::=  productionName "::=" definitions
  
  definitions              ::=  definition
  
  definition               ::=  part+ verticalSpace?
  
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
                
  noWhitespacePart         ::=  "NO_WHITESPACE" part

  optionalPart             ::=  part "?"
                          
  zeroOrMoreParts          ::=  part "*"
                          
  oneOrMoreParts           ::=  part "+"
  
  groupOfParts             ::=  "(" part+ ")"
  
  productionName           ::=  [name]

  regularExpression        ::=  [regularExpression]
  
  significantTokenType     ::=  [type]

  terminalSymbol           ::=  [string]
  
  endOfLineSymbol          ::=  "<END_OF_LINE>"

  verticalSpace            ::=  [endOfLine]+
  

`;

module.exports = grammar;

/*

 expression               ::=  expression '+' term | term

 term                     ::=  naturalNumber

 naturalNumber            ::=  /\\d+/

*/
