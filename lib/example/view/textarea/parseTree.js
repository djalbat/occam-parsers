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
const _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
const _textarea = /*#__PURE__*/ _interop_require_default(require("../textarea"));
const _constants = require("../../../constants");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class ParseTreeTextarea extends _textarea.default {
    setParseTree(parseTree) {
        if (parseTree !== null) {
            parseTree.shiftLine(); //
            const parseTreeString = parseTree.asString(), value = parseTreeString; ///
            this.setValue(value);
        } else {
            this.clearParseTree();
        }
    }
    clearParseTree() {
        const value = _constants.EMPTY_STRING;
        this.setValue(value);
    }
    parentContext() {
        const setParseTree = this.setParseTree.bind(this), clearParseTree = this.clearParseTree.bind(this);
        return {
            setParseTree,
            clearParseTree
        };
    }
    static defaultProperties = {
        className: "tokens",
        spellCheck: "false",
        readOnly: true
    };
}
const _default = (0, _easywithstyle.default)(ParseTreeTextarea)`

  height: 48rem;
  
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGV4dGFyZWEvcGFyc2VUcmVlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjtcblxuaW1wb3J0IFRleHRhcmVhIGZyb20gXCIuLi90ZXh0YXJlYVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzXCI7XG5cbmNsYXNzIFBhcnNlVHJlZVRleHRhcmVhIGV4dGVuZHMgVGV4dGFyZWEge1xuICBzZXRQYXJzZVRyZWUocGFyc2VUcmVlKSB7XG4gICAgaWYgKHBhcnNlVHJlZSAhPT0gbnVsbCkge1xuICAgICAgcGFyc2VUcmVlLnNoaWZ0TGluZSgpOyAgLy9cblxuICAgICAgY29uc3QgcGFyc2VUcmVlU3RyaW5nID0gcGFyc2VUcmVlLmFzU3RyaW5nKCksXG4gICAgICAgICAgICB2YWx1ZSA9IHBhcnNlVHJlZVN0cmluZzsgIC8vL1xuXG4gICAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbGVhclBhcnNlVHJlZSgpO1xuICAgIH1cbiAgfVxuXG4gIGNsZWFyUGFyc2VUcmVlKCkge1xuICAgIGNvbnN0IHZhbHVlID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IHNldFBhcnNlVHJlZSA9IHRoaXMuc2V0UGFyc2VUcmVlLmJpbmQodGhpcyksXG4gICAgICAgICAgY2xlYXJQYXJzZVRyZWUgPSB0aGlzLmNsZWFyUGFyc2VUcmVlLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIHNldFBhcnNlVHJlZSxcbiAgICAgIGNsZWFyUGFyc2VUcmVlXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInRva2Vuc1wiLFxuICAgIHNwZWxsQ2hlY2s6IFwiZmFsc2VcIixcbiAgICByZWFkT25seTogdHJ1ZVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoUGFyc2VUcmVlVGV4dGFyZWEpYFxuXG4gIGhlaWdodDogNDhyZW07XG4gIFxuYDtcblxuIl0sIm5hbWVzIjpbIlBhcnNlVHJlZVRleHRhcmVhIiwiVGV4dGFyZWEiLCJzZXRQYXJzZVRyZWUiLCJwYXJzZVRyZWUiLCJzaGlmdExpbmUiLCJwYXJzZVRyZWVTdHJpbmciLCJhc1N0cmluZyIsInZhbHVlIiwic2V0VmFsdWUiLCJjbGVhclBhcnNlVHJlZSIsIkVNUFRZX1NUUklORyIsInBhcmVudENvbnRleHQiLCJiaW5kIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIiwicmVhZE9ubHkiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTZDQTs7O2VBQUE7OztzRUEzQ3NCO2lFQUVEOzJCQUVROzs7Ozs7QUFFN0IsTUFBTUEsMEJBQTBCQyxpQkFBUTtJQUN0Q0MsYUFBYUMsU0FBUyxFQUFFO1FBQ3RCLElBQUlBLGNBQWMsTUFBTTtZQUN0QkEsVUFBVUMsU0FBUyxJQUFLLEVBQUU7WUFFMUIsTUFBTUMsa0JBQWtCRixVQUFVRyxRQUFRLElBQ3BDQyxRQUFRRixpQkFBa0IsR0FBRztZQUVuQyxJQUFJLENBQUNHLFFBQVEsQ0FBQ0Q7UUFDaEIsT0FBTztZQUNMLElBQUksQ0FBQ0UsY0FBYztRQUNyQjtJQUNGO0lBRUFBLGlCQUFpQjtRQUNmLE1BQU1GLFFBQVFHLHVCQUFZO1FBRTFCLElBQUksQ0FBQ0YsUUFBUSxDQUFDRDtJQUNoQjtJQUVBSSxnQkFBZ0I7UUFDZCxNQUFNVCxlQUFlLElBQUksQ0FBQ0EsWUFBWSxDQUFDVSxJQUFJLENBQUMsSUFBSSxHQUMxQ0gsaUJBQWlCLElBQUksQ0FBQ0EsY0FBYyxDQUFDRyxJQUFJLENBQUMsSUFBSTtRQUVwRCxPQUFRO1lBQ05WO1lBQ0FPO1FBQ0Y7SUFDRjtJQUVBLE9BQU9JLG9CQUFvQjtRQUN6QkMsV0FBVztRQUNYQyxZQUFZO1FBQ1pDLFVBQVU7SUFDWixFQUFFO0FBQ0o7TUFFQSxXQUFlQyxJQUFBQSxzQkFBUyxFQUFDakIsa0JBQWtCLENBQUM7Ozs7QUFJNUMsQ0FBQyJ9