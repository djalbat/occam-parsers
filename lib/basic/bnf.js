"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default" /*
    expression ::= term... "." ;

    term       ::= term_ term~* ;

    number     ::= /\d+/ ;

    term_      ::= "(" term ")"

                 | number

                 ;

    term~term  ::= ( "/" (1) | "*" (2) | "+" (3) | "-" (4) ) term ;

    term~      ::= term~term ;
*/ , {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var bnf = '\n\n  expression  ::=  term... "." ;\n\n        term  ::=  "1"\n\n                   (\n\n                     ( "+" "2" "/" )          (3)\n\n                     |\n\n                     "+"                      (0)\n\n                   )\n\n                   term\n\n                |  "2" "/" "3"                (1)\n\n                |  "3"                        (2)\n\n                ;\n      \n';
var _default = bnf;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNpYy9ibmYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGJuZiA9IGBcblxuICBleHByZXNzaW9uICA6Oj0gIHRlcm0uLi4gXCIuXCIgO1xuXG4gICAgICAgIHRlcm0gIDo6PSAgXCIxXCJcblxuICAgICAgICAgICAgICAgICAgIChcblxuICAgICAgICAgICAgICAgICAgICAgKCBcIitcIiBcIjJcIiBcIi9cIiApICAgICAgICAgICgzKVxuXG4gICAgICAgICAgICAgICAgICAgICB8XG5cbiAgICAgICAgICAgICAgICAgICAgIFwiK1wiICAgICAgICAgICAgICAgICAgICAgICgwKVxuXG4gICAgICAgICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICAgICAgICAgdGVybVxuXG4gICAgICAgICAgICAgICAgfCAgXCIyXCIgXCIvXCIgXCIzXCIgICAgICAgICAgICAgICAgKDEpXG5cbiAgICAgICAgICAgICAgICB8ICBcIjNcIiAgICAgICAgICAgICAgICAgICAgICAgICgyKVxuXG4gICAgICAgICAgICAgICAgO1xuICAgICAgXG5gO1xuXG5leHBvcnQgZGVmYXVsdCBibmY7XG5cbi8qXG4gICAgZXhwcmVzc2lvbiA6Oj0gdGVybS4uLiBcIi5cIiA7XG5cbiAgICB0ZXJtICAgICAgIDo6PSB0ZXJtXyB0ZXJtfiogO1xuXG4gICAgbnVtYmVyICAgICA6Oj0gL1xcZCsvIDtcblxuICAgIHRlcm1fICAgICAgOjo9IFwiKFwiIHRlcm0gXCIpXCJcblxuICAgICAgICAgICAgICAgICB8IG51bWJlclxuXG4gICAgICAgICAgICAgICAgIDtcblxuICAgIHRlcm1+dGVybSAgOjo9ICggXCIvXCIgKDEpIHwgXCIqXCIgKDIpIHwgXCIrXCIgKDMpIHwgXCItXCIgKDQpICkgdGVybSA7XG5cbiAgICB0ZXJtfiAgICAgIDo6PSB0ZXJtfnRlcm0gO1xuKi8iXSwibmFtZXMiOlsiYm5mIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE0QkEsVUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQTs7O2VBbEJBOzs7QUExQkEsSUFBTUEsTUFBTztJQTBCYixXQUFlQSJ9