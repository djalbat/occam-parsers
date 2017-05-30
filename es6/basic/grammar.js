'use strict';

const grammar = `

    expression               ::=  term & (operator<NO_WHITESPACE>term)* <END_OF_LINE>
    
    operator                 ::=  "+" | "-" | "*" | "/"
    
    term                     ::=  naturalNumber | parenthesizedExpression
    
    naturalNumber            ::=  /\d+/
    
    parenthesizedExpression  ::=  "(" expression ")"
                            
`;

module.exports = grammar;
