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
var bnf = '\n\n    term              ::= term_ term~* ;\n    \n    compoundTerm      ::= term_ term~* compoundTerm~term ;\n    \n    number            ::= /\\d+/ ;\n    \n    term_             ::= "(" term ")"\n    \n                        | number\n    \n                        ;\n    \n    term~compoundTerm ::= ε ;\n    \n    compoundTerm~term ::= "+" term (1) \n    \n                        | "-" term (2) \n                        \n                        | "/" term (3) \n                        \n                        | "*" term (4)\n                          \n                        ;\n    \n    term~             ::= compoundTerm~term compoundTerm~* term~compoundTerm ;\n    \n    compoundTerm~     ::= term~compoundTerm term~* compoundTerm~term ;\n  \n';
var _default = bnf;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNpYy9ibmYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGJuZiA9IGBcblxuICAgIHRlcm0gICAgICAgICAgICAgIDo6PSB0ZXJtXyB0ZXJtfiogO1xuICAgIFxuICAgIGNvbXBvdW5kVGVybSAgICAgIDo6PSB0ZXJtXyB0ZXJtfiogY29tcG91bmRUZXJtfnRlcm0gO1xuICAgIFxuICAgIG51bWJlciAgICAgICAgICAgIDo6PSAvXFxcXGQrLyA7XG4gICAgXG4gICAgdGVybV8gICAgICAgICAgICAgOjo9IFwiKFwiIHRlcm0gXCIpXCJcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHwgbnVtYmVyXG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA7XG4gICAgXG4gICAgdGVybX5jb21wb3VuZFRlcm0gOjo9IM61IDtcbiAgICBcbiAgICBjb21wb3VuZFRlcm1+dGVybSA6Oj0gXCIrXCIgdGVybSAoMSkgXG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB8IFwiLVwiIHRlcm0gKDIpIFxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB8IFwiL1wiIHRlcm0gKDMpIFxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB8IFwiKlwiIHRlcm0gKDQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgO1xuICAgIFxuICAgIHRlcm1+ICAgICAgICAgICAgIDo6PSBjb21wb3VuZFRlcm1+dGVybSBjb21wb3VuZFRlcm1+KiB0ZXJtfmNvbXBvdW5kVGVybSA7XG4gICAgXG4gICAgY29tcG91bmRUZXJtfiAgICAgOjo9IHRlcm1+Y29tcG91bmRUZXJtIHRlcm1+KiBjb21wb3VuZFRlcm1+dGVybSA7XG4gIFxuYDtcblxuZXhwb3J0IGRlZmF1bHQgYm5mO1xuIl0sIm5hbWVzIjpbImJuZiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBa0NBOzs7ZUFBQTs7O0FBaENBLElBQU1BLE1BQU87SUFnQ2IsV0FBZUEifQ==