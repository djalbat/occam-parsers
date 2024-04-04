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
var _necessary = require("necessary");
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
var SPACE_CHARACTER = _necessary.characters.SPACE_CHARACTER;
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
                var string;
                var partsString = this.parts.reduce(function(partsString, part) {
                    var partString = part.asString();
                    if (partsString === _constants.EMPTY_STRING) {
                        partsString = partString; ///
                    } else {
                        partsString = "".concat(partsString, " ").concat(partString);
                    }
                    return partsString;
                }, _constants.EMPTY_STRING);
                string = partsString; ///
                if (this.precedence !== null) {
                    var precedence = this.precedence === Infinity ? SPACE_CHARACTER : this.precedence;
                    string = "".concat(string, " (").concat(precedence, ")");
                }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWZpbml0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBjaGFyYWN0ZXJzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBwYXJzZVBhcnRzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3BhcnNlXCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBTUEFDRV9DSEFSQUNURVIgfSA9IGNoYXJhY3RlcnM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcihwYXJ0cywgcHJlY2VkZW5jZSkge1xuICAgIHRoaXMucGFydHMgPSBwYXJ0cztcbiAgICB0aGlzLnByZWNlZGVuY2UgPSBwcmVjZWRlbmNlO1xuICB9XG5cbiAgZ2V0UGFydHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFydHM7XG4gIH1cblxuICBnZXRQcmVjZWRlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLnByZWNlZGVuY2U7XG4gIH1cblxuICBwYXJzZShjaGlsZE5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssIGNhbGxBaGVhZCkge1xuICAgIGxldCBwYXJzZWQ7XG5cbiAgICBjb25zdCBub2RlcyA9IGNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgIHNhdmVkSW5kZXggPSBzdGF0ZS5nZXRTYXZlZEluZGV4KCk7XG5cbiAgICBwYXJzZWQgPSBwYXJzZVBhcnRzKHRoaXMucGFydHMsIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssIGNhbGxBaGVhZCk7XG5cbiAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgc3RhdGUuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBsZXQgc3RyaW5nO1xuXG4gICAgY29uc3QgcGFydHNTdHJpbmcgPSB0aGlzLnBhcnRzLnJlZHVjZSgocGFydHNTdHJpbmcsIHBhcnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnRTdHJpbmcgPSBwYXJ0LmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIGlmIChwYXJ0c1N0cmluZyA9PT0gRU1QVFlfU1RSSU5HKSB7XG4gICAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gcGFydFN0cmluZzsgLy8vXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwYXJ0c1N0cmluZyA9IGAke3BhcnRzU3RyaW5nfSAke3BhcnRTdHJpbmd9YDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHBhcnRzU3RyaW5nO1xuICAgICAgICAgIH0sIEVNUFRZX1NUUklORyk7XG5cbiAgICBzdHJpbmcgPSBwYXJ0c1N0cmluZzsgLy8vXG5cbiAgICBpZiAodGhpcy5wcmVjZWRlbmNlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwcmVjZWRlbmNlID0gKHRoaXMucHJlY2VkZW5jZSA9PT0gSW5maW5pdHkpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFNQQUNFX0NIQVJBQ1RFUiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJlY2VkZW5jZTtcblxuICAgICAgc3RyaW5nID0gYCR7c3RyaW5nfSAoJHtwcmVjZWRlbmNlfSlgO1xuICAgIH1cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbVBhcnRzKENsYXNzLCBwYXJ0cykge1xuICAgIGlmIChwYXJ0cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBwYXJ0cyA9IENsYXNzOyAgLy8vXG5cbiAgICAgIENsYXNzID0gRGVmaW5pdGlvbjsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgcHJlY2VkZW5jZSA9IG51bGwsXG4gICAgICAgICAgZGVmaW5pdGlvbiA9IG5ldyBDbGFzcyhwYXJ0cywgcHJlY2VkZW5jZSk7XG5cbiAgICByZXR1cm4gZGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUGFydHNBbmRQcmVjZWRlbmNlKENsYXNzLCBwYXJ0cywgcHJlY2VkZW5jZSkge1xuICAgIGlmIChwcmVjZWRlbmNlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHByZWNlZGVuY2UgPSBwYXJ0czsgLy8vXG5cbiAgICAgIHBhcnRzID0gQ2xhc3M7ICAvLy9cblxuICAgICAgQ2xhc3MgPSBEZWZpbml0aW9uOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBkZWZpbml0aW9uID0gbmV3IENsYXNzKHBhcnRzLCBwcmVjZWRlbmNlKTtcblxuICAgIHJldHVybiBkZWZpbml0aW9uO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRGVmaW5pdGlvbiIsIlNQQUNFX0NIQVJBQ1RFUiIsImNoYXJhY3RlcnMiLCJwYXJ0cyIsInByZWNlZGVuY2UiLCJnZXRQYXJ0cyIsImdldFByZWNlZGVuY2UiLCJwYXJzZSIsImNoaWxkTm9kZXMiLCJzdGF0ZSIsImNhbGxiYWNrIiwiY2FsbEFoZWFkIiwicGFyc2VkIiwibm9kZXMiLCJzYXZlZEluZGV4IiwiZ2V0U2F2ZWRJbmRleCIsInBhcnNlUGFydHMiLCJiYWNrdHJhY2siLCJhc1N0cmluZyIsInN0cmluZyIsInBhcnRzU3RyaW5nIiwicmVkdWNlIiwicGFydCIsInBhcnRTdHJpbmciLCJFTVBUWV9TVFJJTkciLCJJbmZpbml0eSIsImZyb21QYXJ0cyIsIkNsYXNzIiwidW5kZWZpbmVkIiwiZGVmaW5pdGlvbiIsImZyb21QYXJ0c0FuZFByZWNlZGVuY2UiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7O3lCQVBNO3FCQUVBO3lCQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QixJQUFNLEFBQUVDLGtCQUFvQkMscUJBQVUsQ0FBOUJEO0FBRU8sSUFBQSxBQUFNRCwyQkFBRCxBQUFMO2FBQU1BLFdBQ1BHLEtBQUssRUFBRUMsVUFBVTtnQ0FEVko7UUFFakIsSUFBSSxDQUFDRyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxVQUFVLEdBQUdBOztrQkFIREo7O1lBTW5CSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLEtBQUs7WUFDbkI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFVBQVU7WUFDeEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsVUFBVSxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsU0FBUztnQkFDMUMsSUFBSUM7Z0JBRUosSUFBTUMsUUFBUUwsWUFDUk0sYUFBYUwsTUFBTU0sYUFBYTtnQkFFdENILFNBQVNJLElBQUFBLGlCQUFVLEVBQUMsSUFBSSxDQUFDYixLQUFLLEVBQUVVLE9BQU9KLE9BQU9DLFVBQVVDO2dCQUV4RCxJQUFJLENBQUNDLFFBQVE7b0JBQ1hILE1BQU1RLFNBQVMsQ0FBQ0g7Z0JBQ2xCO2dCQUVBLE9BQU9GO1lBQ1Q7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUM7Z0JBRUosSUFBTUMsY0FBYyxJQUFJLENBQUNqQixLQUFLLENBQUNrQixNQUFNLENBQUMsU0FBQ0QsYUFBYUU7b0JBQzVDLElBQU1DLGFBQWFELEtBQUtKLFFBQVE7b0JBRWhDLElBQUlFLGdCQUFnQkksdUJBQVksRUFBRTt3QkFDaENKLGNBQWNHLFlBQVksR0FBRztvQkFDL0IsT0FBTzt3QkFDTEgsY0FBYyxBQUFDLEdBQWlCRyxPQUFmSCxhQUFZLEtBQWMsT0FBWEc7b0JBQ2xDO29CQUVBLE9BQU9IO2dCQUNULEdBQUdJLHVCQUFZO2dCQUVyQkwsU0FBU0MsYUFBYSxHQUFHO2dCQUV6QixJQUFJLElBQUksQ0FBQ2hCLFVBQVUsS0FBSyxNQUFNO29CQUM1QixJQUFNQSxhQUFhLEFBQUMsSUFBSSxDQUFDQSxVQUFVLEtBQUtxQixXQUNuQnhCLGtCQUNFLElBQUksQ0FBQ0csVUFBVTtvQkFFdENlLFNBQVMsQUFBQyxHQUFhZixPQUFYZSxRQUFPLE1BQWUsT0FBWGYsWUFBVztnQkFDcEM7Z0JBRUEsT0FBT2U7WUFDVDs7OztZQUVPTyxLQUFBQTttQkFBUCxTQUFPQSxVQUFVQyxLQUFLLEVBQUV4QixLQUFLO2dCQUMzQixJQUFJQSxVQUFVeUIsV0FBVztvQkFDdkJ6QixRQUFRd0IsT0FBUSxHQUFHO29CQUVuQkEsUUE3RGUzQixZQTZESyxHQUFHO2dCQUN6QjtnQkFFQSxJQUFNSSxhQUFhLE1BQ2J5QixhQUFhLElBQUlGLE1BQU14QixPQUFPQztnQkFFcEMsT0FBT3lCO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSx1QkFBdUJILEtBQUssRUFBRXhCLEtBQUssRUFBRUMsVUFBVTtnQkFDcEQsSUFBSUEsZUFBZXdCLFdBQVc7b0JBQzVCeEIsYUFBYUQsT0FBTyxHQUFHO29CQUV2QkEsUUFBUXdCLE9BQVEsR0FBRztvQkFFbkJBLFFBNUVlM0IsWUE0RUssR0FBRztnQkFDekI7Z0JBRUEsSUFBTTZCLGFBQWEsSUFBSUYsTUFBTXhCLE9BQU9DO2dCQUVwQyxPQUFPeUI7WUFDVDs7O1dBbEZtQjdCIn0=