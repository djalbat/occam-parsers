"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var bnf = "\n\n  expression   ::= expression_ operator expression expression~*\n\n                 | expression_\n\n                 ;\n\n  operator     ::= \"+\"\n\n                 | \"-\"\n\n                 | \"/\"\n\n                 | \"*\"\n\n                 ;\n\n  term         ::= /\\d+/ ;\n\n  expression_  ::= \"(\" expression \")\"\n\n                 | term\n\n                 ;\n\n  expression~  ::= operator expression ;\n  \n";
var _default = bnf;
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNpYy9ibmYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGJuZiA9IGBcblxuICBleHByZXNzaW9uICAgOjo9IGV4cHJlc3Npb25fIG9wZXJhdG9yIGV4cHJlc3Npb24gZXhwcmVzc2lvbn4qXG5cbiAgICAgICAgICAgICAgICAgfCBleHByZXNzaW9uX1xuXG4gICAgICAgICAgICAgICAgIDtcblxuICBvcGVyYXRvciAgICAgOjo9IFwiK1wiXG5cbiAgICAgICAgICAgICAgICAgfCBcIi1cIlxuXG4gICAgICAgICAgICAgICAgIHwgXCIvXCJcblxuICAgICAgICAgICAgICAgICB8IFwiKlwiXG5cbiAgICAgICAgICAgICAgICAgO1xuXG4gIHRlcm0gICAgICAgICA6Oj0gL1xcXFxkKy8gO1xuXG4gIGV4cHJlc3Npb25fICA6Oj0gXCIoXCIgZXhwcmVzc2lvbiBcIilcIlxuXG4gICAgICAgICAgICAgICAgIHwgdGVybVxuXG4gICAgICAgICAgICAgICAgIDtcblxuICBleHByZXNzaW9ufiAgOjo9IG9wZXJhdG9yIGV4cHJlc3Npb24gO1xuICBcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGJuZjtcbiJdLCJuYW1lcyI6WyJibmYiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7O0VBQWI7d0JBQUE7QUFFQSxJQUFNQSxHQUFHLEdBQUksa2JBNEJiLEFBQUMsQUFBQztlQUVhQSxHQUFHOzBCQWhDbEIifQ==