'use strict';

const bnf = `

                                                              
    stylesheet                 ::=  ( declaration | ruleSet | media | verticalSpace | error )+ ;


    media                      ::= "@media" mediaQueries "{" verticalSpace? declarations "}" verticalSpace? ;
                                                              
                                                              
    mediaQueries               ::=  mediaQuery ( "," verticalSpace? mediaQuery )* ;
                                                              
                                                              
    mediaQuery                 ::=  ( "only"? mediaType "and" )? mediaExpresssion ;


    mediaType                  ::=  "all" | "print" | "screen" | "speech" ;
                                                              
                                                              
    mediaExpresssion           ::= "not"? "(" [identifier] ( ":" expression )? ")" ;


    ruleset                    ::=  selectors "{" verticalSpace? declarations "}" verticalSpace? ;


    selectors                  ::=  selector ( "," verticalSpace? selector )* ;


    declarations               ::=  declaration verticalSpace? ( declaration verticalSpace? )* ;


    selector                   ::=  ( [class] | pseudoClass | pseudoElement | attribute )+ ;


    declaration                ::=  property ":" verticalSpace? expression priority? ";" ;


    pseudoClass                ::=  [pseudoClass]<NO_WHITESPACE>( "(" selector ")" )? ;


    pseudoElement              ::=  [pseudoElement]<NO_WHITESPACE>( "(" selector ")" )? ;


    attribute                  ::=  "["

                                       verticalSpace?

                                       [identifier]

                                       verticalSpace?
   
                                       (

                                         ( "=" | "~=" | "|=" )

                                         verticalSpace?

                                         ( [identifier] | [stringLiteral] )

                                         verticalSpace?

                                       )?

                                    "]"

                                 ;


    property                   ::=  [identifier] verticalSpace? ;


    expression                 ::=  term ( operator? term )* ;


    priority                   ::=  "!important" ;


    operator                   ::=  "/" verticalSpace? | "," verticalSpace? ;

    term                       ::=  [unaryOperator]?
                                                       
                                      (
                                                       
                                        ( [percentage] | [frequency] | [length] | [angle] | [rems] | [ems] | [time] | [number] )
                                                       
                                        |
                                                       
                                        uri
                                                       
                                        |
                                                       
                                        function
                                                       
                                        |
                                                       
                                        [stringLiteral]
                                                       
                                        |
                                                       
                                        [identifier]
                                                       
                                        |
                                                       
                                        [colour]
                                                       
                                      )
                                                       
                                   ;


    uri                        ::=  "url"<NO_WHITESPACE>"(" [stringLiteral] ")" ;


    function                   ::=  [identifier]<NO_WHITESPACE>"(" expression ")" ;


    verticalSpace              ::=  <END_OF_LINE>+ ;


    error                      ::=  . ;


`;

module.exports = bnf;
