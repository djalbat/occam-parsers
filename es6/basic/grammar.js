'use strict';

const grammar = `

 expression               ::=  "(" expression ")"

 | expression operator expression

 | term

 operator                 ::=  "+" | "-" | "/" | "*"

 term                     ::=  naturalNumber

 naturalNumber            ::=  /\\d+/


`;

module.exports = grammar;
