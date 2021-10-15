"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _constants = require("../constants");
var _array = require("../utilities/array");
var _part = require("../utilities/part");
function _classCallCheck(instance, Constructor) {
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
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var Definition = /*#__PURE__*/ function() {
    function Definition(parts) {
        _classCallCheck(this, Definition);
        this.parts = parts;
    }
    _createClass(Definition, [
        {
            key: "getParts",
            value: function getParts() {
                return this.parts;
            }
        },
        {
            key: "getFirstPart",
            value: function getFirstPart() {
                var firstPart = (0, _array).first(this.parts);
                return firstPart;
            }
        },
        {
            key: "getPartsLength",
            value: function getPartsLength() {
                var partsLength = this.parts.length;
                return partsLength;
            }
        },
        {
            key: "getAllButFirstParts",
            value: function getAllButFirstParts() {
                var allButFirstParts = (0, _array).allButFirst(this.parts);
                return allButFirstParts;
            }
        },
        {
            key: "addPart",
            value: function addPart(part) {
                this.parts.push(part);
            }
        },
        {
            key: "parse",
            value: function parse(nodes, context, callback) {
                var parsed;
                var index = 0;
                parsed = parseParts(this.parts, nodes, index, context, callback);
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
    ]);
    return Definition;
}();
exports.default = Definition;
function parseParts(parts, nodes, index, context, callback) {
    var parsed;
    var partsLength = parts.length;
    if (index === partsLength) {
        parsed = true;
        if (callback) {
            parsed = callback();
        }
    } else {
        var part = parts[index++];
        parsed = parsePart(part, parts, nodes, index, context, callback);
    }
    return parsed;
}
function parsePart(part, parts, nodes, index, context, callback) {
    var parsed;
    if (callback) {
        var partsNodes = [];
        parsed = part.parse(nodes, context, function() {
            return parseParts(parts, partsNodes, index, context, callback);
        });
        if (parsed) {
            (0, _array).push(nodes, partsNodes);
        }
    } else {
        var partRuleNamePartWithLookAhead = (0, _part).isPartRuleNamePartWithLookAhead(part);
        if (partRuleNamePartWithLookAhead) {
            var ruleNamePart = part, partsNodes = [];
            parsed = ruleNamePart.parse(nodes, context, function() {
                return parseParts(parts, partsNodes, index, context);
            });
            if (parsed) {
                (0, _array).push(nodes, partsNodes);
            }
        } else {
            parsed = part.parse(nodes, context);
            if (parsed) {
                parsed = parseParts(parts, nodes, index, context);
            }
        }
    }
    return parsed;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ibmYvZGVmaW5pdGlvbi5qcyJdLCJuYW1lcyI6WyJFTVBUWV9TVFJJTkciLCJwdXNoIiwiZmlyc3QiLCJhbGxCdXRGaXJzdCIsImlzUGFydFJ1bGVOYW1lUGFydFdpdGhMb29rQWhlYWQiLCJEZWZpbml0aW9uIiwiY29uc3RydWN0b3IiLCJwYXJ0cyIsImdldFBhcnRzIiwiZ2V0Rmlyc3RQYXJ0IiwiZmlyc3RQYXJ0IiwiZ2V0UGFydHNMZW5ndGgiLCJwYXJ0c0xlbmd0aCIsImxlbmd0aCIsImdldEFsbEJ1dEZpcnN0UGFydHMiLCJhbGxCdXRGaXJzdFBhcnRzIiwiYWRkUGFydCIsInBhcnQiLCJwYXJzZSIsIm5vZGVzIiwiY29udGV4dCIsImNhbGxiYWNrIiwicGFyc2VkIiwiaW5kZXgiLCJwYXJzZVBhcnRzIiwiYXNTdHJpbmciLCJwYXJ0c1N0cmluZyIsInJlZHVjZSIsInBhcnRTdHJpbmciLCJzdHJpbmciLCJwYXJzZVBhcnQiLCJwYXJ0c05vZGVzIiwicGFydFJ1bGVOYW1lUGFydFdpdGhMb29rQWhlYWQiLCJydWxlTmFtZVBhcnQiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRWlCLEdBQWMsQ0FBZCxVQUFjO0FBQ0YsR0FBb0IsQ0FBcEIsTUFBb0I7QUFDYixHQUFtQixDQUFuQixLQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFOUMsVUFBVSxpQkFBaEIsUUFBUTthQUFGLFVBQVUsQ0FDakIsS0FBSzs4QkFERSxVQUFVO1FBRTNCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSzs7aUJBRkQsVUFBVTs7WUFLN0IsR0FBUSxFQUFSLENBQVE7bUJBQVIsUUFBUSxDQUFSLFFBQVEsR0FBRyxDQUFDO2dCQUNWLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSztZQUNuQixDQUFDOzs7WUFFRCxHQUFZLEVBQVosQ0FBWTttQkFBWixRQUFRLENBQVIsWUFBWSxHQUFHLENBQUM7Z0JBQ2QsR0FBSyxDQUFDLFNBQVMsT0Fic0IsTUFBb0Is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X1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHB1c2gsIGZpcnN0LCBhbGxCdXRGaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGlzUGFydFJ1bGVOYW1lUGFydFdpdGhMb29rQWhlYWQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3BhcnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzKSB7XG4gICAgdGhpcy5wYXJ0cyA9IHBhcnRzO1xuICB9XG5cbiAgZ2V0UGFydHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFydHM7XG4gIH1cblxuICBnZXRGaXJzdFBhcnQoKSB7XG4gICAgY29uc3QgZmlyc3RQYXJ0ID0gZmlyc3QodGhpcy5wYXJ0cyk7XG5cbiAgICByZXR1cm4gZmlyc3RQYXJ0O1xuICB9XG5cbiAgZ2V0UGFydHNMZW5ndGgoKSB7XG4gICAgY29uc3QgcGFydHNMZW5ndGggPSB0aGlzLnBhcnRzLmxlbmd0aDtcblxuICAgIHJldHVybiBwYXJ0c0xlbmd0aDtcbiAgfVxuXG4gIGdldEFsbEJ1dEZpcnN0UGFydHMoKSB7XG4gICAgY29uc3QgYWxsQnV0Rmlyc3RQYXJ0cyA9IGFsbEJ1dEZpcnN0KHRoaXMucGFydHMpO1xuXG4gICAgcmV0dXJuIGFsbEJ1dEZpcnN0UGFydHM7XG4gIH1cblxuICBhZGRQYXJ0KHBhcnQpIHtcbiAgICB0aGlzLnBhcnRzLnB1c2gocGFydCk7XG4gIH1cblxuICBwYXJzZShub2RlcywgY29udGV4dCwgY2FsbGJhY2spIHtcbiAgICBsZXQgcGFyc2VkO1xuXG4gICAgY29uc3QgaW5kZXggPSAwO1xuXG4gICAgcGFyc2VkID0gcGFyc2VQYXJ0cyh0aGlzLnBhcnRzLCBub2RlcywgaW5kZXgsIGNvbnRleHQsIGNhbGxiYWNrKTtcblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBwYXJ0c1N0cmluZyA9IHRoaXMucGFydHMucmVkdWNlKChwYXJ0c1N0cmluZywgcGFydCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHBhcnRTdHJpbmcgPSBwYXJ0LmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICBpZiAocGFydHNTdHJpbmcgPT09IEVNUFRZX1NUUklORykge1xuICAgICAgICAgICAgcGFydHNTdHJpbmcgPSBwYXJ0U3RyaW5nOyAvLy9cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFydHNTdHJpbmcgPSBgJHtwYXJ0c1N0cmluZ30gJHtwYXJ0U3RyaW5nfWA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHBhcnRzU3RyaW5nO1xuICAgICAgICB9LCBFTVBUWV9TVFJJTkcpLFxuICAgICAgICBzdHJpbmcgPSBwYXJ0c1N0cmluZzsgLy8vXG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFydHMocGFydHMsIG5vZGVzLCBpbmRleCwgY29udGV4dCwgY2FsbGJhY2spIHtcbiAgbGV0IHBhcnNlZDtcblxuICBjb25zdCBwYXJ0c0xlbmd0aCA9IHBhcnRzLmxlbmd0aDtcblxuICBpZiAoaW5kZXggPT09IHBhcnRzTGVuZ3RoKSB7XG4gICAgcGFyc2VkID0gdHJ1ZTtcblxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgIHBhcnNlZCA9IGNhbGxiYWNrKCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHBhcnQgPSBwYXJ0c1tpbmRleCsrXTtcblxuICAgIHBhcnNlZCA9IHBhcnNlUGFydChwYXJ0LCBwYXJ0cywgbm9kZXMsIGluZGV4LCBjb250ZXh0LCBjYWxsYmFjayk7XG4gIH1cblxuICByZXR1cm4gcGFyc2VkO1xufVxuXG5mdW5jdGlvbiBwYXJzZVBhcnQocGFydCwgcGFydHMsIG5vZGVzLCBpbmRleCwgY29udGV4dCwgY2FsbGJhY2spIHtcbiAgbGV0IHBhcnNlZDtcblxuICBpZiAoY2FsbGJhY2spIHtcbiAgICBjb25zdCBwYXJ0c05vZGVzID0gW107XG5cbiAgICBwYXJzZWQgPSBwYXJ0LnBhcnNlKG5vZGVzLCBjb250ZXh0LCAoKSA9PiBwYXJzZVBhcnRzKHBhcnRzLCBwYXJ0c05vZGVzLCBpbmRleCwgY29udGV4dCwgY2FsbGJhY2spKTtcblxuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIHB1c2gobm9kZXMsIHBhcnRzTm9kZXMpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBwYXJ0UnVsZU5hbWVQYXJ0V2l0aExvb2tBaGVhZCA9IGlzUGFydFJ1bGVOYW1lUGFydFdpdGhMb29rQWhlYWQocGFydCk7XG5cbiAgICBpZiAocGFydFJ1bGVOYW1lUGFydFdpdGhMb29rQWhlYWQpIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lUGFydCA9IHBhcnQsIC8vL1xuICAgICAgICAgICAgcGFydHNOb2RlcyA9IFtdO1xuXG4gICAgICBwYXJzZWQgPSBydWxlTmFtZVBhcnQucGFyc2Uobm9kZXMsIGNvbnRleHQsICgpID0+IHBhcnNlUGFydHMocGFydHMsIHBhcnRzTm9kZXMsIGluZGV4LCBjb250ZXh0KSk7XG5cbiAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgcHVzaChub2RlcywgcGFydHNOb2Rlcyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcnNlZCA9IHBhcnQucGFyc2Uobm9kZXMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgIHBhcnNlZCA9IHBhcnNlUGFydHMocGFydHMsIG5vZGVzLCBpbmRleCwgY29udGV4dCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn1cbiJdfQ==