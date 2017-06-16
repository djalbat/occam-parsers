'use strict';

const grammar = `

 expression               ::=  expression "+" term | term

 term                     ::=  naturalNumber

 naturalNumber            ::=  /\\d+/

`;

module.exports = grammar;
