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
const _easy = require("easy");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class RuleNameInput extends _easy.Input {
    getRuleName() {
        const value = this.getValue(), ruleName = value; ///
        return ruleName;
    }
    parentContext() {
        const getRuleName = this.getRuleName.bind(this);
        return {
            getRuleName
        };
    }
    static defaultProperties = {
        className: "rule-name",
        spellCheck: "false"
    };
}
const _default = (0, _easywithstyle.default)(RuleNameInput)`

  border: 1px solid darkgrey;
  padding: 0.25rem;
  font-size: 1.2rem;
  font-family: monospace;
  
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvaW5wdXQvcnVsZU5hbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IElucHV0IH0gZnJvbSBcImVhc3lcIjtcblxuY2xhc3MgUnVsZU5hbWVJbnB1dCBleHRlbmRzIElucHV0IHtcbiAgZ2V0UnVsZU5hbWUoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAgcnVsZU5hbWUgPSB2YWx1ZTsgLy8vXG5cbiAgICByZXR1cm4gcnVsZU5hbWU7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldFJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZS5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXRSdWxlTmFtZVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJydWxlLW5hbWVcIixcbiAgICBzcGVsbENoZWNrOiBcImZhbHNlXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFJ1bGVOYW1lSW5wdXQpYFxuXG4gIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtncmV5O1xuICBwYWRkaW5nOiAwLjI1cmVtO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbIlJ1bGVOYW1lSW5wdXQiLCJJbnB1dCIsImdldFJ1bGVOYW1lIiwidmFsdWUiLCJnZXRWYWx1ZSIsInJ1bGVOYW1lIiwicGFyZW50Q29udGV4dCIsImJpbmQiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInNwZWxsQ2hlY2siLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTRCQTs7O2VBQUE7OztzRUExQnNCO3NCQUVBOzs7Ozs7QUFFdEIsTUFBTUEsc0JBQXNCQyxXQUFLO0lBQy9CQyxjQUFjO1FBQ1osTUFBTUMsUUFBUSxJQUFJLENBQUNDLFFBQVEsSUFDckJDLFdBQVdGLE9BQU8sR0FBRztRQUUzQixPQUFPRTtJQUNUO0lBRUFDLGdCQUFnQjtRQUNkLE1BQU1KLGNBQWMsSUFBSSxDQUFDQSxXQUFXLENBQUNLLElBQUksQ0FBQyxJQUFJO1FBRTlDLE9BQVE7WUFDTkw7UUFDRjtJQUNGO0lBRUEsT0FBT00sb0JBQW9CO1FBQ3pCQyxXQUFXO1FBQ1hDLFlBQVk7SUFDZCxFQUFFO0FBQ0o7TUFFQSxXQUFlQyxJQUFBQSxzQkFBUyxFQUFDWCxjQUFjLENBQUM7Ozs7Ozs7QUFPeEMsQ0FBQyJ9