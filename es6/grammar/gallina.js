'use strict';

var grammar = `

  term                  ::=   forall binders , term












                          |   match match_items return_type? with orEquations? end

                          |   qualid

                          |   sort

                          |   num

                          |   _

                          |   ( term )

  match_items           ::=   match_item commaThenMatchItem*

  commaThenMatchItem    ::=   , match_item

  orEquations           ::=   or? equation orEquation*

  orEquation            ::=   or equation

  arg                   ::=   term

                          |   ( ident := term )

  binders               ::=   binder+

  binder                ::=	  name

                          |   ( name+ : term )

                          |   ( name colonThenTerm? := term )

  colonThenTerm         ::=   : term

  name                  ::=   ident

                          |   _

  qualid                ::=   ident<NO_WHITESPACE>access_ident*

  sort                  ::=   Prop | Set | Type


















  match_item            ::=   term asName? inQualidPatterns?

  asName                ::=   as name

  inQualidPatterns      ::=   in qualid patterns?

  patterns              ::=   pattern+

  return_type           ::=   return term

  equation              ::=   mult_pattern orThenMult_pattern => term

  mult_pattern          ::=   pattern /commaThenPattern*/

  orThenMult_pattern    ::=   or mult_pattern

  commaThenPattern      ::=   , pattern

  pattern               ::=   qualid patterns

                          |   @ qualid patterns

                          |   qualid

                          |   _

                          |   num

                          |   ( or_patterns )

  or_patterns           ::=   or_pattern commaThenOrPattern*

  commaThenOrPattern    ::=   , or_pattern

  or_pattern            ::=   pattern orPattern*

  orPattern             ::=   or pattern

  or                    ::=   /\|/

`;

module.exports = grammar;
