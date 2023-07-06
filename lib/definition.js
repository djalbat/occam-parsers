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
                }, _constants.EMPTY_STRING), string = partsString; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWZpbml0aW9uLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwYXJzZVBhcnRzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3BhcnNlXCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzLCBwcmVjZWRlbmNlKSB7XG4gICAgdGhpcy5wYXJ0cyA9IHBhcnRzO1xuICAgIHRoaXMucHJlY2VkZW5jZSA9IHByZWNlZGVuY2U7XG4gIH1cblxuICBnZXRQYXJ0cygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJ0cztcbiAgfVxuXG4gIGdldFByZWNlZGVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlY2VkZW5jZTtcbiAgfVxuXG4gIHBhcnNlKGNoaWxkTm9kZXMsIHN0YXRlLCBjYWxsYmFjaykge1xuICAgIGxldCBwYXJzZWQ7XG5cbiAgICBzdGF0ZS5zZXRQcmVjZWRlbmNlKHRoaXMucHJlY2VkZW5jZSk7XG5cbiAgICBjb25zdCBub2RlcyA9IGNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgIHNhdmVkSW5kZXggPSBzdGF0ZS5nZXRTYXZlZEluZGV4KCk7XG5cbiAgICBwYXJzZWQgPSBwYXJzZVBhcnRzKHRoaXMucGFydHMsIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spO1xuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgY29uc3QgY2hpbGROb2Rlc0xlbmd0aCA9IGNoaWxkTm9kZXMubGVuZ3RoO1xuXG4gICAgICBpZiAoY2hpbGROb2Rlc0xlbmd0aCA9PT0gMCkge1xuICAgICAgICBwYXJzZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgc3RhdGUuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBwYXJ0c1N0cmluZyA9IHRoaXMucGFydHMucmVkdWNlKChwYXJ0c1N0cmluZywgcGFydCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFydFN0cmluZyA9IHBhcnQuYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgaWYgKHBhcnRzU3RyaW5nID09PSBFTVBUWV9TVFJJTkcpIHtcbiAgICAgICAgICAgICAgcGFydHNTdHJpbmcgPSBwYXJ0U3RyaW5nOyAvLy9cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gYCR7cGFydHNTdHJpbmd9ICR7cGFydFN0cmluZ31gO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcGFydHNTdHJpbmc7XG4gICAgICAgICAgfSwgRU1QVFlfU1RSSU5HKSxcbiAgICAgICAgICBzdHJpbmcgPSBwYXJ0c1N0cmluZzsgLy8vXG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21QYXJ0cyhDbGFzcywgcGFydHMpIHtcbiAgICBpZiAocGFydHMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcGFydHMgPSBDbGFzczsgIC8vL1xuXG4gICAgICBDbGFzcyA9IERlZmluaXRpb247IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IHByZWNlZGVuY2UgPSBudWxsLFxuICAgICAgICAgIGRlZmluaXRpb24gPSBuZXcgQ2xhc3MocGFydHMsIHByZWNlZGVuY2UpO1xuXG4gICAgcmV0dXJuIGRlZmluaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVBhcnRzQW5kUHJlY2VkZW5jZShDbGFzcywgcGFydHMsIHByZWNlZGVuY2UpIHtcbiAgICBpZiAocHJlY2VkZW5jZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBwcmVjZWRlbmNlID0gcGFydHM7IC8vL1xuXG4gICAgICBwYXJ0cyA9IENsYXNzOyAgLy8vXG5cbiAgICAgIENsYXNzID0gRGVmaW5pdGlvbjsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgZGVmaW5pdGlvbiA9IG5ldyBDbGFzcyhwYXJ0cywgcHJlY2VkZW5jZSk7XG5cbiAgICByZXR1cm4gZGVmaW5pdGlvbjtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJEZWZpbml0aW9uIiwicGFydHMiLCJwcmVjZWRlbmNlIiwiZ2V0UGFydHMiLCJnZXRQcmVjZWRlbmNlIiwicGFyc2UiLCJjaGlsZE5vZGVzIiwic3RhdGUiLCJjYWxsYmFjayIsInBhcnNlZCIsInNldFByZWNlZGVuY2UiLCJub2RlcyIsInNhdmVkSW5kZXgiLCJnZXRTYXZlZEluZGV4IiwicGFyc2VQYXJ0cyIsImNoaWxkTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJiYWNrdHJhY2siLCJhc1N0cmluZyIsInBhcnRzU3RyaW5nIiwicmVkdWNlIiwicGFydCIsInBhcnRTdHJpbmciLCJFTVBUWV9TVFJJTkciLCJzdHJpbmciLCJmcm9tUGFydHMiLCJDbGFzcyIsInVuZGVmaW5lZCIsImRlZmluaXRpb24iLCJmcm9tUGFydHNBbmRQcmVjZWRlbmNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUtxQkE7OztxQkFITTt5QkFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZCxJQUFBLEFBQU1BLDJCQUFOO2FBQU1BLFdBQ1BDLEtBQUssRUFBRUMsVUFBVTtnQ0FEVkY7UUFFakIsSUFBSSxDQUFDQyxRQUFRQTtRQUNiLElBQUksQ0FBQ0MsYUFBYUE7O2tCQUhERjs7WUFNbkJHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0Y7WUFDZDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0Y7WUFDZDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxVQUFVLEVBQUVDLEtBQUssRUFBRUMsUUFBUTtnQkFDL0IsSUFBSUM7Z0JBRUpGLE1BQU1HLGNBQWMsSUFBSSxDQUFDUjtnQkFFekIsSUFBTVMsUUFBUUwsWUFDUk0sYUFBYUwsTUFBTU07Z0JBRXpCSixTQUFTSyxJQUFBQSxtQkFBVyxJQUFJLENBQUNiLE9BQU9VLE9BQU9KLE9BQU9DO2dCQUU5QyxJQUFJQyxRQUFRO29CQUNWLElBQU1NLG1CQUFtQlQsV0FBV1U7b0JBRXBDLElBQUlELHFCQUFxQixHQUFHO3dCQUMxQk4sU0FBUztvQkFDWDtnQkFDRjtnQkFFQSxJQUFJLENBQUNBLFFBQVE7b0JBQ1hGLE1BQU1VLFVBQVVMO2dCQUNsQjtnQkFFQSxPQUFPSDtZQUNUOzs7WUFFQVMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGNBQWMsSUFBSSxDQUFDbEIsTUFBTW1CLE9BQU8sU0FBQ0QsYUFBYUU7b0JBQzVDLElBQU1DLGFBQWFELEtBQUtIO29CQUV4QixJQUFJQyxnQkFBZ0JJLHlCQUFjO3dCQUNoQ0osY0FBY0csWUFBWSxHQUFHO29CQUMvQixPQUFPO3dCQUNMSCxjQUFjLEFBQUMsR0FBaUJHLE9BQWZILGFBQVksS0FBYyxPQUFYRztvQkFDbEM7b0JBRUEsT0FBT0g7Z0JBQ1QsR0FBR0ksMEJBQ0hDLFNBQVNMLGFBQWEsR0FBRztnQkFFL0IsT0FBT0s7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxVQUFVQyxLQUFLLEVBQUV6QixLQUFLO2dCQUMzQixJQUFJQSxVQUFVMEIsV0FBVztvQkFDdkIxQixRQUFReUIsT0FBUSxHQUFHO29CQUVuQkEsUUE1RGUxQixZQTRESyxHQUFHO2dCQUN6QjtnQkFFQSxJQUFNRSxhQUFhLE1BQ2IwQixhQUFhLElBQUlGLE1BQU16QixPQUFPQztnQkFFcEMsT0FBTzBCO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSx1QkFBdUJILEtBQUssRUFBRXpCLEtBQUssRUFBRUMsVUFBVTtnQkFDcEQsSUFBSUEsZUFBZXlCLFdBQVc7b0JBQzVCekIsYUFBYUQsT0FBTyxHQUFHO29CQUV2QkEsUUFBUXlCLE9BQVEsR0FBRztvQkFFbkJBLFFBM0VlMUIsWUEyRUssR0FBRztnQkFDekI7Z0JBRUEsSUFBTTRCLGFBQWEsSUFBSUYsTUFBTXpCLE9BQU9DO2dCQUVwQyxPQUFPMEI7WUFDVDs7O1dBakZtQjVCIn0=