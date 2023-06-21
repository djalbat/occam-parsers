"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default" /*

        term  ::=  "1"

                   (

                     ( "+" "2" "/" )          (3)

                     |

                     "+"                      (0)

                   )

                   term

                |  "2" "/" "3"                (1)

                |  "3"                        (2)

                ;


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
var bnf = '\n\n  expression  ::=  term... "." ;\n\n        term  ::=  "1"\n        \n                   (\n        \n                     "+"                       (0)\n                     \n                     |\n\n                     ( "+" "2" "/" )           (3)\n                     \n                   ) \n                   \n                   term\n\n                |  "2" "/" "3"                  (1)\n\n                |  "3"                          (4)\n\n                ;\n      \n';
var _default = bnf;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNpYy9ibmYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGJuZiA9IGBcblxuICBleHByZXNzaW9uICA6Oj0gIHRlcm0uLi4gXCIuXCIgO1xuXG4gICAgICAgIHRlcm0gIDo6PSAgXCIxXCJcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgKFxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgIFwiK1wiICAgICAgICAgICAgICAgICAgICAgICAoMClcbiAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgfFxuXG4gICAgICAgICAgICAgICAgICAgICAoIFwiK1wiIFwiMlwiIFwiL1wiICkgICAgICAgICAgICgzKVxuICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgKSBcbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICB0ZXJtXG5cbiAgICAgICAgICAgICAgICB8ICBcIjJcIiBcIi9cIiBcIjNcIiAgICAgICAgICAgICAgICAgICgxKVxuXG4gICAgICAgICAgICAgICAgfCAgXCIzXCIgICAgICAgICAgICAgICAgICAgICAgICAgICg0KVxuXG4gICAgICAgICAgICAgICAgO1xuICAgICAgXG5gO1xuXG5leHBvcnQgZGVmYXVsdCBibmY7XG5cbi8qXG5cbiAgICAgICAgdGVybSAgOjo9ICBcIjFcIlxuXG4gICAgICAgICAgICAgICAgICAgKFxuXG4gICAgICAgICAgICAgICAgICAgICAoIFwiK1wiIFwiMlwiIFwiL1wiICkgICAgICAgICAgKDMpXG5cbiAgICAgICAgICAgICAgICAgICAgIHxcblxuICAgICAgICAgICAgICAgICAgICAgXCIrXCIgICAgICAgICAgICAgICAgICAgICAgKDApXG5cbiAgICAgICAgICAgICAgICAgICApXG5cbiAgICAgICAgICAgICAgICAgICB0ZXJtXG5cbiAgICAgICAgICAgICAgICB8ICBcIjJcIiBcIi9cIiBcIjNcIiAgICAgICAgICAgICAgICAoMSlcblxuICAgICAgICAgICAgICAgIHwgIFwiM1wiICAgICAgICAgICAgICAgICAgICAgICAgKDIpXG5cbiAgICAgICAgICAgICAgICA7XG5cblxuICAgIGV4cHJlc3Npb24gOjo9IHRlcm0uLi4gXCIuXCIgO1xuXG4gICAgdGVybSAgICAgICA6Oj0gdGVybV8gdGVybX4qIDtcblxuICAgIG51bWJlciAgICAgOjo9IC9cXGQrLyA7XG5cbiAgICB0ZXJtXyAgICAgIDo6PSBcIihcIiB0ZXJtIFwiKVwiXG5cbiAgICAgICAgICAgICAgICAgfCBudW1iZXJcblxuICAgICAgICAgICAgICAgICA7XG5cbiAgICB0ZXJtfnRlcm0gIDo6PSAoIFwiL1wiICgxKSB8IFwiKlwiICgyKSB8IFwiK1wiICgzKSB8IFwiLVwiICg0KSApIHRlcm0gO1xuXG4gICAgdGVybX4gICAgICA6Oj0gdGVybX50ZXJtIDtcbiovIl0sIm5hbWVzIjpbImJuZiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBNEJBLFVBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0NBOzs7ZUF4Q0E7OztBQTFCQSxJQUFNQSxNQUFPO0lBMEJiLFdBQWVBIn0=