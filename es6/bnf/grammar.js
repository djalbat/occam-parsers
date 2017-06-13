'use strict';

const grammar = `

  productions           ::=  verticalSpace? production+
  
  production            ::=  productionName "::=" definitions
  
  definitions           ::=  definition ( "|" definition )*
  
  definition            ::=  part+ verticalSpace?
  
  part                  ::=  noWhitespacePart  
                
                          |  optionalPart  
                
                          |  zeroOrMoreParts  
                
                          |  oneOrMoreParts  
                
                          |  group  
                           
                          |  productionName  
                
                          |  regularExpression 
                
                          |  significantTokenType 

                          |  terminalSymbol
                
  noWhitespacePart      ::=  "<NO_WHITESPACE>" part

  optionalPart          ::=  part "?"
                          
  zeroOrMoreParts       ::=  part "*"
                          
  oneOrMoreParts        ::=  part "+"
                          
  group                 ::=  "(" part+ ")"
  
  productionName        ::=  [name]

  regularExpression     ::=  [regularExpression]
  
  significantTokenType  ::=  [type]

  terminalSymbol        ::=  [string]
  
  verticalSpace         ::=  [endOfLine]+
  
`;

module.exports = grammar;
