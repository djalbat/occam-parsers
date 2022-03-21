"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var bnf = "\n\n  expression  ::= expression_ operator expression expression~*\n\n                 | expression_\n\n                 ;\n\n  operator     ::= \"+\"\n\n                 | \"-\"\n\n                 | \"/\"\n\n                 | \"*\"\n\n                 ;\n\n  term         ::= /\\d+/ ;\n\n  expression_  ::= \"(\" expression \")\"\n\n                 | term\n\n                 ;\n\n  expression~  ::= operator expression ;\n  \n";
var _default = bnf;
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNpYy9ibmYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGJuZiA9IGBcblxuICBleHByZXNzaW9uICA6Oj0gZXhwcmVzc2lvbl8gb3BlcmF0b3IgZXhwcmVzc2lvbiBleHByZXNzaW9ufipcblxuICAgICAgICAgICAgICAgICB8IGV4cHJlc3Npb25fXG5cbiAgICAgICAgICAgICAgICAgO1xuXG4gIG9wZXJhdG9yICAgICA6Oj0gXCIrXCJcblxuICAgICAgICAgICAgICAgICB8IFwiLVwiXG5cbiAgICAgICAgICAgICAgICAgfCBcIi9cIlxuXG4gICAgICAgICAgICAgICAgIHwgXCIqXCJcblxuICAgICAgICAgICAgICAgICA7XG5cbiAgdGVybSAgICAgICAgIDo6PSAvXFxcXGQrLyA7XG5cbiAgZXhwcmVzc2lvbl8gIDo6PSBcIihcIiBleHByZXNzaW9uIFwiKVwiXG5cbiAgICAgICAgICAgICAgICAgfCB0ZXJtXG5cbiAgICAgICAgICAgICAgICAgO1xuXG4gIGV4cHJlc3Npb25+ICA6Oj0gb3BlcmF0b3IgZXhwcmVzc2lvbiA7XG4gIFxuYDtcblxuZXhwb3J0IGRlZmF1bHQgYm5mO1xuIl0sIm5hbWVzIjpbImJuZiJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7RUFBYjt3QkFBQTtBQUVBLElBQU1BLEdBQUcsR0FBSSxpYkE0QmIsQUFBQyxBQUFDO2VBRWFBLEdBQUc7MEJBaENsQiJ9