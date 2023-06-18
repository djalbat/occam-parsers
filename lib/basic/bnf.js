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
var bnf = '\n\n    term              ::= term_ term~* ;\n    \n    compoundTerm      ::= term_ term~* compoundTerm~term ;\n    \n    number            ::= /\\d+/ ;\n    \n    term_             ::= "(" term ")"\n    \n                        | number\n    \n                        ;\n    \n    term~compoundTerm ::= ε ;\n    \n    compoundTerm~term ::= ( \n    \n                            "+" (1) | \n                            \n                            "-" (2) | \n                            \n                            "/" (3) | \n                            \n                            "*" (4)\n                          \n                          ) term ;\n    \n    term~             ::= compoundTerm~term compoundTerm~* term~compoundTerm ;\n    \n    compoundTerm~     ::= term~compoundTerm term~* compoundTerm~term ;\n  \n';
var _default = bnf;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNpYy9ibmYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGJuZiA9IGBcblxuICAgIHRlcm0gICAgICAgICAgICAgIDo6PSB0ZXJtXyB0ZXJtfiogO1xuICAgIFxuICAgIGNvbXBvdW5kVGVybSAgICAgIDo6PSB0ZXJtXyB0ZXJtfiogY29tcG91bmRUZXJtfnRlcm0gO1xuICAgIFxuICAgIG51bWJlciAgICAgICAgICAgIDo6PSAvXFxcXGQrLyA7XG4gICAgXG4gICAgdGVybV8gICAgICAgICAgICAgOjo9IFwiKFwiIHRlcm0gXCIpXCJcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHwgbnVtYmVyXG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA7XG4gICAgXG4gICAgdGVybX5jb21wb3VuZFRlcm0gOjo9IM61IDtcbiAgICBcbiAgICBjb21wb3VuZFRlcm1+dGVybSA6Oj0gKCBcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIitcIiAoMSkgfCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi1cIiAoMikgfCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi9cIiAoMykgfCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIipcIiAoNClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkgdGVybSA7XG4gICAgXG4gICAgdGVybX4gICAgICAgICAgICAgOjo9IGNvbXBvdW5kVGVybX50ZXJtIGNvbXBvdW5kVGVybX4qIHRlcm1+Y29tcG91bmRUZXJtIDtcbiAgICBcbiAgICBjb21wb3VuZFRlcm1+ICAgICA6Oj0gdGVybX5jb21wb3VuZFRlcm0gdGVybX4qIGNvbXBvdW5kVGVybX50ZXJtIDtcbiAgXG5gO1xuXG5leHBvcnQgZGVmYXVsdCBibmY7XG4iXSwibmFtZXMiOlsiYm5mIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFvQ0E7OztlQUFBOzs7QUFsQ0EsSUFBTUEsTUFBTztJQWtDYixXQUFlQSJ9