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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ibmYvZGVmaW5pdGlvbi5qcyJdLCJuYW1lcyI6WyJFTVBUWV9TVFJJTkciLCJwdXNoIiwiZmlyc3QiLCJhbGxCdXRGaXJzdCIsImlzUGFydFJ1bGVOYW1lUGFydFdpdGhMb29rQWhlYWQiLCJEZWZpbml0aW9uIiwiY29uc3RydWN0b3IiLCJwYXJ0cyIsImdldFBhcnRzIiwiZ2V0Rmlyc3RQYXJ0IiwiZmlyc3RQYXJ0IiwiZ2V0UGFydHNMZW5ndGgiLCJwYXJ0c0xlbmd0aCIsImxlbmd0aCIsImdldEFsbEJ1dEZpcnN0UGFydHMiLCJhbGxCdXRGaXJzdFBhcnRzIiwiYWRkUGFydCIsInBhcnQiLCJwYXJzZSIsIm5vZGVzIiwiY29udGV4dCIsImNhbGxiYWNrIiwicGFyc2VkIiwiaW5kZXgiLCJwYXJzZVBhcnRzIiwiYXNTdHJpbmciLCJwYXJ0c1N0cmluZyIsInJlZHVjZSIsInBhcnRTdHJpbmciLCJzdHJpbmciLCJwYXJzZVBhcnQiLCJwYXJ0c05vZGVzIiwicGFydFJ1bGVOYW1lUGFydFdpdGhMb29rQWhlYWQiLCJydWxlTmFtZVBhcnQiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRWlCLEdBQWMsQ0FBZCxVQUFjO0FBQ0YsR0FBb0IsQ0FBcEIsTUFBb0I7QUFDYixHQUFtQixDQUFuQixLQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFOUMsVUFBVSxpQkFBaEIsUUFBUTthQUFGLFVBQVUsQ0FDakIsS0FBSzs4QkFERSxVQUFVO1FBRTNCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSzs7aUJBRkQsVUFBVTs7WUFLN0IsR0FBUSxHQUFSLFFBQVE7bUJBQVIsUUFBUSxDQUFSLFFBQVEsR0FBRyxDQUFDO2dCQUNWLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSztZQUNuQixDQUFDOzs7WUFFRCxHQUFZLEdBQVosWUFBWTttQkFBWixRQUFRLENBQVIsWUFBWSxHQUFHLENBQUM7Z0JBQ2QsR0FBSyxDQUFDLFNBQVMsT0Fic0IsTUFBb0Is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