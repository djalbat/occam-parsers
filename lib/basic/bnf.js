"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const bnf = `

    expressions  ::=  expression+ ;

    expression   ::=  term... "." ;
    
    term         ::=  term_ term~* ;
    
    operator     ::=  "+"
    
                   |  "-"
    
                   |  "*"
    
                   ;
    
    number       ::=  /\\d+/ ;
    
    term_        ::=  "(" term ")"
    
                   |  number
    
                   ;
    
    term~term    ::=  operator term ;
    
    term~        ::=  term~term ;

`;
const _default = bnf;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNpYy9ibmYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGJuZiA9IGBcblxuICAgIGV4cHJlc3Npb25zICA6Oj0gIGV4cHJlc3Npb24rIDtcblxuICAgIGV4cHJlc3Npb24gICA6Oj0gIHRlcm0uLi4gXCIuXCIgO1xuICAgIFxuICAgIHRlcm0gICAgICAgICA6Oj0gIHRlcm1fIHRlcm1+KiA7XG4gICAgXG4gICAgb3BlcmF0b3IgICAgIDo6PSAgXCIrXCJcbiAgICBcbiAgICAgICAgICAgICAgICAgICB8ICBcIi1cIlxuICAgIFxuICAgICAgICAgICAgICAgICAgIHwgIFwiKlwiXG4gICAgXG4gICAgICAgICAgICAgICAgICAgO1xuICAgIFxuICAgIG51bWJlciAgICAgICA6Oj0gIC9cXFxcZCsvIDtcbiAgICBcbiAgICB0ZXJtXyAgICAgICAgOjo9ICBcIihcIiB0ZXJtIFwiKVwiXG4gICAgXG4gICAgICAgICAgICAgICAgICAgfCAgbnVtYmVyXG4gICAgXG4gICAgICAgICAgICAgICAgICAgO1xuICAgIFxuICAgIHRlcm1+dGVybSAgICA6Oj0gIG9wZXJhdG9yIHRlcm0gO1xuICAgIFxuICAgIHRlcm1+ICAgICAgICA6Oj0gIHRlcm1+dGVybSA7XG5cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGJuZjtcbiJdLCJuYW1lcyI6WyJibmYiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWdDQTs7O2VBQUE7OztBQTlCQSxNQUFNQSxNQUFNLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0QmIsQ0FBQztNQUVELFdBQWVBIn0=