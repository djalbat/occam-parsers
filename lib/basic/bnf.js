"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var bnf = "\n\n  expression  ::= expression_ operator expression expression~*\n\n                | expression_\n\n                ;\n\n  operator    ::= \"+\"\n\n                | \"-\"\n\n                | \"/\"\n\n                | \"*\"\n\n                ;\n\n  term        ::= /d+/ ;\n\n  expression_ ::= \"(\" expression \")\"\n\n                | term\n\n                ;\n\n  expression~ ::= operator expression ;\n  \n";
var _default = bnf;
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNpYy9ibmYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGJuZiA9IGBcblxuICBleHByZXNzaW9uICA6Oj0gZXhwcmVzc2lvbl8gb3BlcmF0b3IgZXhwcmVzc2lvbiBleHByZXNzaW9ufipcblxuICAgICAgICAgICAgICAgIHwgZXhwcmVzc2lvbl9cblxuICAgICAgICAgICAgICAgIDtcblxuICBvcGVyYXRvciAgICA6Oj0gXCIrXCJcblxuICAgICAgICAgICAgICAgIHwgXCItXCJcblxuICAgICAgICAgICAgICAgIHwgXCIvXCJcblxuICAgICAgICAgICAgICAgIHwgXCIqXCJcblxuICAgICAgICAgICAgICAgIDtcblxuICB0ZXJtICAgICAgICA6Oj0gL1xcZCsvIDtcblxuICBleHByZXNzaW9uXyA6Oj0gXCIoXCIgZXhwcmVzc2lvbiBcIilcIlxuXG4gICAgICAgICAgICAgICAgfCB0ZXJtXG5cbiAgICAgICAgICAgICAgICA7XG5cbiAgZXhwcmVzc2lvbn4gOjo9IG9wZXJhdG9yIGV4cHJlc3Npb24gO1xuICBcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGJuZjsiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFTixHQUFHLElBQUksaWFBNEJiO2VBRWUsR0FBRyJ9