'use strict';

var grammar = `

  term                  ::=   forall binders , term




                          |   qualid

                          |   sort

                          |   num

                          |   _

                          |   ( term )

  binders               ::=   binder+
  
  binder	              ::=	  name
  
                          |	  ( name+ : term )
                          
                          |	  ( name colonThenTerm? := term )

  arg                   ::=   term

                          |   ( ident := term )

  colonThenTerm         ::=   : term

  name                  ::=   ident

                          |   _

  qualid                ::=   ident<NO_WHITESPACE>access_ident*

  sort                  ::=   Prop | Set | Type

`;

module.exports = grammar;
