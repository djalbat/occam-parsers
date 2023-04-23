"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "tokenAsHTML", {
    enumerable: true,
    get: function() {
        return tokenAsHTML;
    }
});
function tokenAsHTML(token) {
    var type = token.getType(), content = token.getContent(), className = type, html = '<span class="'.concat(className, '">').concat(content, "</span>");
    return html;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3V0aWxpdGllcy90b2tlbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHRva2VuQXNIVE1MKHRva2VuKSB7XG4gIGNvbnN0IHR5cGUgPSB0b2tlbi5nZXRUeXBlKCksXG4gICAgICAgIGNvbnRlbnQgPSB0b2tlbi5nZXRDb250ZW50KCksXG4gICAgICAgIGNsYXNzTmFtZSA9IHR5cGUsIC8vL1xuICAgICAgICBodG1sID0gYDxzcGFuIGNsYXNzPVwiJHtjbGFzc05hbWV9XCI+JHtjb250ZW50fTwvc3Bhbj5gO1xuXG4gICAgcmV0dXJuIGh0bWw7XG59XG4iXSwibmFtZXMiOlsidG9rZW5Bc0hUTUwiLCJ0b2tlbiIsInR5cGUiLCJnZXRUeXBlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJjbGFzc05hbWUiLCJodG1sIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFFZ0JBOzs7ZUFBQUE7OztBQUFULFNBQVNBLFlBQVlDLEtBQUssRUFBRTtJQUNqQyxJQUFNQyxPQUFPRCxNQUFNRSxPQUFPLElBQ3BCQyxVQUFVSCxNQUFNSSxVQUFVLElBQzFCQyxZQUFZSixNQUNaSyxPQUFPLEFBQUMsZ0JBQTZCSCxPQUFkRSxXQUFVLE1BQVksT0FBUkYsU0FBUTtJQUVqRCxPQUFPRztBQUNYIn0=