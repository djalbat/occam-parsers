'use strict';

var grammar = '\n\n  qualid                ::=   else if?\n      \n';

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9nYWxsaW5hL2dyYW1tYXIuanMiXSwibmFtZXMiOlsiZ3JhbW1hciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLElBQUlBLGdFQUFKOztBQU1BO0FBQ0E7QUFDQTtBQUNBOztBQUVBQyxPQUFPQyxPQUFQLEdBQWlCRixPQUFqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ3JhbW1hci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGdyYW1tYXIgPSBgXG5cbiAgcXVhbGlkICAgICAgICAgICAgICAgIDo6PSAgIGVsc2UgaWY/XG4gICAgICBcbmA7XG5cbi8vIHRlcm0gICAgICAgICAgICAgIDo6PSAgIG5hbWUgfCBxdWFsaWQgfCBzb3J0XG4vL1xuLy9cbi8vIHNvcnQgICAgICAgICAgICAgIDo6PSAgIFByb3AgfCBTZXQgfCBUeXBlXG5cbm1vZHVsZS5leHBvcnRzID0gZ3JhbW1hcjtcblxuLy8gbWF0Y2hfaXRlbSAgICAgICAgOjo9ICAgdGVybSBbYXMgbmFtZV0gW2luIHF1YWxpZF1cbi8vXG4vLyB0ZXJtICAgICAgICAgICAgICA6Oj0gICBudW1cbi8vXG4vLyBuYW1lICAgICAgICAgICAgICA6Oj0gICBpZGVudFxuLy9cbi8vIHwgICBzb3J0XG4vL1xuLy8gfCAgIHF1YWxpZFxuLy9cbi8vIHwgICBfXG4vL1xuLy8gfCAgIGJyYWNrZXRlZFRlcm1cblxuLy8gbWF0Y2hfaXRlbXMgICAgICAgOjo9ICAgbWF0Y2hfaXRlbSAsIC4uLiAsIG1hdGNoX2l0ZW1cbi8vXG4vL1xuLy8gfCAgIGJyYWNrZXRlZFRlcm1cbi8vXG4vLyBicmFja2V0ZWRUZXJtICAgICA6Oj0gICAoIHRlcm0gKVxuLy9cbi8vIGFyZyAgICAgICAgICAgICAgIDo6PSAgIHRlcm1cbi8vXG4vLyAgICAgfCAgIGlkZW50VG9UZXJtXG4vL1xuLy8gaWRlbnRUb1Rlcm0gICAgICAgOjo9ICAgKCBpZGVudCA6PSB0ZXJtIClcbi8vXG4vLyBiaW5kZXJzICAgICAgICAgICA6Oj0gICBiaW5kZXIgLi4uIGJpbmRlclxuLy9cbi8vIGJpbmRlciAgICAgICAgICAgIDo6PSAgIG5hbWVzVGVybUJpbmRlclxuLy9cbi8vICAgICB8ICAgbmFtZVRvVGVybUJpbmRlclxuLy9cbi8vICAgICB8ICAgbmFtZUJpbmRlclxuLy9cbi8vIG5hbWVzVGVybUJpbmRlciAgIDo6PSAgICggbmFtZSAuLi4gbmFtZSA6IHRlcm0gKVxuLy9cbi8vIG5hbWVUb1Rlcm1CaW5kZXIgIDo6PSAgICggbmFtZSBbOiB0ZXJtXSA6PSB0ZXJtIClcbi8vXG4vLyBuYW1lQmluZGVyICAgICAgICA6Oj0gICBuYW1lXG4vL1xuIl19