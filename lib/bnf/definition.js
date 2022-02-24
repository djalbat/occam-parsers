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
            value: function parse(nodes, state, callback) {
                var parsed;
                var index = 0;
                parsed = parseParts(this.parts, nodes, index, state, callback);
                return parsed;
            }
        },
        {
            key: "asString",
            value: function asString() {
                var partsString1 = this.parts.reduce(function(partsString, part) {
                    var partString = part.asString();
                    if (partsString === _constants.EMPTY_STRING) {
                        partsString = partString; ///
                    } else {
                        partsString = "".concat(partsString, " ").concat(partString);
                    }
                    return partsString;
                }, _constants.EMPTY_STRING), string = partsString1; ///
                return string;
            }
        }
    ]);
    return Definition;
}();
exports.default = Definition;
function parseParts(parts, nodes, index, state, callback) {
    var parsed;
    var partsLength = parts.length;
    if (index === partsLength) {
        parsed = true;
        if (callback !== null) {
            parsed = callback();
        }
    } else {
        var part = parts[index];
        parsed = parsePart(part, parts, nodes, index, state, callback);
    }
    return parsed;
}
function parsePart(part, parts, nodes, index, state, callback2) {
    var parsed;
    if (callback2 !== null) {
        var partsNodes = [];
        parsed = part.parse(nodes, state, function() {
            index++;
            parseParts(parts, partsNodes, index, state, callback2);
        });
        if (parsed) {
            (0, _array).push(nodes, partsNodes);
        }
    } else {
        var partRuleNamePartWithLookAhead = (0, _part).isPartRuleNamePartWithLookAhead(part);
        if (partRuleNamePartWithLookAhead) {
            var ruleNamePart = part, partsNodes1 = [];
            parsed = ruleNamePart.parse(nodes, state, function() {
                var callback = null;
                index++;
                parseParts(parts, partsNodes1, index, state, callback);
            });
            if (parsed) {
                (0, _array).push(nodes, partsNodes1);
            }
        } else {
            var callback1 = null;
            parsed = part.parse(nodes, state, callback1);
            if (parsed) {
                index++;
                parsed = parseParts(parts, nodes, index, state, callback1);
            }
        }
    }
    return parsed;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ibmYvZGVmaW5pdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgcHVzaCwgZmlyc3QsIGFsbEJ1dEZpcnN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgaXNQYXJ0UnVsZU5hbWVQYXJ0V2l0aExvb2tBaGVhZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvcGFydFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IocGFydHMpIHtcbiAgICB0aGlzLnBhcnRzID0gcGFydHM7XG4gIH1cblxuICBnZXRQYXJ0cygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJ0cztcbiAgfVxuXG4gIGdldEZpcnN0UGFydCgpIHtcbiAgICBjb25zdCBmaXJzdFBhcnQgPSBmaXJzdCh0aGlzLnBhcnRzKTtcblxuICAgIHJldHVybiBmaXJzdFBhcnQ7XG4gIH1cblxuICBnZXRQYXJ0c0xlbmd0aCgpIHtcbiAgICBjb25zdCBwYXJ0c0xlbmd0aCA9IHRoaXMucGFydHMubGVuZ3RoO1xuXG4gICAgcmV0dXJuIHBhcnRzTGVuZ3RoO1xuICB9XG5cbiAgZ2V0QWxsQnV0Rmlyc3RQYXJ0cygpIHtcbiAgICBjb25zdCBhbGxCdXRGaXJzdFBhcnRzID0gYWxsQnV0Rmlyc3QodGhpcy5wYXJ0cyk7XG5cbiAgICByZXR1cm4gYWxsQnV0Rmlyc3RQYXJ0cztcbiAgfVxuXG4gIGFkZFBhcnQocGFydCkge1xuICAgIHRoaXMucGFydHMucHVzaChwYXJ0KTtcbiAgfVxuXG4gIHBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spIHtcbiAgICBsZXQgcGFyc2VkO1xuXG4gICAgY29uc3QgaW5kZXggPSAwO1xuXG4gICAgcGFyc2VkID0gcGFyc2VQYXJ0cyh0aGlzLnBhcnRzLCBub2RlcywgaW5kZXgsIHN0YXRlLCBjYWxsYmFjayk7XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgcGFydHNTdHJpbmcgPSB0aGlzLnBhcnRzLnJlZHVjZSgocGFydHNTdHJpbmcsIHBhcnQpID0+IHtcbiAgICAgICAgICBjb25zdCBwYXJ0U3RyaW5nID0gcGFydC5hc1N0cmluZygpO1xuXG4gICAgICAgICAgaWYgKHBhcnRzU3RyaW5nID09PSBFTVBUWV9TVFJJTkcpIHtcbiAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gcGFydFN0cmluZzsgLy8vXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gYCR7cGFydHNTdHJpbmd9ICR7cGFydFN0cmluZ31gO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBwYXJ0c1N0cmluZztcbiAgICAgICAgfSwgRU1QVFlfU1RSSU5HKSxcbiAgICAgICAgc3RyaW5nID0gcGFydHNTdHJpbmc7IC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcnRzKHBhcnRzLCBub2RlcywgaW5kZXgsIHN0YXRlLCBjYWxsYmFjaykge1xuICBsZXQgcGFyc2VkO1xuXG4gIGNvbnN0IHBhcnRzTGVuZ3RoID0gcGFydHMubGVuZ3RoO1xuXG4gIGlmIChpbmRleCA9PT0gcGFydHNMZW5ndGgpIHtcbiAgICBwYXJzZWQgPSB0cnVlO1xuXG4gICAgaWYgKGNhbGxiYWNrICE9PSBudWxsKSB7XG4gICAgICAgcGFyc2VkID0gY2FsbGJhY2soKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgcGFydCA9IHBhcnRzW2luZGV4XTtcblxuICAgIHBhcnNlZCA9IHBhcnNlUGFydChwYXJ0LCBwYXJ0cywgbm9kZXMsIGluZGV4LCBzdGF0ZSwgY2FsbGJhY2spO1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJ0KHBhcnQsIHBhcnRzLCBub2RlcywgaW5kZXgsIHN0YXRlLCBjYWxsYmFjaykge1xuICBsZXQgcGFyc2VkO1xuXG4gIGlmIChjYWxsYmFjayAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHBhcnRzTm9kZXMgPSBbXTtcblxuICAgIHBhcnNlZCA9IHBhcnQucGFyc2Uobm9kZXMsIHN0YXRlLCAoKSA9PiB7XG4gICAgICBpbmRleCsrO1xuXG4gICAgICBwYXJzZVBhcnRzKHBhcnRzLCBwYXJ0c05vZGVzLCBpbmRleCwgc3RhdGUsIGNhbGxiYWNrKTtcbiAgICB9KTtcblxuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIHB1c2gobm9kZXMsIHBhcnRzTm9kZXMpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBwYXJ0UnVsZU5hbWVQYXJ0V2l0aExvb2tBaGVhZCA9IGlzUGFydFJ1bGVOYW1lUGFydFdpdGhMb29rQWhlYWQocGFydCk7XG5cbiAgICBpZiAocGFydFJ1bGVOYW1lUGFydFdpdGhMb29rQWhlYWQpIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lUGFydCA9IHBhcnQsIC8vL1xuICAgICAgICAgICAgcGFydHNOb2RlcyA9IFtdO1xuXG4gICAgICBwYXJzZWQgPSBydWxlTmFtZVBhcnQucGFyc2Uobm9kZXMsIHN0YXRlLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrID0gbnVsbDtcblxuICAgICAgICBpbmRleCsrO1xuXG4gICAgICAgIHBhcnNlUGFydHMocGFydHMsIHBhcnRzTm9kZXMsIGluZGV4LCBzdGF0ZSwgY2FsbGJhY2spO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgcHVzaChub2RlcywgcGFydHNOb2Rlcyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gbnVsbDtcblxuICAgICAgcGFyc2VkID0gcGFydC5wYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrKTtcblxuICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICBpbmRleCsrO1xuXG4gICAgICAgIHBhcnNlZCA9IHBhcnNlUGFydHMocGFydHMsIG5vZGVzLCBpbmRleCwgc3RhdGUsIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFyc2VkO1xufVxuIl0sIm5hbWVzIjpbIkRlZmluaXRpb24iLCJwYXJ0cyIsImdldFBhcnRzIiwiZ2V0Rmlyc3RQYXJ0IiwiZmlyc3RQYXJ0IiwiZmlyc3QiLCJnZXRQYXJ0c0xlbmd0aCIsInBhcnRzTGVuZ3RoIiwibGVuZ3RoIiwiZ2V0QWxsQnV0Rmlyc3RQYXJ0cyIsImFsbEJ1dEZpcnN0UGFydHMiLCJhbGxCdXRGaXJzdCIsImFkZFBhcnQiLCJwYXJ0IiwicHVzaCIsInBhcnNlIiwibm9kZXMiLCJzdGF0ZSIsImNhbGxiYWNrIiwicGFyc2VkIiwiaW5kZXgiLCJwYXJzZVBhcnRzIiwiYXNTdHJpbmciLCJwYXJ0c1N0cmluZyIsInJlZHVjZSIsInBhcnRTdHJpbmciLCJFTVBUWV9TVFJJTkciLCJzdHJpbmciLCJwYXJzZVBhcnQiLCJwYXJ0c05vZGVzIiwicGFydFJ1bGVOYW1lUGFydFdpdGhMb29rQWhlYWQiLCJpc1BhcnRSdWxlTmFtZVBhcnRXaXRoTG9va0FoZWFkIiwicnVsZU5hbWVQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVpQixHQUFjLENBQWQsVUFBYztBQUNGLEdBQW9CLENBQXBCLE1BQW9CO0FBQ2IsR0FBbUIsQ0FBbkIsS0FBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTlDQSxVQUFVLGlCQUFoQixRQUFRO2FBQUZBLFVBQVUsQ0FDakJDLEtBQUs7O1FBQ2YsSUFBSSxDQUFDQSxLQUFLLEdBQUdBLEtBQUs7Ozs7WUFHcEJDLEdBQVEsRUFBUkEsQ0FBUTttQkFBUkEsUUFBUSxDQUFSQSxRQUFRLEdBQUcsQ0FBQztnQkFDVixNQUFNLENBQUMsSUFBSSxDQUFDRCxLQUFLO1lBQ25CLENBQUM7OztZQUVERSxHQUFZLEVBQVpBLENBQVk7bUJB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