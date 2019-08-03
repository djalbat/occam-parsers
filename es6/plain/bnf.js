'use strict';

const bnf = `


    document       ::=  ( line | verticalSpace )+ ;


    line           ::=  [unassigned]+ ;


    verticalSpace  ::=  <END_OF_LINE>+ ;


`;

module.exports = bnf;
