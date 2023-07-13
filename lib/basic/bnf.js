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
var bnf = '\n\n     expression ::= term... ;\n\n          term  ::=  "1"\n      \n                     (\n      \n                       ( "+" "2" "/" )   (4)\n      \n                       |\n      \n                       "+"               (0)\n      \n                     )\n      \n                     term\n      \n                  |  argument            ( )\n      \n                  |  "3"                 (3)\n      \n                  ;\n                  \n     argument ::= "2" "/" "3"            (1)  ;\n                  \n    \n';
var _default = bnf;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNpYy9ibmYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGJuZiA9IGBcblxuICAgICBleHByZXNzaW9uIDo6PSB0ZXJtLi4uIDtcblxuICAgICAgICAgIHRlcm0gIDo6PSAgXCIxXCJcbiAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgKFxuICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICggXCIrXCIgXCIyXCIgXCIvXCIgKSAgICg0KVxuICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgIHxcbiAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICBcIitcIiAgICAgICAgICAgICAgICgwKVxuICAgICAgXG4gICAgICAgICAgICAgICAgICAgICApXG4gICAgICBcbiAgICAgICAgICAgICAgICAgICAgIHRlcm1cbiAgICAgIFxuICAgICAgICAgICAgICAgICAgfCAgYXJndW1lbnQgICAgICAgICAgICAoIClcbiAgICAgIFxuICAgICAgICAgICAgICAgICAgfCAgXCIzXCIgICAgICAgICAgICAgICAgICgzKVxuICAgICAgXG4gICAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgICBcbiAgICAgYXJndW1lbnQgOjo9IFwiMlwiIFwiL1wiIFwiM1wiICAgICAgICAgICAgKDEpICA7XG4gICAgICAgICAgICAgICAgICBcbiAgICBcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGJuZjtcbiJdLCJuYW1lcyI6WyJibmYiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQStCQTs7O2VBQUE7OztBQTdCQSxJQUFNQSxNQUFPO0lBNkJiLFdBQWVBIn0=