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
            value: function parse(childNodes, state, callback) {
                var parsed;
                state.setPrecedence(this.precedence);
                var nodes = childNodes, savedIndex = state.getSavedIndex();
                parsed = (0, _parse.parseParts)(this.parts, nodes, state, callback);
                if (parsed) {
                    var childNodesLength = childNodes.length;
                    if (childNodesLength === 0) {
                        parsed = false;
                    }
                }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWZpbml0aW9uLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwYXJzZVBhcnRzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3BhcnNlXCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzLCBwcmVjZWRlbmNlKSB7XG4gICAgdGhpcy5wYXJ0cyA9IHBhcnRzO1xuICAgIHRoaXMucHJlY2VkZW5jZSA9IHByZWNlZGVuY2U7XG4gIH1cblxuICBnZXRQYXJ0cygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJ0cztcbiAgfVxuXG4gIGdldFByZWNlZGVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlY2VkZW5jZTtcbiAgfVxuXG4gIHBhcnNlKGNoaWxkTm9kZXMsIHN0YXRlLCBjYWxsYmFjaykge1xuICAgIGxldCBwYXJzZWQ7XG5cbiAgICBzdGF0ZS5zZXRQcmVjZWRlbmNlKHRoaXMucHJlY2VkZW5jZSk7XG5cbiAgICBjb25zdCBub2RlcyA9IGNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgIHNhdmVkSW5kZXggPSBzdGF0ZS5nZXRTYXZlZEluZGV4KCk7XG5cbiAgICBwYXJzZWQgPSBwYXJzZVBhcnRzKHRoaXMucGFydHMsIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spO1xuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgY29uc3QgY2hpbGROb2Rlc0xlbmd0aCA9IGNoaWxkTm9kZXMubGVuZ3RoO1xuXG4gICAgICBpZiAoY2hpbGROb2Rlc0xlbmd0aCA9PT0gMCkge1xuICAgICAgICBwYXJzZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgc3RhdGUuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBwYXJ0c1N0cmluZyA9IHRoaXMucGFydHMucmVkdWNlKChwYXJ0c1N0cmluZywgcGFydCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFydFN0cmluZyA9IHBhcnQuYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgaWYgKHBhcnRzU3RyaW5nID09PSBFTVBUWV9TVFJJTkcpIHtcbiAgICAgICAgICAgICAgcGFydHNTdHJpbmcgPSBwYXJ0U3RyaW5nOyAvLy9cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gYCR7cGFydHNTdHJpbmd9ICR7cGFydFN0cmluZ31gO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcGFydHNTdHJpbmc7XG4gICAgICAgICAgfSwgRU1QVFlfU1RSSU5HKSxcbiAgICAgICAgICBzdHJpbmcgPSAodGhpcy5wcmVjZWRlbmNlICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICBgJHtwYXJ0c1N0cmluZ30gKCR7dGhpcy5wcmVjZWRlbmNlfSlgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRzU3RyaW5nOyAvLy9cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbVBhcnRzKENsYXNzLCBwYXJ0cykge1xuICAgIGlmIChwYXJ0cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBwYXJ0cyA9IENsYXNzOyAgLy8vXG5cbiAgICAgIENsYXNzID0gRGVmaW5pdGlvbjsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgcHJlY2VkZW5jZSA9IG51bGwsXG4gICAgICAgICAgZGVmaW5pdGlvbiA9IG5ldyBDbGFzcyhwYXJ0cywgcHJlY2VkZW5jZSk7XG5cbiAgICByZXR1cm4gZGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUGFydHNBbmRQcmVjZWRlbmNlKENsYXNzLCBwYXJ0cywgcHJlY2VkZW5jZSkge1xuICAgIGlmIChwcmVjZWRlbmNlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHByZWNlZGVuY2UgPSBwYXJ0czsgLy8vXG5cbiAgICAgIHBhcnRzID0gQ2xhc3M7ICAvLy9cblxuICAgICAgQ2xhc3MgPSBEZWZpbml0aW9uOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBkZWZpbml0aW9uID0gbmV3IENsYXNzKHBhcnRzLCBwcmVjZWRlbmNlKTtcblxuICAgIHJldHVybiBkZWZpbml0aW9uO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkRlZmluaXRpb24iLCJwYXJ0cyIsInByZWNlZGVuY2UiLCJnZXRQYXJ0cyIsImdldFByZWNlZGVuY2UiLCJwYXJzZSIsImNoaWxkTm9kZXMiLCJzdGF0ZSIsImNhbGxiYWNrIiwicGFyc2VkIiwic2V0UHJlY2VkZW5jZSIsIm5vZGVzIiwic2F2ZWRJbmRleCIsImdldFNhdmVkSW5kZXgiLCJwYXJzZVBhcnRzIiwiY2hpbGROb2Rlc0xlbmd0aCIsImxlbmd0aCIsImJhY2t0cmFjayIsImFzU3RyaW5nIiwicGFydHNTdHJpbmciLCJyZWR1Y2UiLCJwYXJ0IiwicGFydFN0cmluZyIsIkVNUFRZX1NUUklORyIsInN0cmluZyIsImZyb21QYXJ0cyIsIkNsYXNzIiwidW5kZWZpbmVkIiwiZGVmaW5pdGlvbiIsImZyb21QYXJ0c0FuZFByZWNlZGVuY2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBS3FCQTs7O3FCQUhNO3lCQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVkLElBQUEsQUFBTUEsMkJBQU47YUFBTUEsV0FDUEMsS0FBSyxFQUFFQyxVQUFVO2dDQURWRjtRQUVqQixJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLFVBQVUsR0FBR0E7O2tCQUhERjs7WUFNbkJHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsS0FBSztZQUNuQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsVUFBVTtZQUN4Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxVQUFVLEVBQUVDLEtBQUssRUFBRUMsUUFBUTtnQkFDL0IsSUFBSUM7Z0JBRUpGLE1BQU1HLGFBQWEsQ0FBQyxJQUFJLENBQUNSLFVBQVU7Z0JBRW5DLElBQU1TLFFBQVFMLFlBQ1JNLGFBQWFMLE1BQU1NLGFBQWE7Z0JBRXRDSixTQUFTSyxJQUFBQSxpQkFBVSxFQUFDLElBQUksQ0FBQ2IsS0FBSyxFQUFFVSxPQUFPSixPQUFPQztnQkFFOUMsSUFBSUMsUUFBUTtvQkFDVixJQUFNTSxtQkFBbUJULFdBQVdVLE1BQU07b0JBRTFDLElBQUlELHFCQUFxQixHQUFHO3dCQUMxQk4sU0FBUztvQkFDWDtnQkFDRjtnQkFFQSxJQUFJLENBQUNBLFFBQVE7b0JBQ1hGLE1BQU1VLFNBQVMsQ0FBQ0w7Z0JBQ2xCO2dCQUVBLE9BQU9IO1lBQ1Q7OztZQUVBUyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsY0FBYyxJQUFJLENBQUNsQixLQUFLLENBQUNtQixNQUFNLENBQUMsU0FBQ0QsYUFBYUU7b0JBQzVDLElBQU1DLGFBQWFELEtBQUtILFFBQVE7b0JBRWhDLElBQUlDLGdCQUFnQkksdUJBQVksRUFBRTt3QkFDaENKLGNBQWNHLFlBQVksR0FBRztvQkFDL0IsT0FBTzt3QkFDTEgsY0FBYyxBQUFDLEdBQWlCRyxPQUFmSCxhQUFZLEtBQWMsT0FBWEc7b0JBQ2xDO29CQUVBLE9BQU9IO2dCQUNULEdBQUdJLHVCQUFZLEdBQ2ZDLFNBQVMsQUFBQyxJQUFJLENBQUN0QixVQUFVLEtBQUssT0FDbkIsQUFBQyxHQUFrQixPQUFoQmlCLGFBQVksTUFBb0IsT0FBaEIsSUFBSSxDQUFDakIsVUFBVSxFQUFDLE9BQ2hDaUIsYUFBYSxHQUFHO2dCQUVwQyxPQUFPSztZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLFVBQVVDLEtBQUssRUFBRXpCLEtBQUs7Z0JBQzNCLElBQUlBLFVBQVUwQixXQUFXO29CQUN2QjFCLFFBQVF5QixPQUFRLEdBQUc7b0JBRW5CQSxRQTlEZTFCLFlBOERLLEdBQUc7Z0JBQ3pCO2dCQUVBLElBQU1FLGFBQWEsTUFDYjBCLGFBQWEsSUFBSUYsTUFBTXpCLE9BQU9DO2dCQUVwQyxPQUFPMEI7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLHVCQUF1QkgsS0FBSyxFQUFFekIsS0FBSyxFQUFFQyxVQUFVO2dCQUNwRCxJQUFJQSxlQUFleUIsV0FBVztvQkFDNUJ6QixhQUFhRCxPQUFPLEdBQUc7b0JBRXZCQSxRQUFReUIsT0FBUSxHQUFHO29CQUVuQkEsUUE3RWUxQixZQTZFSyxHQUFHO2dCQUN6QjtnQkFFQSxJQUFNNEIsYUFBYSxJQUFJRixNQUFNekIsT0FBT0M7Z0JBRXBDLE9BQU8wQjtZQUNUOzs7V0FuRm1CNUIifQ==