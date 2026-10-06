"use strict";

const bnf = `

      document                 ::=  ( rule | error )+ ;

      rule                     ::=  name opacityModifier? "::=" definitions ";" ;

      name                     ::=  [name] ;

      definitions              ::=  definition ( "|" definition )* ;

      definition               ::=  part+ precedence? ;
 
      part                     ::=  nonTerminalPart quantifier*

                                 |  terminalPart quantifier*

                                 ;

      nonTerminalPart          ::=  isolatedPart

                                 |  choiceOfParts

                                 |  sequenceOfParts

                                 |  ruleName branchingModifier?

                                 ;

      terminalPart             ::=  significantTokenType
  
                                 |  regularExpression
 
                                 |  stringLiteral
  
                                 |  wildcard
  
                                 |  epsilon
  
                                 |  cut
  
                                 |  endOfLine

                                 |  noWhitespace
                              
                                 ;
                              
      sequenceOfParts          ::=  "(" part part+ ")" ;

      choiceOfParts            ::=  "(" partChoice ( "|" partChoice )+ ")" ;

      isolatedPart             ::=  "(" part ")" ;

      partChoice               ::=  part precedence? ;

      ruleName                 ::=  [name] ;

      significantTokenType     ::=  [type] ;

      regularExpression        ::=  [regular-expression] ;

      stringLiteral            ::=  [string-literal] ;

      precedence               ::=  "(" [integer]? ")" ;
      
      endOfLine                ::=  "<END_OF_LINE>" ;
      
      wildcard                 ::=  "." ;

      epsilon                  ::=  "ε" ;

      cut                      ::=  "\`" ;

      noWhitespace             ::=  "<NO_WHITESPACE>" ;                              

      quantifier               ::=  optionalQuantifier
 
                                 |  oneOrMoreQuantifier
  
                                 |  zeroOrMoreQuantifier
  
                                 ;

      opacityModifier          ::=  <NO_WHITESPACE>( "." | ".." );
      
      branchingModifier        ::=  <NO_WHITESPACE>"..." ;

      optionalQuantifier       ::=  <NO_WHITESPACE>"?" ;

      oneOrMoreQuantifier      ::=  <NO_WHITESPACE>"+" ;

      zeroOrMoreQuantifier     ::=  <NO_WHITESPACE>"*" ;

      error.                   ::=  . ;

`;

export default bnf;
