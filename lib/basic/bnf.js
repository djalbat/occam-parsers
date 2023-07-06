"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default" /*

  expression  ::=  term... "." ;

        term  ::=  "1"

                   (

                     ( "+" "2" "/" )   (4)

                     |

                     "+"               (0)

                   )

                   term

                |  "2" "/" "3"         (1)

                |  "3"                 (3)

                ;

*/ , {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var bnf = '\n\n        term  ::=  "1" "+" "2" "/" term   (4)\n\n                |  "1" "+" term           (0)\n\n                |  "2" "/" "3"            (1)\n\n                |  "3"                    (3)\n\n                ;\n   \n';
var _default = bnf;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNpYy9ibmYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGJuZiA9IGBcblxuICAgICAgICB0ZXJtICA6Oj0gIFwiMVwiIFwiK1wiIFwiMlwiIFwiL1wiIHRlcm0gICAoNClcblxuICAgICAgICAgICAgICAgIHwgIFwiMVwiIFwiK1wiIHRlcm0gICAgICAgICAgICgwKVxuXG4gICAgICAgICAgICAgICAgfCAgXCIyXCIgXCIvXCIgXCIzXCIgICAgICAgICAgICAoMSlcblxuICAgICAgICAgICAgICAgIHwgIFwiM1wiICAgICAgICAgICAgICAgICAgICAoMylcblxuICAgICAgICAgICAgICAgIDtcbiAgIFxuYDtcblxuZXhwb3J0IGRlZmF1bHQgYm5mO1xuXG4vKlxuXG4gIGV4cHJlc3Npb24gIDo6PSAgdGVybS4uLiBcIi5cIiA7XG5cbiAgICAgICAgdGVybSAgOjo9ICBcIjFcIlxuXG4gICAgICAgICAgICAgICAgICAgKFxuXG4gICAgICAgICAgICAgICAgICAgICAoIFwiK1wiIFwiMlwiIFwiL1wiICkgICAoNClcblxuICAgICAgICAgICAgICAgICAgICAgfFxuXG4gICAgICAgICAgICAgICAgICAgICBcIitcIiAgICAgICAgICAgICAgICgwKVxuXG4gICAgICAgICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICAgICAgICAgdGVybVxuXG4gICAgICAgICAgICAgICAgfCAgXCIyXCIgXCIvXCIgXCIzXCIgICAgICAgICAoMSlcblxuICAgICAgICAgICAgICAgIHwgIFwiM1wiICAgICAgICAgICAgICAgICAoMylcblxuICAgICAgICAgICAgICAgIDtcblxuKi8iXSwibmFtZXMiOlsiYm5mIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFnQkEsVUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0JBOzs7ZUExQkE7OztBQWRBLElBQU1BLE1BQU87SUFjYixXQUFlQSJ9