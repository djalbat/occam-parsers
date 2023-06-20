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
var bnf = '\n\n        expression  ::=  term... "." ;\n\n              term  ::=  "1" \n              \n                         (\n                         \n                           ( "+" "2" "/" )          (3)\n\n                           | \n                          \n                           "+"                      (0)\n                           \n                         )\n                         \n                         term\n\n                      |  "2" "/" "3"                (1)\n\n                      |  "3"                        (2)\n\n                      ;\n      \n';
var _default = bnf;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNpYy9ibmYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGJuZiA9IGBcblxuICAgICAgICBleHByZXNzaW9uICA6Oj0gIHRlcm0uLi4gXCIuXCIgO1xuXG4gICAgICAgICAgICAgIHRlcm0gIDo6PSAgXCIxXCIgXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICggXCIrXCIgXCIyXCIgXCIvXCIgKSAgICAgICAgICAoMylcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcIitcIiAgICAgICAgICAgICAgICAgICAgICAoMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICB0ZXJtXG5cbiAgICAgICAgICAgICAgICAgICAgICB8ICBcIjJcIiBcIi9cIiBcIjNcIiAgICAgICAgICAgICAgICAoMSlcblxuICAgICAgICAgICAgICAgICAgICAgIHwgIFwiM1wiICAgICAgICAgICAgICAgICAgICAgICAgKDIpXG5cbiAgICAgICAgICAgICAgICAgICAgICA7XG4gICAgICBcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGJuZjtcbiJdLCJuYW1lcyI6WyJibmYiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTRCQTs7O2VBQUE7OztBQTFCQSxJQUFNQSxNQUFPO0lBMEJiLFdBQWVBIn0=