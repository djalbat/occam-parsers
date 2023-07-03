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
                var savedIndex = state.getSavedIndex(), nodes = childNodes; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWZpbml0aW9uLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwYXJzZVBhcnRzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3BhcnNlXCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzLCBwcmVjZWRlbmNlKSB7XG4gICAgdGhpcy5wYXJ0cyA9IHBhcnRzO1xuICAgIHRoaXMucHJlY2VkZW5jZSA9IHByZWNlZGVuY2U7XG4gIH1cblxuICBnZXRQYXJ0cygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJ0cztcbiAgfVxuXG4gIGdldFByZWNlZGVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlY2VkZW5jZTtcbiAgfVxuXG4gIHBhcnNlKGNoaWxkTm9kZXMsIHN0YXRlLCBjYWxsYmFjaykge1xuICAgIGxldCBwYXJzZWQ7XG5cbiAgICBjb25zdCBzYXZlZEluZGV4ID0gc3RhdGUuZ2V0U2F2ZWRJbmRleCgpLFxuICAgICAgICAgIG5vZGVzID0gY2hpbGROb2RlczsgLy8vXG5cbiAgICBwYXJzZWQgPSBwYXJzZVBhcnRzKHRoaXMucGFydHMsIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spO1xuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgY29uc3QgY2hpbGROb2Rlc0xlbmd0aCA9IGNoaWxkTm9kZXMubGVuZ3RoO1xuXG4gICAgICBpZiAoY2hpbGROb2Rlc0xlbmd0aCA9PT0gMCkge1xuICAgICAgICBwYXJzZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgc3RhdGUuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBwYXJ0c1N0cmluZyA9IHRoaXMucGFydHMucmVkdWNlKChwYXJ0c1N0cmluZywgcGFydCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFydFN0cmluZyA9IHBhcnQuYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgaWYgKHBhcnRzU3RyaW5nID09PSBFTVBUWV9TVFJJTkcpIHtcbiAgICAgICAgICAgICAgcGFydHNTdHJpbmcgPSBwYXJ0U3RyaW5nOyAvLy9cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gYCR7cGFydHNTdHJpbmd9ICR7cGFydFN0cmluZ31gO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcGFydHNTdHJpbmc7XG4gICAgICAgICAgfSwgRU1QVFlfU1RSSU5HKSxcbiAgICAgICAgICBzdHJpbmcgPSBwYXJ0c1N0cmluZzsgLy8vXG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21QYXJ0cyhDbGFzcywgcGFydHMpIHtcbiAgICBpZiAocGFydHMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcGFydHMgPSBDbGFzczsgIC8vL1xuXG4gICAgICBDbGFzcyA9IERlZmluaXRpb247IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IHByZWNlZGVuY2UgPSBudWxsLFxuICAgICAgICAgIGRlZmluaXRpb24gPSBuZXcgQ2xhc3MocGFydHMsIHByZWNlZGVuY2UpO1xuXG4gICAgcmV0dXJuIGRlZmluaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVBhcnRzQW5kUHJlY2VkZW5jZShDbGFzcywgcGFydHMsIHByZWNlZGVuY2UpIHtcbiAgICBpZiAocHJlY2VkZW5jZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBwcmVjZWRlbmNlID0gcGFydHM7IC8vL1xuXG4gICAgICBwYXJ0cyA9IENsYXNzOyAgLy8vXG5cbiAgICAgIENsYXNzID0gRGVmaW5pdGlvbjsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgZGVmaW5pdGlvbiA9IG5ldyBDbGFzcyhwYXJ0cywgcHJlY2VkZW5jZSk7XG5cbiAgICByZXR1cm4gZGVmaW5pdGlvbjtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJEZWZpbml0aW9uIiwicGFydHMiLCJwcmVjZWRlbmNlIiwiZ2V0UGFydHMiLCJnZXRQcmVjZWRlbmNlIiwicGFyc2UiLCJjaGlsZE5vZGVzIiwic3RhdGUiLCJjYWxsYmFjayIsInBhcnNlZCIsInNhdmVkSW5kZXgiLCJnZXRTYXZlZEluZGV4Iiwibm9kZXMiLCJwYXJzZVBhcnRzIiwiY2hpbGROb2Rlc0xlbmd0aCIsImxlbmd0aCIsImJhY2t0cmFjayIsImFzU3RyaW5nIiwicGFydHNTdHJpbmciLCJyZWR1Y2UiLCJwYXJ0IiwicGFydFN0cmluZyIsIkVNUFRZX1NUUklORyIsInN0cmluZyIsImZyb21QYXJ0cyIsIkNsYXNzIiwidW5kZWZpbmVkIiwiZGVmaW5pdGlvbiIsImZyb21QYXJ0c0FuZFByZWNlZGVuY2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBS3FCQTs7O3FCQUhNO3lCQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVkLElBQUEsQUFBTUEsMkJBQU47YUFBTUEsV0FDUEMsS0FBSyxFQUFFQyxVQUFVO2dDQURWRjtRQUVqQixJQUFJLENBQUNDLFFBQVFBO1FBQ2IsSUFBSSxDQUFDQyxhQUFhQTs7a0JBSERGOztZQU1uQkcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRjtZQUNkOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRjtZQUNkOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLFVBQVUsRUFBRUMsS0FBSyxFQUFFQyxRQUFRO2dCQUMvQixJQUFJQztnQkFFSixJQUFNQyxhQUFhSCxNQUFNSSxpQkFDbkJDLFFBQVFOLFlBQVksR0FBRztnQkFFN0JHLFNBQVNJLElBQUFBLG1CQUFXLElBQUksQ0FBQ1osT0FBT1csT0FBT0wsT0FBT0M7Z0JBRTlDLElBQUlDLFFBQVE7b0JBQ1YsSUFBTUssbUJBQW1CUixXQUFXUztvQkFFcEMsSUFBSUQscUJBQXFCLEdBQUc7d0JBQzFCTCxTQUFTO29CQUNYO2dCQUNGO2dCQUVBLElBQUksQ0FBQ0EsUUFBUTtvQkFDWEYsTUFBTVMsVUFBVU47Z0JBQ2xCO2dCQUVBLE9BQU9EO1lBQ1Q7OztZQUVBUSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsY0FBYyxJQUFJLENBQUNqQixNQUFNa0IsT0FBTyxTQUFDRCxhQUFhRTtvQkFDNUMsSUFBTUMsYUFBYUQsS0FBS0g7b0JBRXhCLElBQUlDLGdCQUFnQkkseUJBQWM7d0JBQ2hDSixjQUFjRyxZQUFZLEdBQUc7b0JBQy9CLE9BQU87d0JBQ0xILGNBQWMsQUFBQyxHQUFpQkcsT0FBZkgsYUFBWSxLQUFjLE9BQVhHO29CQUNsQztvQkFFQSxPQUFPSDtnQkFDVCxHQUFHSSwwQkFDSEMsU0FBU0wsYUFBYSxHQUFHO2dCQUUvQixPQUFPSztZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLFVBQVVDLEtBQUssRUFBRXhCLEtBQUs7Z0JBQzNCLElBQUlBLFVBQVV5QixXQUFXO29CQUN2QnpCLFFBQVF3QixPQUFRLEdBQUc7b0JBRW5CQSxRQTFEZXpCLFlBMERLLEdBQUc7Z0JBQ3pCO2dCQUVBLElBQU1FLGFBQWEsTUFDYnlCLGFBQWEsSUFBSUYsTUFBTXhCLE9BQU9DO2dCQUVwQyxPQUFPeUI7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLHVCQUF1QkgsS0FBSyxFQUFFeEIsS0FBSyxFQUFFQyxVQUFVO2dCQUNwRCxJQUFJQSxlQUFld0IsV0FBVztvQkFDNUJ4QixhQUFhRCxPQUFPLEdBQUc7b0JBRXZCQSxRQUFRd0IsT0FBUSxHQUFHO29CQUVuQkEsUUF6RWV6QixZQXlFSyxHQUFHO2dCQUN6QjtnQkFFQSxJQUFNMkIsYUFBYSxJQUFJRixNQUFNeEIsT0FBT0M7Z0JBRXBDLE9BQU95QjtZQUNUOzs7V0EvRW1CM0IifQ==