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

      nonTerminalPart          ::=  choiceOfParts

                                 |  sequenceOfParts

                                 |  ruleName continuationModifier?

                                 ;

      terminalPart             ::=  significantTokenType
  
                                 |  regularExpression
 
                                 |  stringLiteral
  
                                 |  backtick
  
                                 |  wildcard
  
                                 |  epsilon
  
                                 |  endOfLine

                                 |  noWhitespace
                              
                                 ;
                              
      sequenceOfParts          ::=  "(" part part+ ")" ;

      choiceOfParts            ::=  "(" partChoice ( "|" partChoice )+ ")" ;

      partChoice               ::=  part precedence? ;

      ruleName                 ::=  [name] ;

      significantTokenType     ::=  [type] ;

      regularExpression        ::=  [regular-expression] ;

      stringLiteral            ::=  [string-literal] ;

      precedence               ::=  "(" [number]? ")" ;
      
      endOfLine                ::=  "<END_OF_LINE>" ;
      
      backtick                 ::=  "\`" ;

      wildcard                 ::=  "." ;

      epsilon                  ::=  "ε" ;

      noWhitespace             ::=  "<NO_WHITESPACE>" ;                              

      quantifier               ::=  optionalQuantifier
 
                                 |  oneOrMoreQuantifier
  
                                 |  zeroOrMoreQuantifier
  
                                 ;

      opacityModifier          ::=  <NO_WHITESPACE>( "." | ".." );
      
      continuationModifier     ::=  <NO_WHITESPACE>"..." ;

      optionalQuantifier       ::=  <NO_WHITESPACE>"?" ;

      oneOrMoreQuantifier      ::=  <NO_WHITESPACE>"+" ;

      zeroOrMoreQuantifier     ::=  <NO_WHITESPACE>"*" ;

      error.                   ::=  . ;

`;

export default bnf;
