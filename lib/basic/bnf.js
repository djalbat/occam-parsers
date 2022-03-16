"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var bnf = "\n\n  expression  ::= expression_ operator expression expression~*\n\n                | expression_\n\n                ;\n\n  operator    ::= \"+\"\n\n                | \"-\"\n\n                | \"/\"\n\n                | \"*\"\n\n                ;\n\n  term        ::= /\\d+/ ;\n\n  expression_ ::= \"(\" expression \")\"\n\n                | term\n\n                ;\n\n  expression~ ::= operator expression ;\n  \n";
var _default = bnf;
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNpYy9ibmYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGJuZiA9IGBcblxuICBleHByZXNzaW9uICA6Oj0gZXhwcmVzc2lvbl8gb3BlcmF0b3IgZXhwcmVzc2lvbiBleHByZXNzaW9ufipcblxuICAgICAgICAgICAgICAgIHwgZXhwcmVzc2lvbl9cblxuICAgICAgICAgICAgICAgIDtcblxuICBvcGVyYXRvciAgICA6Oj0gXCIrXCJcblxuICAgICAgICAgICAgICAgIHwgXCItXCJcblxuICAgICAgICAgICAgICAgIHwgXCIvXCJcblxuICAgICAgICAgICAgICAgIHwgXCIqXCJcblxuICAgICAgICAgICAgICAgIDtcblxuICB0ZXJtICAgICAgICA6Oj0gL1xcXFxkKy8gO1xuXG4gIGV4cHJlc3Npb25fIDo6PSBcIihcIiBleHByZXNzaW9uIFwiKVwiXG5cbiAgICAgICAgICAgICAgICB8IHRlcm1cblxuICAgICAgICAgICAgICAgIDtcblxuICBleHByZXNzaW9ufiA6Oj0gb3BlcmF0b3IgZXhwcmVzc2lvbiA7XG4gIFxuYDtcblxuZXhwb3J0IGRlZmF1bHQgYm5mO1xuIl0sIm5hbWVzIjpbImJuZiJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWSxXQUFBLENBQUM7OztFQUFiO3dCQUFBO0FBRUEsR0FBSyxDQUFDQSxHQUFHLEdBQUksQ0E0QmI7ZUFFZUEsR0FBRzswQkFoQ2xCIn0=