'use strict';

const grammar = `

    expression                 ::= term operatorThenTerm*
    
    operatorThenTerm           ::= operator term
    
    operator                   ::= '+' | '-' | '*' | '/'
    
    term                       ::= naturalNumber | parenthesizedExpression
    
    naturalNumber              ::= /^\d+$/
    
    parenthesizedExpression    ::= '(' expression ')'
              
`;

module.exports = grammar;
