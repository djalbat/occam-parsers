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
var _lookAhead = require("./utilities/lookAhead");
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
            key: "isLowerPrecedence",
            value: function isLowerPrecedence(precedence) {
                var lowerPrecedence = false;
                if (precedence !== null) {
                    if (this.precedence !== null) {
                        lowerPrecedence = this.precedence < precedence;
                    }
                }
                return lowerPrecedence;
            }
        },
        {
            key: "parse",
            value: function parse(nodes, state, callback, precedence, ruleName) {
                var parsed;
                var index = 0;
                precedence = this.precedence; ///
                parsed = (0, _lookAhead.parseParts)(this.parts, nodes, index, state, callback, precedence, ruleName);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWZpbml0aW9uLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwYXJzZVBhcnRzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2xvb2tBaGVhZFwiO1xuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcihwYXJ0cywgcHJlY2VkZW5jZSkge1xuICAgIHRoaXMucGFydHMgPSBwYXJ0cztcbiAgICB0aGlzLnByZWNlZGVuY2UgPSBwcmVjZWRlbmNlO1xuICB9XG5cbiAgZ2V0UGFydHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFydHM7XG4gIH1cblxuICBnZXRQcmVjZWRlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLnByZWNlZGVuY2U7XG4gIH1cblxuICBpc0xvd2VyUHJlY2VkZW5jZShwcmVjZWRlbmNlKSB7XG4gICAgbGV0IGxvd2VyUHJlY2VkZW5jZSA9IGZhbHNlO1xuXG4gICAgaWYgKHByZWNlZGVuY2UgIT09IG51bGwpIHtcbiAgICAgIGlmICh0aGlzLnByZWNlZGVuY2UgIT09IG51bGwpIHtcbiAgICAgICAgbG93ZXJQcmVjZWRlbmNlID0gKHRoaXMucHJlY2VkZW5jZSA8IHByZWNlZGVuY2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBsb3dlclByZWNlZGVuY2U7XG4gIH1cblxuICBwYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBwcmVjZWRlbmNlLCBydWxlTmFtZSkge1xuICAgIGxldCBwYXJzZWQ7XG5cbiAgICBjb25zdCBpbmRleCA9IDA7XG5cbiAgICBwcmVjZWRlbmNlID0gdGhpcy5wcmVjZWRlbmNlOyAvLy9cblxuICAgIHBhcnNlZCA9IHBhcnNlUGFydHModGhpcy5wYXJ0cywgbm9kZXMsIGluZGV4LCBzdGF0ZSwgY2FsbGJhY2ssIHByZWNlZGVuY2UsIHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBwYXJ0c1N0cmluZyA9IHRoaXMucGFydHMucmVkdWNlKChwYXJ0c1N0cmluZywgcGFydCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFydFN0cmluZyA9IHBhcnQuYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgaWYgKHBhcnRzU3RyaW5nID09PSBFTVBUWV9TVFJJTkcpIHtcbiAgICAgICAgICAgICAgcGFydHNTdHJpbmcgPSBwYXJ0U3RyaW5nOyAvLy9cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gYCR7cGFydHNTdHJpbmd9ICR7cGFydFN0cmluZ31gO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcGFydHNTdHJpbmc7XG4gICAgICAgICAgfSwgRU1QVFlfU1RSSU5HKSxcbiAgICAgICAgICBzdHJpbmcgPSBwYXJ0c1N0cmluZzsgLy8vXG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21QYXJ0cyhDbGFzcywgcGFydHMpIHtcbiAgICBpZiAocGFydHMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcGFydHMgPSBDbGFzczsgIC8vL1xuXG4gICAgICBDbGFzcyA9IERlZmluaXRpb247IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IHByZWNlZGVuY2UgPSBudWxsLFxuICAgICAgICAgIGRlZmluaXRpb24gPSBuZXcgQ2xhc3MocGFydHMsIHByZWNlZGVuY2UpO1xuXG4gICAgcmV0dXJuIGRlZmluaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVBhcnRzQW5kUHJlY2VkZW5jZShDbGFzcywgcGFydHMsIHByZWNlZGVuY2UpIHtcbiAgICBpZiAocHJlY2VkZW5jZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBwcmVjZWRlbmNlID0gcGFydHM7IC8vL1xuXG4gICAgICBwYXJ0cyA9IENsYXNzOyAgLy8vXG5cbiAgICAgIENsYXNzID0gRGVmaW5pdGlvbjsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgZGVmaW5pdGlvbiA9IG5ldyBDbGFzcyhwYXJ0cywgcHJlY2VkZW5jZSk7XG5cbiAgICByZXR1cm4gZGVmaW5pdGlvbjtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJEZWZpbml0aW9uIiwicGFydHMiLCJwcmVjZWRlbmNlIiwiZ2V0UGFydHMiLCJnZXRQcmVjZWRlbmNlIiwiaXNMb3dlclByZWNlZGVuY2UiLCJsb3dlclByZWNlZGVuY2UiLCJwYXJzZSIsIm5vZGVzIiwic3RhdGUiLCJjYWxsYmFjayIsInJ1bGVOYW1lIiwicGFyc2VkIiwiaW5kZXgiLCJwYXJzZVBhcnRzIiwiYXNTdHJpbmciLCJwYXJ0c1N0cmluZyIsInJlZHVjZSIsInBhcnQiLCJwYXJ0U3RyaW5nIiwiRU1QVFlfU1RSSU5HIiwic3RyaW5nIiwiZnJvbVBhcnRzIiwiQ2xhc3MiLCJ1bmRlZmluZWQiLCJkZWZpbml0aW9uIiwiZnJvbVBhcnRzQW5kUHJlY2VkZW5jZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFLcUJBOzs7eUJBSE07eUJBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWQsSUFBQSxBQUFNQSwyQkFBTjthQUFNQSxXQUNQQyxLQUFLLEVBQUVDLFVBQVU7Z0NBRFZGO1FBRWpCLElBQUksQ0FBQ0MsUUFBUUE7UUFDYixJQUFJLENBQUNDLGFBQWFBOztrQkFIREY7O1lBTW5CRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGO1lBQ2Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGO1lBQ2Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCSCxVQUFVO2dCQUMxQixJQUFJSSxrQkFBa0I7Z0JBRXRCLElBQUlKLGVBQWUsTUFBTTtvQkFDdkIsSUFBSSxJQUFJLENBQUNBLGVBQWUsTUFBTTt3QkFDNUJJLGtCQUFtQixJQUFJLENBQUNKLGFBQWFBO29CQUN2QztnQkFDRjtnQkFFQSxPQUFPSTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUVSLFVBQVUsRUFBRVMsUUFBUTtnQkFDaEQsSUFBSUM7Z0JBRUosSUFBTUMsUUFBUTtnQkFFZFgsYUFBYSxJQUFJLENBQUNBLFlBQVksR0FBRztnQkFFakNVLFNBQVNFLElBQUFBLHVCQUFXLElBQUksQ0FBQ2IsT0FBT08sT0FBT0ssT0FBT0osT0FBT0MsVUFBVVIsWUFBWVM7Z0JBRTNFLE9BQU9DO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsY0FBYyxJQUFJLENBQUNmLE1BQU1nQixPQUFPLFNBQUNELGFBQWFFO29CQUM1QyxJQUFNQyxhQUFhRCxLQUFLSDtvQkFFeEIsSUFBSUMsZ0JBQWdCSSx5QkFBYzt3QkFDaENKLGNBQWNHLFlBQVksR0FBRztvQkFDL0IsT0FBTzt3QkFDTEgsY0FBYyxBQUFDLEdBQWlCRyxPQUFmSCxhQUFZLEtBQWMsT0FBWEc7b0JBQ2xDO29CQUVBLE9BQU9IO2dCQUNULEdBQUdJLDBCQUNIQyxTQUFTTCxhQUFhLEdBQUc7Z0JBRS9CLE9BQU9LO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsVUFBVUMsS0FBSyxFQUFFdEIsS0FBSztnQkFDM0IsSUFBSUEsVUFBVXVCLFdBQVc7b0JBQ3ZCdkIsUUFBUXNCLE9BQVEsR0FBRztvQkFFbkJBLFFBM0RldkIsWUEyREssR0FBRztnQkFDekI7Z0JBRUEsSUFBTUUsYUFBYSxNQUNidUIsYUFBYSxJQUFJRixNQUFNdEIsT0FBT0M7Z0JBRXBDLE9BQU91QjtZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsdUJBQXVCSCxLQUFLLEVBQUV0QixLQUFLLEVBQUVDLFVBQVU7Z0JBQ3BELElBQUlBLGVBQWVzQixXQUFXO29CQUM1QnRCLGFBQWFELE9BQU8sR0FBRztvQkFFdkJBLFFBQVFzQixPQUFRLEdBQUc7b0JBRW5CQSxRQTFFZXZCLFlBMEVLLEdBQUc7Z0JBQ3pCO2dCQUVBLElBQU15QixhQUFhLElBQUlGLE1BQU10QixPQUFPQztnQkFFcEMsT0FBT3VCO1lBQ1Q7OztXQWhGbUJ6QiJ9