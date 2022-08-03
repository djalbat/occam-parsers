"use strict";

const bnf = `

      document                 ::=  ( rule | error )+ ;

      rule                     ::=  name ambiguousModifier? "::=" definitions ";" ;

      name                     ::=  [name] ;

      definitions              ::=  definition ( "|" definition )* ;

      definition               ::=  part+ ;
 
      part                     ::=  nonTerminalPart quantifier*

                                 |  terminalPart quantifier*
                              
                                 |  noWhitespacePart

                                 ;

      nonTerminalPart          ::=  choiceOfParts

                                 |  sequenceOfParts

                                 |  ruleName lookAheadModifier?

                                 ;

      terminalPart             ::=  significantTokenType
  
                                 |  regularExpression
 
                                 |  terminalSymbol
  
                                 |  endOfLine
  
                                 |  wildcard
  
                                 |  epsilon
  
                                 ;
                              
      noWhitespacePart         ::=  "<NO_WHITESPACE>" ;                              

      choiceOfParts            ::=  "(" part ( "|" part )+ ")" ;

      sequenceOfParts          ::=  "(" part part+ ")" ;

      ruleName                 ::=  [name] ;

      significantTokenType     ::=  [type] ;

      regularExpression        ::=  [regular-expression] ;

      terminalSymbol           ::=  [string-literal] ;

      endOfLine                ::=  "<END_OF_LINE>" ;

      wildcard                 ::=  "." ;

      epsilon                  ::=  "ε" ;

      quantifier               ::=  optionalQuantifier
 
                                 |  oneOrMoreQuantifier
  
                                 |  zeroOrMoreQuantifier
  
                                 ;

      ambiguousModifier        ::=  <NO_WHITESPACE>"!" ;

      lookAheadModifier        ::=  <NO_WHITESPACE>"..." ;

      optionalQuantifier       ::=  <NO_WHITESPACE>"?" ;

      oneOrMoreQuantifier      ::=  <NO_WHITESPACE>"+" ;

      zeroOrMoreQuantifier     ::=  <NO_WHITESPACE>"*" ;

      error                    ::=  . ;

`;

export default bnf;
