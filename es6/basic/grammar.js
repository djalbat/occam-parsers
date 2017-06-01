'use strict';

const grammar = `

    expression               ::=  term & (operator term)* 
    
    operator                 ::=  "+" | "-" | "*" | "/"
    
    term                     ::=  naturalNumber | parenthesizedExpression
    
    naturalNumber            ::=  /\d+/
    
    parenthesizedExpression  ::=  "(" expression ")"
                            
`;

module.exports = grammar;
