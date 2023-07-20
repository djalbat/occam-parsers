"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Definition;
    }
});
var _parse = require("./utilities/parse");
var _constants = require("./constants");
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var Definition = /*#__PURE__*/ function() {
    function Definition(parts, precedence) {
        _class_call_check(this, Definition);
        this.parts = parts;
        this.precedence = precedence;
    }
    _create_class(Definition, [
        {
            key: "getParts",
            value: function getParts() {
                return this.parts;
            }
        },
        {
            key: "getPrecedence",
            value: function getPrecedence() {
                return this.precedence;
            }
        },
        {
            key: "parse",
            value: function parse(childNodes, state, callback, callAhead) {
                var parsed;
                var nodes = childNodes, savedIndex = state.getSavedIndex(), nodesLength = nodes.length;
                parsed = (0, _parse.parseParts)(this.parts, nodes, state, callback, callAhead);
                if (!parsed) {
                    var start = nodesLength; ///
                    nodes.splice(start);
                    state.backtrack(savedIndex);
                }
                return parsed;
            }
        },
        {
            key: "asString",
            value: function asString() {
                var partsString = this.parts.reduce(function(partsString, part) {
                    var partString = part.asString();
                    if (partsString === _constants.EMPTY_STRING) {
                        partsString = partString; ///
                    } else {
                        partsString = "".concat(partsString, " ").concat(partString);
                    }
                    return partsString;
                }, _constants.EMPTY_STRING), string = this.precedence !== null ? "".concat(partsString, " (").concat(this.precedence, ")") : partsString; ///
                return string;
            }
        }
    ], [
        {
            key: "fromParts",
            value: function fromParts(Class, parts) {
                if (parts === undefined) {
                    parts = Class; ///
                    Class = Definition; ///
                }
                var precedence = null, definition = new Class(parts, precedence);
                return definition;
            }
        },
        {
            key: "fromPartsAndPrecedence",
            value: function fromPartsAndPrecedence(Class, parts, precedence) {
                if (precedence === undefined) {
                    precedence = parts; ///
                    parts = Class; ///
                    Class = Definition; ///
                }
                var definition = new Class(parts, precedence);
                return definition;
            }
        }
    ]);
    return Definition;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWZpbml0aW9uLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwYXJzZVBhcnRzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3BhcnNlXCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzLCBwcmVjZWRlbmNlKSB7XG4gICAgdGhpcy5wYXJ0cyA9IHBhcnRzO1xuICAgIHRoaXMucHJlY2VkZW5jZSA9IHByZWNlZGVuY2U7XG4gIH1cblxuICBnZXRQYXJ0cygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJ0cztcbiAgfVxuXG4gIGdldFByZWNlZGVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlY2VkZW5jZTtcbiAgfVxuXG4gIHBhcnNlKGNoaWxkTm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKSB7XG4gICAgbGV0IHBhcnNlZDtcblxuICAgIGNvbnN0IG5vZGVzID0gY2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgc2F2ZWRJbmRleCA9IHN0YXRlLmdldFNhdmVkSW5kZXgoKSxcbiAgICAgICAgICBub2Rlc0xlbmd0aCA9IG5vZGVzLmxlbmd0aDtcblxuICAgIHBhcnNlZCA9IHBhcnNlUGFydHModGhpcy5wYXJ0cywgbm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKTtcblxuICAgIGlmICghcGFyc2VkKSB7XG4gICAgICBjb25zdCBzdGFydCA9IG5vZGVzTGVuZ3RoOyAgLy8vXG5cbiAgICAgIG5vZGVzLnNwbGljZShzdGFydCk7XG5cbiAgICAgIHN0YXRlLmJhY2t0cmFjayhzYXZlZEluZGV4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgcGFydHNTdHJpbmcgPSB0aGlzLnBhcnRzLnJlZHVjZSgocGFydHNTdHJpbmcsIHBhcnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnRTdHJpbmcgPSBwYXJ0LmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIGlmIChwYXJ0c1N0cmluZyA9PT0gRU1QVFlfU1RSSU5HKSB7XG4gICAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gcGFydFN0cmluZzsgLy8vXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwYXJ0c1N0cmluZyA9IGAke3BhcnRzU3RyaW5nfSAke3BhcnRTdHJpbmd9YDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHBhcnRzU3RyaW5nO1xuICAgICAgICAgIH0sIEVNUFRZX1NUUklORyksXG4gICAgICAgICAgc3RyaW5nID0gKHRoaXMucHJlY2VkZW5jZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgYCR7cGFydHNTdHJpbmd9ICgke3RoaXMucHJlY2VkZW5jZX0pYCA6XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0c1N0cmluZzsgLy8vXG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21QYXJ0cyhDbGFzcywgcGFydHMpIHtcbiAgICBpZiAocGFydHMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcGFydHMgPSBDbGFzczsgIC8vL1xuXG4gICAgICBDbGFzcyA9IERlZmluaXRpb247IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IHByZWNlZGVuY2UgPSBudWxsLFxuICAgICAgICAgIGRlZmluaXRpb24gPSBuZXcgQ2xhc3MocGFydHMsIHByZWNlZGVuY2UpO1xuXG4gICAgcmV0dXJuIGRlZmluaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVBhcnRzQW5kUHJlY2VkZW5jZShDbGFzcywgcGFydHMsIHByZWNlZGVuY2UpIHtcbiAgICBpZiAocHJlY2VkZW5jZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBwcmVjZWRlbmNlID0gcGFydHM7IC8vL1xuXG4gICAgICBwYXJ0cyA9IENsYXNzOyAgLy8vXG5cbiAgICAgIENsYXNzID0gRGVmaW5pdGlvbjsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgZGVmaW5pdGlvbiA9IG5ldyBDbGFzcyhwYXJ0cywgcHJlY2VkZW5jZSk7XG5cbiAgICByZXR1cm4gZGVmaW5pdGlvbjtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJEZWZpbml0aW9uIiwicGFydHMiLCJwcmVjZWRlbmNlIiwiZ2V0UGFydHMiLCJnZXRQcmVjZWRlbmNlIiwicGFyc2UiLCJjaGlsZE5vZGVzIiwic3RhdGUiLCJjYWxsYmFjayIsImNhbGxBaGVhZCIsInBhcnNlZCIsIm5vZGVzIiwic2F2ZWRJbmRleCIsImdldFNhdmVkSW5kZXgiLCJub2Rlc0xlbmd0aCIsImxlbmd0aCIsInBhcnNlUGFydHMiLCJzdGFydCIsInNwbGljZSIsImJhY2t0cmFjayIsImFzU3RyaW5nIiwicGFydHNTdHJpbmciLCJyZWR1Y2UiLCJwYXJ0IiwicGFydFN0cmluZyIsIkVNUFRZX1NUUklORyIsInN0cmluZyIsImZyb21QYXJ0cyIsIkNsYXNzIiwidW5kZWZpbmVkIiwiZGVmaW5pdGlvbiIsImZyb21QYXJ0c0FuZFByZWNlZGVuY2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBS3FCQTs7O3FCQUhNO3lCQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVkLElBQUEsQUFBTUEsMkJBQU47YUFBTUEsV0FDUEMsS0FBSyxFQUFFQyxVQUFVO2dDQURWRjtRQUVqQixJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLFVBQVUsR0FBR0E7O2tCQUhERjs7WUFNbkJHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsS0FBSztZQUNuQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsVUFBVTtZQUN4Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxVQUFVLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFQyxTQUFTO2dCQUMxQyxJQUFJQztnQkFFSixJQUFNQyxRQUFRTCxZQUNSTSxhQUFhTCxNQUFNTSxhQUFhLElBQ2hDQyxjQUFjSCxNQUFNSSxNQUFNO2dCQUVoQ0wsU0FBU00sSUFBQUEsaUJBQVUsRUFBQyxJQUFJLENBQUNmLEtBQUssRUFBRVUsT0FBT0osT0FBT0MsVUFBVUM7Z0JBRXhELElBQUksQ0FBQ0MsUUFBUTtvQkFDWCxJQUFNTyxRQUFRSCxhQUFjLEdBQUc7b0JBRS9CSCxNQUFNTyxNQUFNLENBQUNEO29CQUViVixNQUFNWSxTQUFTLENBQUNQO2dCQUNsQjtnQkFFQSxPQUFPRjtZQUNUOzs7WUFFQVUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGNBQWMsSUFBSSxDQUFDcEIsS0FBSyxDQUFDcUIsTUFBTSxDQUFDLFNBQUNELGFBQWFFO29CQUM1QyxJQUFNQyxhQUFhRCxLQUFLSCxRQUFRO29CQUVoQyxJQUFJQyxnQkFBZ0JJLHVCQUFZLEVBQUU7d0JBQ2hDSixjQUFjRyxZQUFZLEdBQUc7b0JBQy9CLE9BQU87d0JBQ0xILGNBQWMsQUFBQyxHQUFpQkcsT0FBZkgsYUFBWSxLQUFjLE9BQVhHO29CQUNsQztvQkFFQSxPQUFPSDtnQkFDVCxHQUFHSSx1QkFBWSxHQUNmQyxTQUFTLEFBQUMsSUFBSSxDQUFDeEIsVUFBVSxLQUFLLE9BQ25CLEFBQUMsR0FBa0IsT0FBaEJtQixhQUFZLE1BQW9CLE9BQWhCLElBQUksQ0FBQ25CLFVBQVUsRUFBQyxPQUNoQ21CLGFBQWEsR0FBRztnQkFFcEMsT0FBT0s7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxVQUFVQyxLQUFLLEVBQUUzQixLQUFLO2dCQUMzQixJQUFJQSxVQUFVNEIsV0FBVztvQkFDdkI1QixRQUFRMkIsT0FBUSxHQUFHO29CQUVuQkEsUUF6RGU1QixZQXlESyxHQUFHO2dCQUN6QjtnQkFFQSxJQUFNRSxhQUFhLE1BQ2I0QixhQUFhLElBQUlGLE1BQU0zQixPQUFPQztnQkFFcEMsT0FBTzRCO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSx1QkFBdUJILEtBQUssRUFBRTNCLEtBQUssRUFBRUMsVUFBVTtnQkFDcEQsSUFBSUEsZUFBZTJCLFdBQVc7b0JBQzVCM0IsYUFBYUQsT0FBTyxHQUFHO29CQUV2QkEsUUFBUTJCLE9BQVEsR0FBRztvQkFFbkJBLFFBeEVlNUIsWUF3RUssR0FBRztnQkFDekI7Z0JBRUEsSUFBTThCLGFBQWEsSUFBSUYsTUFBTTNCLE9BQU9DO2dCQUVwQyxPQUFPNEI7WUFDVDs7O1dBOUVtQjlCIn0=