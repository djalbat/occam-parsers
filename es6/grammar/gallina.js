'use strict';

var grammar = `

  binder                ::=   name

                          |   ( name+ : term )

                          |   ( name colonThenTerm? := term )
  
  name                  ::=   ident
  
  colonThenTerm         ::=   : term

  term                  ::=   num
`;

module.exports = grammar;

// var grammar = `
//
//   term                  ::=   forall binders , term
//
//
//
//
//                           |   qualid
//
//                           |   sort
//
//                           |   num
//
//                           |   _
//
//                           |   ( term )
//
//   binders               ::=   binder+
//
//   arg                   ::=   term
//
//                           |   ( ident := term )
//
//   colonThenTerm         ::=   : term
//
//   name                  ::=   ident
//
//                           |   _
//
//   qualid                ::=   ident<NO_WHITESPACE>access_ident*
//
//   sort                  ::=   Prop | Set | Type
//
// `;
