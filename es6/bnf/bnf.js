'use strict';

module.exports = `

      document             ::=  ( rule | error )+ ;

      rule                 ::=  name "::=" definitions ";" ;

      name                 ::=  [name] ;

      definitions          ::=  definition ( "|" definition )* ;

      definition           ::=  part+ ;

      part                 ::=  nonTerminalPart modifier*

                             |  "<NO_WHITESPACE>"? terminalPart

                             ;

      nonTerminalPart      ::=  choiceOfParts

                             |  groupOfParts

                             |  ruleName lookAheadModifier?

                             ;

      terminalPart         ::=  regularExpression

                             |  significantTokenType

                             |  terminalSymbol

                             |  endOfLine

                             |  epsilon

                             |  wildcard

                             ;

      choiceOfParts        ::=  "(" part ( "|" part )+ ")" ;

      groupOfParts         ::=  "(" part part+ ")" ;

      ruleName             ::=  [name] ;

      regularExpression    ::=  [regular-expression] ;

      significantTokenType ::=  [type] ;

      terminalSymbol       ::=  [string-literal] ;

      endOfLine            ::=  "<END_OF_LINE>" ;

      epsilon              ::=  "ε" ;

      wildcard             ::=  "." ;

      modifier             ::=  optionalModifier

                             |  zeroOrMoreModifier

                             |  oneOrMoreModifier

                             ;

      optionalModifier     ::=  <NO_WHITESPACE>"?" ;

      zeroOrMoreModifier   ::=  <NO_WHITESPACE>"*" ;

      oneOrMoreModifier    ::=  <NO_WHITESPACE>"+" ;

      lookAheadModifier    ::=  <NO_WHITESPACE>"!" ;

      error                ::=  . ;

`;
