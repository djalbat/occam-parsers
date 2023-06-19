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
var bnf = '\n\n              term  ::=  "1" \n              \n                         ( \n                          \n                           plus2DividedBy           (1) \n                            \n                           | \n                            \n                           plus                     (4) \n                          \n                         ) \n                          \n                         term    \n              \n                      |  "3"                        (2)                      \n\n                      |  "2" "/" "3"                (3)\n                      \n                      ;\n                      \n    plus2DividedBy  ::=  "+" "2" "/" ;         \n    \n              plus  ::=  "+" ;         \n      \n';
var _default = bnf;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNpYy9ibmYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGJuZiA9IGBcblxuICAgICAgICAgICAgICB0ZXJtICA6Oj0gIFwiMVwiIFxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAoIFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsdXMyRGl2aWRlZEJ5ICAgICAgICAgICAoMSkgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB8IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcGx1cyAgICAgICAgICAgICAgICAgICAgICg0KSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgKSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgdGVybSAgICBcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgfCAgXCIzXCIgICAgICAgICAgICAgICAgICAgICAgICAoMikgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgICB8ICBcIjJcIiBcIi9cIiBcIjNcIiAgICAgICAgICAgICAgICAoMylcbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgcGx1czJEaXZpZGVkQnkgIDo6PSAgXCIrXCIgXCIyXCIgXCIvXCIgOyAgICAgICAgIFxuICAgIFxuICAgICAgICAgICAgICBwbHVzICA6Oj0gIFwiK1wiIDsgICAgICAgICBcbiAgICAgIFxuYDtcblxuZXhwb3J0IGRlZmF1bHQgYm5mO1xuXG4iXSwibmFtZXMiOlsiYm5mIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE4QkE7OztlQUFBOzs7QUE1QkEsSUFBTUEsTUFBTztJQTRCYixXQUFlQSJ9