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

  orEquations           ::=   |? equation orEquation*

  orEquation            ::=   | equation

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

  equation              ::=   mult_pattern |ThenMult_pattern* => term

  |ThenMult_pattern     ::=   | mult_pattern

  mult_pattern          ::=   pattern commaThenPattern*

  pattern               ::=   @? qualid patterns pattern'
  
                          |   qualid pattern'
  
                          |   _ pattern'
  
                          |   num pattern'
  
                          |   ( or_patterns ) pattern'

  pattern'              ::=   as ident pattern' 
  
                          |   % ident pattern' 
  
                          |   ε

  commaThenPattern      ::=   , pattern

  or_patterns           ::=   or_pattern commaThenOrPattern*

  commaThenOrPattern    ::=   , or_pattern

  or_pattern            ::=   pattern |ThenPattern*

  |ThenPattern          ::=   | pattern

`;

module.exports = grammar;
