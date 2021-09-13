"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var bnf = "\n\n  expression  ::= expression_ operator expression expression~*\n\n                | expression_\n\n                ;\n\n  operator    ::= \"+\"\n\n                | \"-\"\n\n                | \"/\"\n\n                | \"*\"\n\n                ;\n\n  term        ::= /\\d+/ ;\n\n  expression_ ::= \"(\" expression \")\"\n\n                | term\n\n                ;\n\n  expression~ ::= operator expression ;\n  \n";
var _default = bnf;
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNpYy9ibmYuanMiXSwibmFtZXMiOlsiYm5mIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVaLEdBQUssQ0FBQyxHQUFHLElBQUksbWFBNEJiO2VBRWUsR0FBRyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBibmYgPSBgXG5cbiAgZXhwcmVzc2lvbiAgOjo9IGV4cHJlc3Npb25fIG9wZXJhdG9yIGV4cHJlc3Npb24gZXhwcmVzc2lvbn4qXG5cbiAgICAgICAgICAgICAgICB8IGV4cHJlc3Npb25fXG5cbiAgICAgICAgICAgICAgICA7XG5cbiAgb3BlcmF0b3IgICAgOjo9IFwiK1wiXG5cbiAgICAgICAgICAgICAgICB8IFwiLVwiXG5cbiAgICAgICAgICAgICAgICB8IFwiL1wiXG5cbiAgICAgICAgICAgICAgICB8IFwiKlwiXG5cbiAgICAgICAgICAgICAgICA7XG5cbiAgdGVybSAgICAgICAgOjo9IC9cXFxcZCsvIDtcblxuICBleHByZXNzaW9uXyA6Oj0gXCIoXCIgZXhwcmVzc2lvbiBcIilcIlxuXG4gICAgICAgICAgICAgICAgfCB0ZXJtXG5cbiAgICAgICAgICAgICAgICA7XG5cbiAgZXhwcmVzc2lvbn4gOjo9IG9wZXJhdG9yIGV4cHJlc3Npb24gO1xuICBcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGJuZjsiXX0=