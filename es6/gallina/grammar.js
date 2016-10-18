'use strict';

var grammar = `

  qualid                ::=   else if+
      
`;

// term              ::=   name | qualid | sort
//
//
// sort              ::=   Prop | Set | Type

module.exports = grammar;

// match_item        ::=   term [as name] [in qualid]
//
// term              ::=   num
//
// name              ::=   ident
//
// |   sort
//
// |   qualid
//
// |   _
//
// |   bracketedTerm

// match_items       ::=   match_item , ... , match_item
//
//
// |   bracketedTerm
//
// bracketedTerm     ::=   ( term )
//
// arg               ::=   term
//
//     |   identToTerm
//
// identToTerm       ::=   ( ident := term )
//
// binders           ::=   binder ... binder
//
// binder            ::=   namesTermBinder
//
//     |   nameToTermBinder
//
//     |   nameBinder
//
// namesTermBinder   ::=   ( name ... name : term )
//
// nameToTermBinder  ::=   ( name [: term] := term )
//
// nameBinder        ::=   name
//
