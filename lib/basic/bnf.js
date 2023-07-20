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
var bnf = '\n      \n      expression ::= term... "." ;\n    \n      term       ::= "1" term~term ;\n      \n      term~term  ::= "+" "2" "."\n      \n                   | "+" "2" \n                   \n                   ;\n      \n';
var _default = bnf;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNpYy9ibmYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGJuZiA9IGBcbiAgICAgIFxuICAgICAgZXhwcmVzc2lvbiA6Oj0gdGVybS4uLiBcIi5cIiA7XG4gICAgXG4gICAgICB0ZXJtICAgICAgIDo6PSBcIjFcIiB0ZXJtfnRlcm0gO1xuICAgICAgXG4gICAgICB0ZXJtfnRlcm0gIDo6PSBcIitcIiBcIjJcIiBcIi5cIlxuICAgICAgXG4gICAgICAgICAgICAgICAgICAgfCBcIitcIiBcIjJcIiBcbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICA7XG4gICAgICBcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGJuZjtcbiJdLCJuYW1lcyI6WyJibmYiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWdCQTs7O2VBQUE7OztBQWRBLElBQU1BLE1BQU87SUFjYixXQUFlQSJ9