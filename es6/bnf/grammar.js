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
                          
                          |  endOfLineSymbol
                
  noWhitespacePart      ::=  "<NO_WHITESPACE>" part

  optionalPart          ::=  part<NO_WHITESPACE>"?"
                          
  zeroOrMoreParts       ::=  part<NO_WHITESPACE>"*"
                          
  oneOrMoreParts        ::=  part<NO_WHITESPACE>"+"
                          
  group                 ::=  "(" part+ ")"
  
  productionName        ::=  [name]

  regularExpression     ::=  [regularExpression]
  
  significantTokenType  ::=  [type]

  terminalSymbol        ::=  [string]
  
  endOfLineSymbol       ::=  "<END_OF_LINE>"

  verticalSpace         ::=  [endOfLine]+
  
`;

module.exports = grammar;
