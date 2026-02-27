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
class BNFTextarea extends _textarea.default {
    getBNF() {
        const value = this.getValue(), bnf = value; ///
        return bnf;
    }
    setBNF(bnf) {
        const value = bnf;
        this.setValue(value);
    }
    parentContext() {
        const getBNF = this.getBNF.bind(this), setBNF = this.setBNF.bind(this);
        return {
            getBNF,
            setBNF
        };
    }
    static defaultProperties = {
        className: "bnf",
        spellCheck: "false"
    };
}
const _default = (0, _easywithstyle.default)(BNFTextarea)`

  height: 64rem;
  
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGV4dGFyZWEvYm5mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgVGV4dGFyZWEgZnJvbSBcIi4uL3RleHRhcmVhXCI7XG5cbmNsYXNzIEJORlRleHRhcmVhIGV4dGVuZHMgVGV4dGFyZWEge1xuICBnZXRCTkYoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAgYm5mID0gdmFsdWU7IC8vL1xuXG4gICAgcmV0dXJuIGJuZjtcbiAgfVxuXG4gIHNldEJORihibmYpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGJuZjtcblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBnZXRCTkYgPSB0aGlzLmdldEJORi5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNldEJORiA9IHRoaXMuc2V0Qk5GLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldEJORixcbiAgICAgIHNldEJORlxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJibmZcIixcbiAgICBzcGVsbENoZWNrOiBcImZhbHNlXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEJORlRleHRhcmVhKWBcblxuICBoZWlnaHQ6IDY0cmVtO1xuICBcbmA7XG5cbiJdLCJuYW1lcyI6WyJCTkZUZXh0YXJlYSIsIlRleHRhcmVhIiwiZ2V0Qk5GIiwidmFsdWUiLCJnZXRWYWx1ZSIsImJuZiIsInNldEJORiIsInNldFZhbHVlIiwicGFyZW50Q29udGV4dCIsImJpbmQiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInNwZWxsQ2hlY2siLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQW9DQTs7O2VBQUE7OztzRUFsQ3NCO2lFQUVEOzs7Ozs7QUFFckIsTUFBTUEsb0JBQW9CQyxpQkFBUTtJQUNoQ0MsU0FBUztRQUNQLE1BQU1DLFFBQVEsSUFBSSxDQUFDQyxRQUFRLElBQ3JCQyxNQUFNRixPQUFPLEdBQUc7UUFFdEIsT0FBT0U7SUFDVDtJQUVBQyxPQUFPRCxHQUFHLEVBQUU7UUFDVixNQUFNRixRQUFRRTtRQUVkLElBQUksQ0FBQ0UsUUFBUSxDQUFDSjtJQUNoQjtJQUVBSyxnQkFBZ0I7UUFDZCxNQUFNTixTQUFTLElBQUksQ0FBQ0EsTUFBTSxDQUFDTyxJQUFJLENBQUMsSUFBSSxHQUM5QkgsU0FBUyxJQUFJLENBQUNBLE1BQU0sQ0FBQ0csSUFBSSxDQUFDLElBQUk7UUFFcEMsT0FBUTtZQUNOUDtZQUNBSTtRQUNGO0lBQ0Y7SUFFQSxPQUFPSSxvQkFBb0I7UUFDekJDLFdBQVc7UUFDWEMsWUFBWTtJQUNkLEVBQUU7QUFDSjtNQUVBLFdBQWVDLElBQUFBLHNCQUFTLEVBQUNiLFlBQVksQ0FBQzs7OztBQUl0QyxDQUFDIn0=