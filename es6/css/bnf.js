'use strict';

const bnf = `



    stylesheet                 ::= ( media | ruleSet | declaration | verticalSpace )+ ;





    media                      ::= "@media" mediaQueries "{" ( ruleSet | declaration | verticalSpace )* "}" verticalSpace? ;
                                                              
                                                              
    mediaQueries               ::=  mediaQuery ( "," verticalSpace? mediaQuery )* ;
                                                              
                                                              
    mediaQuery                 ::=  ( "only"? mediaType "and" )? mediaExpresssion ;


    mediaType                  ::=  "all" | "print" | "screen" | "speech" ;
                                                              
                                                              
    mediaExpresssion           ::=  "not"? "(" [identifier] ( ":" expression )? ")" ;





    ruleSet                    ::=  selectors "{" ( declaration | verticalSpace )* "}" verticalSpace? ;


    selectors                  ::=  selector ( "," verticalSpace? selector )* ;


    selector                   ::=  ( class | pseudoClass | pseudoElement | attribute )+ ;





    declaration                ::=  property ":" verticalSpace? expression priority? ";" ;


    class                      ::=  "."<NO_WHITESPACE>[identifier]<NO_WHITESPACE>( "(" selector ")" )? ;


    pseudoClass                ::=  ":"<NO_WHITESPACE>[identifier]<NO_WHITESPACE>( "(" selector ")" )? ;


    pseudoElement              ::=  "::"<NO_WHITESPACE>[identifier]<NO_WHITESPACE>( "(" selector ")" )? ;


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


    expression                 ::=  term ( ( "," verticalSpace? )? term )* ;


    priority                   ::=  "!important" ;





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
