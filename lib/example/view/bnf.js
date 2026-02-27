"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return BNFView;
    }
});
const _occamlexers = require("occam-lexers");
const _index = require("../../index");
const _view = /*#__PURE__*/ _interop_require_default(require("../view"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { bnf } = _index.BNFParser;
class BNFView extends _view.default {
    static Lexer = _occamlexers.BNFLexer;
    static Parser = _index.BNFParser;
    static initialContent = bnf;
    getNode(tokens) {
        const { Parser } = this.constructor, parser = Parser.fromNothing(), node = parser.parse(tokens);
        return node;
    }
    static defaultProperties = {
        className: "bnf"
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvYm5mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBCTkZMZXhlciB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcbmltcG9ydCB7IEJORlBhcnNlciB9IGZyb20gXCIuLi8uLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCBWaWV3IGZyb20gXCIuLi92aWV3XCI7XG5cbmNvbnN0IHsgYm5mIH0gPSBCTkZQYXJzZXI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJORlZpZXcgZXh0ZW5kcyBWaWV3IHtcbiAgc3RhdGljIExleGVyID0gQk5GTGV4ZXI7XG5cbiAgc3RhdGljIFBhcnNlciA9IEJORlBhcnNlcjtcblxuICBzdGF0aWMgaW5pdGlhbENvbnRlbnQgPSBibmY7ICAvLy9cblxuICBnZXROb2RlKHRva2Vucykge1xuICAgIGNvbnN0IHsgUGFyc2VyIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIHBhcnNlciA9IFBhcnNlci5mcm9tTm90aGluZygpLFxuICAgICAgICAgIG5vZGUgPSBwYXJzZXIucGFyc2UodG9rZW5zKTtcblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJibmZcIlxuICB9O1xufVxuXG4iXSwibmFtZXMiOlsiQk5GVmlldyIsImJuZiIsIkJORlBhcnNlciIsIlZpZXciLCJMZXhlciIsIkJORkxleGVyIiwiUGFyc2VyIiwiaW5pdGlhbENvbnRlbnQiLCJnZXROb2RlIiwidG9rZW5zIiwicGFyc2VyIiwiZnJvbU5vdGhpbmciLCJub2RlIiwicGFyc2UiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFxQkE7Ozs2QkFQSTt1QkFDQzs2REFFVDs7Ozs7O0FBRWpCLE1BQU0sRUFBRUMsR0FBRyxFQUFFLEdBQUdDLGdCQUFTO0FBRVYsTUFBTUYsZ0JBQWdCRyxhQUFJO0lBQ3ZDLE9BQU9DLFFBQVFDLHFCQUFRLENBQUM7SUFFeEIsT0FBT0MsU0FBU0osZ0JBQVMsQ0FBQztJQUUxQixPQUFPSyxpQkFBaUJOLElBQUk7SUFFNUJPLFFBQVFDLE1BQU0sRUFBRTtRQUNkLE1BQU0sRUFBRUgsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFDN0JJLFNBQVNKLE9BQU9LLFdBQVcsSUFDM0JDLE9BQU9GLE9BQU9HLEtBQUssQ0FBQ0o7UUFFMUIsT0FBT0c7SUFDVDtJQUVBLE9BQU9FLG9CQUFvQjtRQUN6QkMsV0FBVztJQUNiLEVBQUU7QUFDSiJ9