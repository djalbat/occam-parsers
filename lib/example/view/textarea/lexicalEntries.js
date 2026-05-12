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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class LexicalEntriesTextarea extends _textarea.default {
    getLexicalEntries() {
        const value = this.getValue(), jsonString = value, json = JSON.parse(jsonString), lexicalEntries = json; ///
        return lexicalEntries;
    }
    setLexicalEntries(lexicalEntries) {
        const json = lexicalEntries, jsonString = JSON.stringify(json, null, 2), value = jsonString; ///
        this.setValue(value);
    }
    parentContext() {
        const getLexicalEntries = this.getLexicalEntries.bind(this), setLexicalEntries = this.setLexicalEntries.bind(this);
        return {
            getLexicalEntries,
            setLexicalEntries
        };
    }
    static defaultProperties = {
        className: "lexical-entries",
        spellCheck: "false"
    };
}
const _default = (0, _easywithstyle.default)(LexicalEntriesTextarea)`

  height: 12rem;
  
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGV4dGFyZWEvbGV4aWNhbEVudHJpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCBUZXh0YXJlYSBmcm9tIFwiLi4vdGV4dGFyZWFcIjtcblxuY2xhc3MgTGV4aWNhbEVudHJpZXNUZXh0YXJlYSBleHRlbmRzIFRleHRhcmVhIHtcbiAgZ2V0TGV4aWNhbEVudHJpZXMoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAganNvblN0cmluZyA9IHZhbHVlLCAvLy9cbiAgICAgICAgICBqc29uID0gSlNPTi5wYXJzZShqc29uU3RyaW5nKSxcbiAgICAgICAgICBsZXhpY2FsRW50cmllcyA9IGpzb247ICAvLy9cblxuICAgIHJldHVybiBsZXhpY2FsRW50cmllcztcbiAgfVxuXG4gIHNldExleGljYWxFbnRyaWVzKGxleGljYWxFbnRyaWVzKSB7XG4gICAgY29uc3QganNvbiA9IGxleGljYWxFbnRyaWVzLFxuICAgICAgICAgIGpzb25TdHJpbmcgPSBKU09OLnN0cmluZ2lmeShqc29uLCBudWxsLCAyKSxcbiAgICAgICAgICB2YWx1ZSA9IGpzb25TdHJpbmc7IC8vL1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldExleGljYWxFbnRyaWVzID0gdGhpcy5nZXRMZXhpY2FsRW50cmllcy5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNldExleGljYWxFbnRyaWVzID0gdGhpcy5zZXRMZXhpY2FsRW50cmllcy5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXRMZXhpY2FsRW50cmllcyxcbiAgICAgIHNldExleGljYWxFbnRyaWVzXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImxleGljYWwtZW50cmllc1wiLFxuICAgIHNwZWxsQ2hlY2s6IFwiZmFsc2VcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoTGV4aWNhbEVudHJpZXNUZXh0YXJlYSlgXG5cbiAgaGVpZ2h0OiAxMnJlbTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbIkxleGljYWxFbnRyaWVzVGV4dGFyZWEiLCJUZXh0YXJlYSIsImdldExleGljYWxFbnRyaWVzIiwidmFsdWUiLCJnZXRWYWx1ZSIsImpzb25TdHJpbmciLCJqc29uIiwiSlNPTiIsInBhcnNlIiwibGV4aWNhbEVudHJpZXMiLCJzZXRMZXhpY2FsRW50cmllcyIsInN0cmluZ2lmeSIsInNldFZhbHVlIiwicGFyZW50Q29udGV4dCIsImJpbmQiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInNwZWxsQ2hlY2siLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXdDQTs7O2VBQUE7OztzRUF0Q3NCO2lFQUVEOzs7Ozs7QUFFckIsTUFBTUEsK0JBQStCQyxpQkFBUTtJQUMzQ0Msb0JBQW9CO1FBQ2xCLE1BQU1DLFFBQVEsSUFBSSxDQUFDQyxRQUFRLElBQ3JCQyxhQUFhRixPQUNiRyxPQUFPQyxLQUFLQyxLQUFLLENBQUNILGFBQ2xCSSxpQkFBaUJILE1BQU8sR0FBRztRQUVqQyxPQUFPRztJQUNUO0lBRUFDLGtCQUFrQkQsY0FBYyxFQUFFO1FBQ2hDLE1BQU1ILE9BQU9HLGdCQUNQSixhQUFhRSxLQUFLSSxTQUFTLENBQUNMLE1BQU0sTUFBTSxJQUN4Q0gsUUFBUUUsWUFBWSxHQUFHO1FBRTdCLElBQUksQ0FBQ08sUUFBUSxDQUFDVDtJQUNoQjtJQUVBVSxnQkFBZ0I7UUFDZCxNQUFNWCxvQkFBb0IsSUFBSSxDQUFDQSxpQkFBaUIsQ0FBQ1ksSUFBSSxDQUFDLElBQUksR0FDcERKLG9CQUFvQixJQUFJLENBQUNBLGlCQUFpQixDQUFDSSxJQUFJLENBQUMsSUFBSTtRQUUxRCxPQUFRO1lBQ05aO1lBQ0FRO1FBQ0Y7SUFDRjtJQUVBLE9BQU9LLG9CQUFvQjtRQUN6QkMsV0FBVztRQUNYQyxZQUFZO0lBQ2QsRUFBRTtBQUNKO01BRUEsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ2xCLHVCQUF1QixDQUFDOzs7O0FBSWpELENBQUMifQ==