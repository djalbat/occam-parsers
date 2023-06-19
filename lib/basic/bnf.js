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
var bnf = '\n\n          term  ::=  "1" "+" "2" "/" term    (1)\n          \n                  |  "3"                     (2)\n                  \n                  |  "1" "+" term            (4) \n          \n                  |  "2" "/" "3"             (3)\n                  \n                  ;\n  \n';
var _default = bnf;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNpYy9ibmYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGJuZiA9IGBcblxuICAgICAgICAgIHRlcm0gIDo6PSAgXCIxXCIgXCIrXCIgXCIyXCIgXCIvXCIgdGVybSAgICAoMSlcbiAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIHwgIFwiM1wiICAgICAgICAgICAgICAgICAgICAgKDIpXG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIHwgIFwiMVwiIFwiK1wiIHRlcm0gICAgICAgICAgICAoNCkgXG4gICAgICAgICAgXG4gICAgICAgICAgICAgICAgICB8ICBcIjJcIiBcIi9cIiBcIjNcIiAgICAgICAgICAgICAoMylcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgO1xuICBcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGJuZjtcblxuIl0sIm5hbWVzIjpbImJuZiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBZ0JBOzs7ZUFBQTs7O0FBZEEsSUFBTUEsTUFBTztJQWNiLFdBQWVBIn0=