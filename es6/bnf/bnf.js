"use strict";

const bnf = `

      document              ::=  ( rule | error )+ ;

      rule                  ::=  name "::=" definitions ";" ;

      name                  ::=  [name] ;

      definitions           ::=  definition ( "|" definition )* ;

      definition            ::=  part+ ;

      part                  ::=  nonTerminalPart quantifier*

                              |  terminalPart quantifier*
                              
                              |  noWhitespacePart

                              ;

      nonTerminalPart       ::=  choiceOfParts

                              |  groupOfParts

                              |  ruleName lookAheadModifier?

                              ;

      terminalPart          ::=  significantTokenType
 
                              |  regularExpression

                              |  terminalSymbol
 
                              |  endOfLine
 
                              |  epsilon
 
                              |  wildcard
 
                              ;
                              
      noWhitespacePart      ::=  "<NO_WHITESPACE>" ;                              

      choiceOfParts         ::=  "(" part ( "|" part )+ ")" ;

      groupOfParts          ::=  "(" part part+ ")" ;

      ruleName              ::=  [name] ;

      significantTokenType  ::=  [type] ;

      regularExpression     ::=  [regular-expression] ;

      terminalSymbol        ::=  [string-literal] ;

      endOfLine             ::=  "<END_OF_LINE>" ;

      epsilon               ::=  "ε" ; 

      wildcard              ::=  "." ;

      quantifier            ::=  optionalQuantifier

                              |  oneOrMoreQuantifier
 
                              |  zeroOrMoreQuantifier
 
                              ;

      lookAheadModifier     ::=  <NO_WHITESPACE>"!" ;

      optionalQuantifier    ::=  <NO_WHITESPACE>"?" ;

      oneOrMoreQuantifier   ::=  <NO_WHITESPACE>"+" ;

      zeroOrMoreQuantifier  ::=  <NO_WHITESPACE>"*" ;

      error                 ::=  . ;

`;

export default bnf;
