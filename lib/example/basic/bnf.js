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
var bnf = '\n  \n  S   ::= A... <END_OF_LINE> ;\n  \n  A   ::= T ":" . ;\n  \n  T   ::= T_ T~* ;\n  \n  B   ::= T_ T~* B~T ;\n  \n  V   ::= . ;\n  \n  T_  ::= V ;\n  \n  T~B ::= ":" B ;\n  \n  B~T ::= ε ;\n  \n  T~  ::= B~T B~* T~B ;\n  \n  B~  ::= T~B T~* B~T ;\n\n';
var _default = bnf;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2Jhc2ljL2JuZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgYm5mID0gYFxuICBcbiAgUyAgIDo6PSBBLi4uIDxFTkRfT0ZfTElORT4gO1xuICBcbiAgQSAgIDo6PSBUIFwiOlwiIC4gO1xuICBcbiAgVCAgIDo6PSBUXyBUfiogO1xuICBcbiAgQiAgIDo6PSBUXyBUfiogQn5UIDtcbiAgXG4gIFYgICA6Oj0gLiA7XG4gIFxuICBUXyAgOjo9IFYgO1xuICBcbiAgVH5CIDo6PSBcIjpcIiBCIDtcbiAgXG4gIEJ+VCA6Oj0gzrUgO1xuICBcbiAgVH4gIDo6PSBCflQgQn4qIFR+QiA7XG4gIFxuICBCfiAgOjo9IFR+QiBUfiogQn5UIDtcblxuYDtcblxuZXhwb3J0IGRlZmF1bHQgYm5mO1xuIl0sIm5hbWVzIjpbImJuZiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBMEJBOzs7ZUFBQTs7O0FBeEJBLElBQU1BLE1BQU87SUF3QmIsV0FBZUEifQ==