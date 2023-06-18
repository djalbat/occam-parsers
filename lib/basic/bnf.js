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
var bnf = '\n\n    expression  ::=  term... "." ;\n\n          term  ::=  "1" "+" "2" "/" term    (2)\n          \n                  |  "3"                     (1)\n                  \n                  |  "1" "+" term            (3) \n          \n                  |  "2" "/" "3"             (4)\n                  \n                  ;\n  \n';
var _default = bnf;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNpYy9ibmYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGJuZiA9IGBcblxuICAgIGV4cHJlc3Npb24gIDo6PSAgdGVybS4uLiBcIi5cIiA7XG5cbiAgICAgICAgICB0ZXJtICA6Oj0gIFwiMVwiIFwiK1wiIFwiMlwiIFwiL1wiIHRlcm0gICAgKDIpXG4gICAgICAgICAgXG4gICAgICAgICAgICAgICAgICB8ICBcIjNcIiAgICAgICAgICAgICAgICAgICAgICgxKVxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICB8ICBcIjFcIiBcIitcIiB0ZXJtICAgICAgICAgICAgKDMpIFxuICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgfCAgXCIyXCIgXCIvXCIgXCIzXCIgICAgICAgICAgICAgKDQpXG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDtcbiAgXG5gO1xuXG5leHBvcnQgZGVmYXVsdCBibmY7XG5cbiJdLCJuYW1lcyI6WyJibmYiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWtCQTs7O2VBQUE7OztBQWhCQSxJQUFNQSxNQUFPO0lBZ0JiLFdBQWVBIn0=