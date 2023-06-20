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
            value: function parse(nodes, state, callback, precedence) {
                var parsed;
                var index = 0;
                parsed = (0, _lookAhead.parseParts)(this.parts, nodes, index, state, callback, this.precedence);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWZpbml0aW9uLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwYXJzZVBhcnRzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2xvb2tBaGVhZFwiO1xuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcihwYXJ0cywgcHJlY2VkZW5jZSkge1xuICAgIHRoaXMucGFydHMgPSBwYXJ0cztcbiAgICB0aGlzLnByZWNlZGVuY2UgPSBwcmVjZWRlbmNlO1xuICB9XG5cbiAgZ2V0UGFydHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFydHM7XG4gIH1cblxuICBnZXRQcmVjZWRlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLnByZWNlZGVuY2U7XG4gIH1cblxuICBpc0xvd2VyUHJlY2VkZW5jZShwcmVjZWRlbmNlKSB7XG4gICAgbGV0IGxvd2VyUHJlY2VkZW5jZSA9IGZhbHNlO1xuXG4gICAgaWYgKHByZWNlZGVuY2UgIT09IG51bGwpIHtcbiAgICAgIGlmICh0aGlzLnByZWNlZGVuY2UgIT09IG51bGwpIHtcbiAgICAgICAgbG93ZXJQcmVjZWRlbmNlID0gKHRoaXMucHJlY2VkZW5jZSA8IHByZWNlZGVuY2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBsb3dlclByZWNlZGVuY2U7XG4gIH1cblxuICBwYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBwcmVjZWRlbmNlKSB7XG4gICAgbGV0IHBhcnNlZDtcblxuICAgIGNvbnN0IGluZGV4ID0gMDtcblxuICAgIHBhcnNlZCA9IHBhcnNlUGFydHModGhpcy5wYXJ0cywgbm9kZXMsIGluZGV4LCBzdGF0ZSwgY2FsbGJhY2ssIHRoaXMucHJlY2VkZW5jZSk7XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgcGFydHNTdHJpbmcgPSB0aGlzLnBhcnRzLnJlZHVjZSgocGFydHNTdHJpbmcsIHBhcnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnRTdHJpbmcgPSBwYXJ0LmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIGlmIChwYXJ0c1N0cmluZyA9PT0gRU1QVFlfU1RSSU5HKSB7XG4gICAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gcGFydFN0cmluZzsgLy8vXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwYXJ0c1N0cmluZyA9IGAke3BhcnRzU3RyaW5nfSAke3BhcnRTdHJpbmd9YDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHBhcnRzU3RyaW5nO1xuICAgICAgICAgIH0sIEVNUFRZX1NUUklORyksXG4gICAgICAgICAgc3RyaW5nID0gcGFydHNTdHJpbmc7IC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUGFydHMoQ2xhc3MsIHBhcnRzKSB7XG4gICAgaWYgKHBhcnRzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHBhcnRzID0gQ2xhc3M7ICAvLy9cblxuICAgICAgQ2xhc3MgPSBEZWZpbml0aW9uOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBwcmVjZWRlbmNlID0gbnVsbCxcbiAgICAgICAgICBkZWZpbml0aW9uID0gbmV3IENsYXNzKHBhcnRzLCBwcmVjZWRlbmNlKTtcblxuICAgIHJldHVybiBkZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21QYXJ0c0FuZFByZWNlZGVuY2UoQ2xhc3MsIHBhcnRzLCBwcmVjZWRlbmNlKSB7XG4gICAgaWYgKHByZWNlZGVuY2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcHJlY2VkZW5jZSA9IHBhcnRzOyAvLy9cblxuICAgICAgcGFydHMgPSBDbGFzczsgIC8vL1xuXG4gICAgICBDbGFzcyA9IERlZmluaXRpb247IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IGRlZmluaXRpb24gPSBuZXcgQ2xhc3MocGFydHMsIHByZWNlZGVuY2UpO1xuXG4gICAgcmV0dXJuIGRlZmluaXRpb247XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiRGVmaW5pdGlvbiIsInBhcnRzIiwicHJlY2VkZW5jZSIsImdldFBhcnRzIiwiZ2V0UHJlY2VkZW5jZSIsImlzTG93ZXJQcmVjZWRlbmNlIiwibG93ZXJQcmVjZWRlbmNlIiwicGFyc2UiLCJub2RlcyIsInN0YXRlIiwiY2FsbGJhY2siLCJwYXJzZWQiLCJpbmRleCIsInBhcnNlUGFydHMiLCJhc1N0cmluZyIsInBhcnRzU3RyaW5nIiwicmVkdWNlIiwicGFydCIsInBhcnRTdHJpbmciLCJFTVBUWV9TVFJJTkciLCJzdHJpbmciLCJmcm9tUGFydHMiLCJDbGFzcyIsInVuZGVmaW5lZCIsImRlZmluaXRpb24iLCJmcm9tUGFydHNBbmRQcmVjZWRlbmNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUtxQkE7Ozt5QkFITTt5QkFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZCxJQUFBLEFBQU1BLDJCQUFOO2FBQU1BLFdBQ1BDLEtBQUssRUFBRUMsVUFBVTtnQ0FEVkY7UUFFakIsSUFBSSxDQUFDQyxRQUFRQTtRQUNiLElBQUksQ0FBQ0MsYUFBYUE7O2tCQUhERjs7WUFNbkJHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0Y7WUFDZDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0Y7WUFDZDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0JILFVBQVU7Z0JBQzFCLElBQUlJLGtCQUFrQjtnQkFFdEIsSUFBSUosZUFBZSxNQUFNO29CQUN2QixJQUFJLElBQUksQ0FBQ0EsZUFBZSxNQUFNO3dCQUM1Qkksa0JBQW1CLElBQUksQ0FBQ0osYUFBYUE7b0JBQ3ZDO2dCQUNGO2dCQUVBLE9BQU9JO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRVIsVUFBVTtnQkFDdEMsSUFBSVM7Z0JBRUosSUFBTUMsUUFBUTtnQkFFZEQsU0FBU0UsSUFBQUEsdUJBQVcsSUFBSSxDQUFDWixPQUFPTyxPQUFPSSxPQUFPSCxPQUFPQyxVQUFVLElBQUksQ0FBQ1I7Z0JBRXBFLE9BQU9TO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsY0FBYyxJQUFJLENBQUNkLE1BQU1lLE9BQU8sU0FBQ0QsYUFBYUU7b0JBQzVDLElBQU1DLGFBQWFELEtBQUtIO29CQUV4QixJQUFJQyxnQkFBZ0JJLHlCQUFjO3dCQUNoQ0osY0FBY0csWUFBWSxHQUFHO29CQUMvQixPQUFPO3dCQUNMSCxjQUFjLEFBQUMsR0FBaUJHLE9BQWZILGFBQVksS0FBYyxPQUFYRztvQkFDbEM7b0JBRUEsT0FBT0g7Z0JBQ1QsR0FBR0ksMEJBQ0hDLFNBQVNMLGFBQWEsR0FBRztnQkFFL0IsT0FBT0s7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxVQUFVQyxLQUFLLEVBQUVyQixLQUFLO2dCQUMzQixJQUFJQSxVQUFVc0IsV0FBVztvQkFDdkJ0QixRQUFRcUIsT0FBUSxHQUFHO29CQUVuQkEsUUF6RGV0QixZQXlESyxHQUFHO2dCQUN6QjtnQkFFQSxJQUFNRSxhQUFhLE1BQ2JzQixhQUFhLElBQUlGLE1BQU1yQixPQUFPQztnQkFFcEMsT0FBT3NCO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSx1QkFBdUJILEtBQUssRUFBRXJCLEtBQUssRUFBRUMsVUFBVTtnQkFDcEQsSUFBSUEsZUFBZXFCLFdBQVc7b0JBQzVCckIsYUFBYUQsT0FBTyxHQUFHO29CQUV2QkEsUUFBUXFCLE9BQVEsR0FBRztvQkFFbkJBLFFBeEVldEIsWUF3RUssR0FBRztnQkFDekI7Z0JBRUEsSUFBTXdCLGFBQWEsSUFBSUYsTUFBTXJCLE9BQU9DO2dCQUVwQyxPQUFPc0I7WUFDVDs7O1dBOUVtQnhCIn0=