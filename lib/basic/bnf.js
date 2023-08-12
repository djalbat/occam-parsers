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
var bnf = '\n      \n      expression   ::= expression_ operator expression expression~*\n    \n                     | expression_\n    \n                     ;\n    \n      operator     ::= "+"\n    \n                     | "-"\n    \n                     | "/"\n    \n                     | "*"\n    \n                     ;\n    \n      term         ::= /\\d+/ ;\n    \n      expression_  ::= "(" expression ")"\n    \n                     | term\n    \n                     ;\n    \n      expression~  ::= operator expression ;                   \n      \n';
var _default = bnf;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNpYy9ibmYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGJuZiA9IGBcbiAgICAgIFxuICAgICAgZXhwcmVzc2lvbiAgIDo6PSBleHByZXNzaW9uXyBvcGVyYXRvciBleHByZXNzaW9uIGV4cHJlc3Npb25+KlxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgfCBleHByZXNzaW9uX1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgO1xuICAgIFxuICAgICAgb3BlcmF0b3IgICAgIDo6PSBcIitcIlxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgfCBcIi1cIlxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgfCBcIi9cIlxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgfCBcIipcIlxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgO1xuICAgIFxuICAgICAgdGVybSAgICAgICAgIDo6PSAvXFxcXGQrLyA7XG4gICAgXG4gICAgICBleHByZXNzaW9uXyAgOjo9IFwiKFwiIGV4cHJlc3Npb24gXCIpXCJcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgIHwgdGVybVxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgO1xuICAgIFxuICAgICAgZXhwcmVzc2lvbn4gIDo6PSBvcGVyYXRvciBleHByZXNzaW9uIDsgICAgICAgICAgICAgICAgICAgXG4gICAgICBcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGJuZjtcbiJdLCJuYW1lcyI6WyJibmYiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWdDQTs7O2VBQUE7OztBQTlCQSxJQUFNQSxNQUFPO0lBOEJiLFdBQWVBIn0=