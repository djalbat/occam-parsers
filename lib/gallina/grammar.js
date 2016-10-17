'use strict';

var grammar = '\n\n  name              ::=   ident\n  \n                      |   string\n\n                      |   sort\n\n                      |   _\n                      \n  sort              ::=   Prop | Set | Type\n  \n';

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9nYWxsaW5hL2dyYW1tYXIuanMiXSwibmFtZXMiOlsiZ3JhbW1hciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLElBQUlBLGlPQUFKOztBQWNBQyxPQUFPQyxPQUFQLEdBQWlCRixPQUFqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ3JhbW1hci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGdyYW1tYXIgPSBgXG5cbiAgbmFtZSAgICAgICAgICAgICAgOjo9ICAgaWRlbnRcbiAgXG4gICAgICAgICAgICAgICAgICAgICAgfCAgIHN0cmluZ1xuXG4gICAgICAgICAgICAgICAgICAgICAgfCAgIHNvcnRcblxuICAgICAgICAgICAgICAgICAgICAgIHwgICBfXG4gICAgICAgICAgICAgICAgICAgICAgXG4gIHNvcnQgICAgICAgICAgICAgIDo6PSAgIFByb3AgfCBTZXQgfCBUeXBlXG4gIFxuYDtcblxubW9kdWxlLmV4cG9ydHMgPSBncmFtbWFyO1xuXG4vLyBtYXRjaF9pdGVtICAgICAgICA6Oj0gICB0ZXJtIFthcyBuYW1lXSBbaW4gcXVhbGlkXVxuLy9cbi8vIHRlcm0gICAgICAgICAgICAgIDo6PSAgIG51bVxuLy9cbi8vIG5hbWUgICAgICAgICAgICAgIDo6PSAgIGlkZW50XG4vL1xuLy8gfCAgIHNvcnRcbi8vXG4vLyB8ICAgcXVhbGlkXG4vL1xuLy8gfCAgIF9cbi8vXG4vLyB8ICAgYnJhY2tldGVkVGVybVxuXG4vLyBtYXRjaF9pdGVtcyAgICAgICA6Oj0gICBtYXRjaF9pdGVtICwgLi4uICwgbWF0Y2hfaXRlbVxuLy9cbi8vXG4vLyB8ICAgYnJhY2tldGVkVGVybVxuLy9cbi8vIGJyYWNrZXRlZFRlcm0gICAgIDo6PSAgICggdGVybSApXG4vL1xuLy8gYXJnICAgICAgICAgICAgICAgOjo9ICAgdGVybVxuLy9cbi8vICAgICB8ICAgaWRlbnRUb1Rlcm1cbi8vXG4vLyBpZGVudFRvVGVybSAgICAgICA6Oj0gICAoIGlkZW50IDo9IHRlcm0gKVxuLy9cbi8vIGJpbmRlcnMgICAgICAgICAgIDo6PSAgIGJpbmRlciAuLi4gYmluZGVyXG4vL1xuLy8gYmluZGVyICAgICAgICAgICAgOjo9ICAgbmFtZXNUZXJtQmluZGVyXG4vL1xuLy8gICAgIHwgICBuYW1lVG9UZXJtQmluZGVyXG4vL1xuLy8gICAgIHwgICBuYW1lQmluZGVyXG4vL1xuLy8gbmFtZXNUZXJtQmluZGVyICAgOjo9ICAgKCBuYW1lIC4uLiBuYW1lIDogdGVybSApXG4vL1xuLy8gbmFtZVRvVGVybUJpbmRlciAgOjo9ICAgKCBuYW1lIFs6IHRlcm1dIDo9IHRlcm0gKVxuLy9cbi8vIG5hbWVCaW5kZXIgICAgICAgIDo6PSAgIG5hbWVcbi8vXG4iXX0=