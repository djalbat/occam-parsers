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
class TokensTextarea extends _textarea.default {
    setTokens(tokens) {
        let lineNumber = 1, previousToken = null;
        const html = tokens.reduce((html, token)=>{
            const tokenHTML = token.asHTML();
            if (previousToken === null) {
                html += `${lineNumber++}: `;
            } else {
                const previousTokenEndOfLineToken = previousToken.isEndOfLineToken();
                if (previousTokenEndOfLineToken) {
                    html += `${lineNumber++}: `;
                }
            }
            html += tokenHTML;
            previousToken = token;
            return html;
        }, _constants.EMPTY_STRING);
        this.html(html);
    }
    clearTokens() {
        const html = _constants.EMPTY_STRING;
        this.html(html);
    }
    parentContext() {
        const setTokens = this.setTokens.bind(this), clearTokens = this.clearTokens.bind(this);
        return {
            setTokens,
            clearTokens
        };
    }
    static defaultProperties = {
        className: "tokens",
        spellCheck: "false",
        readOnly: true
    };
}
const _default = (0, _easywithstyle.default)(TokensTextarea)`

  height: 12rem; 
  
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGV4dGFyZWEvdG9rZW5zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgVGV4dGFyZWEgZnJvbSBcIi4uL3RleHRhcmVhXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHNcIjtcblxuY2xhc3MgVG9rZW5zVGV4dGFyZWEgZXh0ZW5kcyBUZXh0YXJlYSB7XG4gIHNldFRva2Vucyh0b2tlbnMpIHtcbiAgICBsZXQgbGluZU51bWJlciA9IDEsXG4gICAgICAgIHByZXZpb3VzVG9rZW4gPSBudWxsO1xuXG4gICAgY29uc3QgaHRtbCA9IHRva2Vucy5yZWR1Y2UoKGh0bWwsIHRva2VuKSA9PiB7XG4gICAgICBjb25zdCB0b2tlbkhUTUwgPSB0b2tlbi5hc0hUTUwoKTtcblxuICAgICAgaWYgKHByZXZpb3VzVG9rZW4gPT09IG51bGwpIHtcbiAgICAgICAgaHRtbCArPSBgJHtsaW5lTnVtYmVyKyt9OiBgO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcHJldmlvdXNUb2tlbkVuZE9mTGluZVRva2VuID0gcHJldmlvdXNUb2tlbi5pc0VuZE9mTGluZVRva2VuKCk7XG5cbiAgICAgICAgaWYgKHByZXZpb3VzVG9rZW5FbmRPZkxpbmVUb2tlbikge1xuICAgICAgICAgIGh0bWwgKz0gYCR7bGluZU51bWJlcisrfTogYDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBodG1sICs9IHRva2VuSFRNTDtcblxuICAgICAgcHJldmlvdXNUb2tlbiA9IHRva2VuO1xuXG4gICAgICByZXR1cm4gaHRtbDtcbiAgICB9LCBFTVBUWV9TVFJJTkcpO1xuXG4gICAgdGhpcy5odG1sKGh0bWwpO1xuICB9XG5cbiAgY2xlYXJUb2tlbnMoKSB7XG4gICAgY29uc3QgaHRtbCA9IEVNUFRZX1NUUklORztcblxuICAgIHRoaXMuaHRtbChodG1sKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3Qgc2V0VG9rZW5zID0gdGhpcy5zZXRUb2tlbnMuYmluZCh0aGlzKSxcbiAgICAgICAgICBjbGVhclRva2VucyA9IHRoaXMuY2xlYXJUb2tlbnMuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgc2V0VG9rZW5zLFxuICAgICAgY2xlYXJUb2tlbnNcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidG9rZW5zXCIsXG4gICAgc3BlbGxDaGVjazogXCJmYWxzZVwiLFxuICAgIHJlYWRPbmx5OiB0cnVlXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShUb2tlbnNUZXh0YXJlYSlgXG5cbiAgaGVpZ2h0OiAxMnJlbTsgXG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJUb2tlbnNUZXh0YXJlYSIsIlRleHRhcmVhIiwic2V0VG9rZW5zIiwidG9rZW5zIiwibGluZU51bWJlciIsInByZXZpb3VzVG9rZW4iLCJodG1sIiwicmVkdWNlIiwidG9rZW4iLCJ0b2tlbkhUTUwiLCJhc0hUTUwiLCJwcmV2aW91c1Rva2VuRW5kT2ZMaW5lVG9rZW4iLCJpc0VuZE9mTGluZVRva2VuIiwiRU1QVFlfU1RSSU5HIiwiY2xlYXJUb2tlbnMiLCJwYXJlbnRDb250ZXh0IiwiYmluZCIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwic3BlbGxDaGVjayIsInJlYWRPbmx5Iiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkEyREE7OztlQUFBOzs7c0VBekRzQjtpRUFFRDsyQkFFUTs7Ozs7O0FBRTdCLE1BQU1BLHVCQUF1QkMsaUJBQVE7SUFDbkNDLFVBQVVDLE1BQU0sRUFBRTtRQUNoQixJQUFJQyxhQUFhLEdBQ2JDLGdCQUFnQjtRQUVwQixNQUFNQyxPQUFPSCxPQUFPSSxNQUFNLENBQUMsQ0FBQ0QsTUFBTUU7WUFDaEMsTUFBTUMsWUFBWUQsTUFBTUUsTUFBTTtZQUU5QixJQUFJTCxrQkFBa0IsTUFBTTtnQkFDMUJDLFFBQVEsR0FBR0YsYUFBYSxFQUFFLENBQUM7WUFDN0IsT0FBTztnQkFDTCxNQUFNTyw4QkFBOEJOLGNBQWNPLGdCQUFnQjtnQkFFbEUsSUFBSUQsNkJBQTZCO29CQUMvQkwsUUFBUSxHQUFHRixhQUFhLEVBQUUsQ0FBQztnQkFDN0I7WUFDRjtZQUVBRSxRQUFRRztZQUVSSixnQkFBZ0JHO1lBRWhCLE9BQU9GO1FBQ1QsR0FBR08sdUJBQVk7UUFFZixJQUFJLENBQUNQLElBQUksQ0FBQ0E7SUFDWjtJQUVBUSxjQUFjO1FBQ1osTUFBTVIsT0FBT08sdUJBQVk7UUFFekIsSUFBSSxDQUFDUCxJQUFJLENBQUNBO0lBQ1o7SUFFQVMsZ0JBQWdCO1FBQ2QsTUFBTWIsWUFBWSxJQUFJLENBQUNBLFNBQVMsQ0FBQ2MsSUFBSSxDQUFDLElBQUksR0FDcENGLGNBQWMsSUFBSSxDQUFDQSxXQUFXLENBQUNFLElBQUksQ0FBQyxJQUFJO1FBRTlDLE9BQVE7WUFDTmQ7WUFDQVk7UUFDRjtJQUNGO0lBRUEsT0FBT0csb0JBQW9CO1FBQ3pCQyxXQUFXO1FBQ1hDLFlBQVk7UUFDWkMsVUFBVTtJQUNaLEVBQUU7QUFDSjtNQUVBLFdBQWVDLElBQUFBLHNCQUFTLEVBQUNyQixlQUFlLENBQUM7Ozs7QUFJekMsQ0FBQyJ9