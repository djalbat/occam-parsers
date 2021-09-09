"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var bnf = "\n\n  expression  ::= expression_ operator expression expression~*\n\n                | expression_\n\n                ;\n\n  operator    ::= \"+\"\n\n                | \"-\"\n\n                | \"/\"\n\n                | \"*\"\n\n                ;\n\n  term        ::= /\\d+/ ;\n\n  expression_ ::= \"(\" expression \")\"\n\n                | term\n\n                ;\n\n  expression~ ::= operator expression ;\n  \n";
var _default = bnf;
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNpYy9ibmYuanMiXSwibmFtZXMiOlsiYm5mIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVaLEdBQUssQ0FBQyxHQUFHLElBQUksbWFBNEJiO2VBRWUsR0FBRyJ9