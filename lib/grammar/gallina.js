'use strict';

var grammar = '\n\n  binder                ::=   name\n\n                          |   ( name+ : term )\n\n                          |   ( name colonThenTerm? := term )\n  \n  name                  ::=   ident\n  \n  colonThenTerm         ::=   : term\n\n  term                  ::=   num\n';

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ncmFtbWFyL2dhbGxpbmEuanMiXSwibmFtZXMiOlsiZ3JhbW1hciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLElBQUlBLCtSQUFKOztBQWVBQyxPQUFPQyxPQUFQLEdBQWlCRixPQUFqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnYWxsaW5hLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZ3JhbW1hciA9IGBcblxuICBiaW5kZXIgICAgICAgICAgICAgICAgOjo9ICAgbmFtZVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAoIG5hbWUrIDogdGVybSApXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICggbmFtZSBjb2xvblRoZW5UZXJtPyA6PSB0ZXJtIClcbiAgXG4gIG5hbWUgICAgICAgICAgICAgICAgICA6Oj0gICBpZGVudFxuICBcbiAgY29sb25UaGVuVGVybSAgICAgICAgIDo6PSAgIDogdGVybVxuXG4gIHRlcm0gICAgICAgICAgICAgICAgICA6Oj0gICBudW1cbmA7XG5cbm1vZHVsZS5leHBvcnRzID0gZ3JhbW1hcjtcblxuLy8gdmFyIGdyYW1tYXIgPSBgXG4vL1xuLy8gICB0ZXJtICAgICAgICAgICAgICAgICAgOjo9ICAgZm9yYWxsIGJpbmRlcnMgLCB0ZXJtXG4vL1xuLy9cbi8vXG4vL1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgcXVhbGlkXG4vL1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgc29ydFxuLy9cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIG51bVxuLy9cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIF9cbi8vXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAoIHRlcm0gKVxuLy9cbi8vICAgYmluZGVycyAgICAgICAgICAgICAgIDo6PSAgIGJpbmRlcitcbi8vXG4vLyAgIGFyZyAgICAgICAgICAgICAgICAgICA6Oj0gICB0ZXJtXG4vL1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgKCBpZGVudCA6PSB0ZXJtIClcbi8vXG4vLyAgIGNvbG9uVGhlblRlcm0gICAgICAgICA6Oj0gICA6IHRlcm1cbi8vXG4vLyAgIG5hbWUgICAgICAgICAgICAgICAgICA6Oj0gICBpZGVudFxuLy9cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIF9cbi8vXG4vLyAgIHF1YWxpZCAgICAgICAgICAgICAgICA6Oj0gICBpZGVudDxOT19XSElURVNQQUNFPmFjY2Vzc19pZGVudCpcbi8vXG4vLyAgIHNvcnQgICAgICAgICAgICAgICAgICA6Oj0gICBQcm9wIHwgU2V0IHwgVHlwZVxuLy9cbi8vIGA7XG4iXX0=