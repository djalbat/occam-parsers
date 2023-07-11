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
                var nodes = childNodes, savedIndex = state.getSavedIndex();
                state.setPrecedence(this.precedence);
                parsed = (0, _parse.parseParts)(this.parts, nodes, state, callback, callAhead);
                if (!parsed) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWZpbml0aW9uLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwYXJzZVBhcnRzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3BhcnNlXCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzLCBwcmVjZWRlbmNlKSB7XG4gICAgdGhpcy5wYXJ0cyA9IHBhcnRzO1xuICAgIHRoaXMucHJlY2VkZW5jZSA9IHByZWNlZGVuY2U7XG4gIH1cblxuICBnZXRQYXJ0cygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJ0cztcbiAgfVxuXG4gIGdldFByZWNlZGVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlY2VkZW5jZTtcbiAgfVxuXG4gIHBhcnNlKGNoaWxkTm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKSB7XG4gICAgbGV0IHBhcnNlZDtcblxuICAgIGNvbnN0IG5vZGVzID0gY2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgc2F2ZWRJbmRleCA9IHN0YXRlLmdldFNhdmVkSW5kZXgoKTtcblxuICAgIHN0YXRlLnNldFByZWNlZGVuY2UodGhpcy5wcmVjZWRlbmNlKTtcblxuICAgIHBhcnNlZCA9IHBhcnNlUGFydHModGhpcy5wYXJ0cywgbm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKTtcblxuICAgIGlmICghcGFyc2VkKSB7XG4gICAgICBzdGF0ZS5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHBhcnRzU3RyaW5nID0gdGhpcy5wYXJ0cy5yZWR1Y2UoKHBhcnRzU3RyaW5nLCBwYXJ0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXJ0U3RyaW5nID0gcGFydC5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICBpZiAocGFydHNTdHJpbmcgPT09IEVNUFRZX1NUUklORykge1xuICAgICAgICAgICAgICBwYXJ0c1N0cmluZyA9IHBhcnRTdHJpbmc7IC8vL1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcGFydHNTdHJpbmcgPSBgJHtwYXJ0c1N0cmluZ30gJHtwYXJ0U3RyaW5nfWA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBwYXJ0c1N0cmluZztcbiAgICAgICAgICB9LCBFTVBUWV9TVFJJTkcpLFxuICAgICAgICAgIHN0cmluZyA9ICh0aGlzLnByZWNlZGVuY2UgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgIGAke3BhcnRzU3RyaW5nfSAoJHt0aGlzLnByZWNlZGVuY2V9KWAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgcGFydHNTdHJpbmc7IC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUGFydHMoQ2xhc3MsIHBhcnRzKSB7XG4gICAgaWYgKHBhcnRzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHBhcnRzID0gQ2xhc3M7ICAvLy9cblxuICAgICAgQ2xhc3MgPSBEZWZpbml0aW9uOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBwcmVjZWRlbmNlID0gbnVsbCxcbiAgICAgICAgICBkZWZpbml0aW9uID0gbmV3IENsYXNzKHBhcnRzLCBwcmVjZWRlbmNlKTtcblxuICAgIHJldHVybiBkZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21QYXJ0c0FuZFByZWNlZGVuY2UoQ2xhc3MsIHBhcnRzLCBwcmVjZWRlbmNlKSB7XG4gICAgaWYgKHByZWNlZGVuY2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcHJlY2VkZW5jZSA9IHBhcnRzOyAvLy9cblxuICAgICAgcGFydHMgPSBDbGFzczsgIC8vL1xuXG4gICAgICBDbGFzcyA9IERlZmluaXRpb247IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IGRlZmluaXRpb24gPSBuZXcgQ2xhc3MocGFydHMsIHByZWNlZGVuY2UpO1xuXG4gICAgcmV0dXJuIGRlZmluaXRpb247XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiRGVmaW5pdGlvbiIsInBhcnRzIiwicHJlY2VkZW5jZSIsImdldFBhcnRzIiwiZ2V0UHJlY2VkZW5jZSIsInBhcnNlIiwiY2hpbGROb2RlcyIsInN0YXRlIiwiY2FsbGJhY2siLCJjYWxsQWhlYWQiLCJwYXJzZWQiLCJub2RlcyIsInNhdmVkSW5kZXgiLCJnZXRTYXZlZEluZGV4Iiwic2V0UHJlY2VkZW5jZSIsInBhcnNlUGFydHMiLCJiYWNrdHJhY2siLCJhc1N0cmluZyIsInBhcnRzU3RyaW5nIiwicmVkdWNlIiwicGFydCIsInBhcnRTdHJpbmciLCJFTVBUWV9TVFJJTkciLCJzdHJpbmciLCJmcm9tUGFydHMiLCJDbGFzcyIsInVuZGVmaW5lZCIsImRlZmluaXRpb24iLCJmcm9tUGFydHNBbmRQcmVjZWRlbmNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUtxQkE7OztxQkFITTt5QkFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZCxJQUFBLEFBQU1BLDJCQUFOO2FBQU1BLFdBQ1BDLEtBQUssRUFBRUMsVUFBVTtnQ0FEVkY7UUFFakIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxVQUFVLEdBQUdBOztrQkFIREY7O1lBTW5CRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLEtBQUs7WUFDbkI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFVBQVU7WUFDeEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsVUFBVSxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsU0FBUztnQkFDMUMsSUFBSUM7Z0JBRUosSUFBTUMsUUFBUUwsWUFDUk0sYUFBYUwsTUFBTU0sYUFBYTtnQkFFdENOLE1BQU1PLGFBQWEsQ0FBQyxJQUFJLENBQUNaLFVBQVU7Z0JBRW5DUSxTQUFTSyxJQUFBQSxpQkFBVSxFQUFDLElBQUksQ0FBQ2QsS0FBSyxFQUFFVSxPQUFPSixPQUFPQyxVQUFVQztnQkFFeEQsSUFBSSxDQUFDQyxRQUFRO29CQUNYSCxNQUFNUyxTQUFTLENBQUNKO2dCQUNsQjtnQkFFQSxPQUFPRjtZQUNUOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGNBQWMsSUFBSSxDQUFDakIsS0FBSyxDQUFDa0IsTUFBTSxDQUFDLFNBQUNELGFBQWFFO29CQUM1QyxJQUFNQyxhQUFhRCxLQUFLSCxRQUFRO29CQUVoQyxJQUFJQyxnQkFBZ0JJLHVCQUFZLEVBQUU7d0JBQ2hDSixjQUFjRyxZQUFZLEdBQUc7b0JBQy9CLE9BQU87d0JBQ0xILGNBQWMsQUFBQyxHQUFpQkcsT0FBZkgsYUFBWSxLQUFjLE9BQVhHO29CQUNsQztvQkFFQSxPQUFPSDtnQkFDVCxHQUFHSSx1QkFBWSxHQUNmQyxTQUFTLEFBQUMsSUFBSSxDQUFDckIsVUFBVSxLQUFLLE9BQ25CLEFBQUMsR0FBa0IsT0FBaEJnQixhQUFZLE1BQW9CLE9BQWhCLElBQUksQ0FBQ2hCLFVBQVUsRUFBQyxPQUNoQ2dCLGFBQWEsR0FBRztnQkFFcEMsT0FBT0s7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxVQUFVQyxLQUFLLEVBQUV4QixLQUFLO2dCQUMzQixJQUFJQSxVQUFVeUIsV0FBVztvQkFDdkJ6QixRQUFRd0IsT0FBUSxHQUFHO29CQUVuQkEsUUF0RGV6QixZQXNESyxHQUFHO2dCQUN6QjtnQkFFQSxJQUFNRSxhQUFhLE1BQ2J5QixhQUFhLElBQUlGLE1BQU14QixPQUFPQztnQkFFcEMsT0FBT3lCO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSx1QkFBdUJILEtBQUssRUFBRXhCLEtBQUssRUFBRUMsVUFBVTtnQkFDcEQsSUFBSUEsZUFBZXdCLFdBQVc7b0JBQzVCeEIsYUFBYUQsT0FBTyxHQUFHO29CQUV2QkEsUUFBUXdCLE9BQVEsR0FBRztvQkFFbkJBLFFBckVlekIsWUFxRUssR0FBRztnQkFDekI7Z0JBRUEsSUFBTTJCLGFBQWEsSUFBSUYsTUFBTXhCLE9BQU9DO2dCQUVwQyxPQUFPeUI7WUFDVDs7O1dBM0VtQjNCIn0=