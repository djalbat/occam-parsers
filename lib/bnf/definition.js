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
            var ruleNamePart = part, partsNodes1 = [];
            parsed = ruleNamePart.parse(nodes, context, function() {
                return parseParts(parts, partsNodes1, index, context);
            });
            if (parsed) {
                (0, _array).push(nodes, partsNodes1);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ibmYvZGVmaW5pdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgcHVzaCwgZmlyc3QsIGFsbEJ1dEZpcnN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgaXNQYXJ0UnVsZU5hbWVQYXJ0V2l0aExvb2tBaGVhZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvcGFydFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IocGFydHMpIHtcbiAgICB0aGlzLnBhcnRzID0gcGFydHM7XG4gIH1cblxuICBnZXRQYXJ0cygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJ0cztcbiAgfVxuXG4gIGdldEZpcnN0UGFydCgpIHtcbiAgICBjb25zdCBmaXJzdFBhcnQgPSBmaXJzdCh0aGlzLnBhcnRzKTtcblxuICAgIHJldHVybiBmaXJzdFBhcnQ7XG4gIH1cblxuICBnZXRQYXJ0c0xlbmd0aCgpIHtcbiAgICBjb25zdCBwYXJ0c0xlbmd0aCA9IHRoaXMucGFydHMubGVuZ3RoO1xuXG4gICAgcmV0dXJuIHBhcnRzTGVuZ3RoO1xuICB9XG5cbiAgZ2V0QWxsQnV0Rmlyc3RQYXJ0cygpIHtcbiAgICBjb25zdCBhbGxCdXRGaXJzdFBhcnRzID0gYWxsQnV0Rmlyc3QodGhpcy5wYXJ0cyk7XG5cbiAgICByZXR1cm4gYWxsQnV0Rmlyc3RQYXJ0cztcbiAgfVxuXG4gIGFkZFBhcnQocGFydCkge1xuICAgIHRoaXMucGFydHMucHVzaChwYXJ0KTtcbiAgfVxuXG4gIHBhcnNlKG5vZGVzLCBjb250ZXh0LCBjYWxsYmFjaykge1xuICAgIGxldCBwYXJzZWQ7XG5cbiAgICBjb25zdCBpbmRleCA9IDA7XG5cbiAgICBwYXJzZWQgPSBwYXJzZVBhcnRzKHRoaXMucGFydHMsIG5vZGVzLCBpbmRleCwgY29udGV4dCwgY2FsbGJhY2spO1xuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHBhcnRzU3RyaW5nID0gdGhpcy5wYXJ0cy5yZWR1Y2UoKHBhcnRzU3RyaW5nLCBwYXJ0KSA9PiB7XG4gICAgICAgICAgY29uc3QgcGFydFN0cmluZyA9IHBhcnQuYXNTdHJpbmcoKTtcblxuICAgICAgICAgIGlmIChwYXJ0c1N0cmluZyA9PT0gRU1QVFlfU1RSSU5HKSB7XG4gICAgICAgICAgICBwYXJ0c1N0cmluZyA9IHBhcnRTdHJpbmc7IC8vL1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJ0c1N0cmluZyA9IGAke3BhcnRzU3RyaW5nfSAke3BhcnRTdHJpbmd9YDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gcGFydHNTdHJpbmc7XG4gICAgICAgIH0sIEVNUFRZX1NUUklORyksXG4gICAgICAgIHN0cmluZyA9IHBhcnRzU3RyaW5nOyAvLy9cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJ0cyhwYXJ0cywgbm9kZXMsIGluZGV4LCBjb250ZXh0LCBjYWxsYmFjaykge1xuICBsZXQgcGFyc2VkO1xuXG4gIGNvbnN0IHBhcnRzTGVuZ3RoID0gcGFydHMubGVuZ3RoO1xuXG4gIGlmIChpbmRleCA9PT0gcGFydHNMZW5ndGgpIHtcbiAgICBwYXJzZWQgPSB0cnVlO1xuXG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgcGFyc2VkID0gY2FsbGJhY2soKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgcGFydCA9IHBhcnRzW2luZGV4KytdO1xuXG4gICAgcGFyc2VkID0gcGFyc2VQYXJ0KHBhcnQsIHBhcnRzLCBub2RlcywgaW5kZXgsIGNvbnRleHQsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIHJldHVybiBwYXJzZWQ7XG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFydChwYXJ0LCBwYXJ0cywgbm9kZXMsIGluZGV4LCBjb250ZXh0LCBjYWxsYmFjaykge1xuICBsZXQgcGFyc2VkO1xuXG4gIGlmIChjYWxsYmFjaykge1xuICAgIGNvbnN0IHBhcnRzTm9kZXMgPSBbXTtcblxuICAgIHBhcnNlZCA9IHBhcnQucGFyc2Uobm9kZXMsIGNvbnRleHQsICgpID0+IHBhcnNlUGFydHMocGFydHMsIHBhcnRzTm9kZXMsIGluZGV4LCBjb250ZXh0LCBjYWxsYmFjaykpO1xuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgcHVzaChub2RlcywgcGFydHNOb2Rlcyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHBhcnRSdWxlTmFtZVBhcnRXaXRoTG9va0FoZWFkID0gaXNQYXJ0UnVsZU5hbWVQYXJ0V2l0aExvb2tBaGVhZChwYXJ0KTtcblxuICAgIGlmIChwYXJ0UnVsZU5hbWVQYXJ0V2l0aExvb2tBaGVhZCkge1xuICAgICAgY29uc3QgcnVsZU5hbWVQYXJ0ID0gcGFydCwgLy8vXG4gICAgICAgICAgICBwYXJ0c05vZGVzID0gW107XG5cbiAgICAgIHBhcnNlZCA9IHJ1bGVOYW1lUGFydC5wYXJzZShub2RlcywgY29udGV4dCwgKCkgPT4gcGFyc2VQYXJ0cyhwYXJ0cywgcGFydHNOb2RlcywgaW5kZXgsIGNvbnRleHQpKTtcblxuICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICBwdXNoKG5vZGVzLCBwYXJ0c05vZGVzKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGFyc2VkID0gcGFydC5wYXJzZShub2RlcywgY29udGV4dCk7XG5cbiAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgcGFyc2VkID0gcGFyc2VQYXJ0cyhwYXJ0cywgbm9kZXMsIGluZGV4LCBjb250ZXh0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFyc2VkO1xufVxuIl0sIm5hbWVzIjpbIkRlZmluaXRpb24iLCJwYXJ0cyIsImdldFBhcnRzIiwiZ2V0Rmlyc3RQYXJ0IiwiZmlyc3RQYXJ0IiwiZ2V0UGFydHNMZW5ndGgiLCJwYXJ0c0xlbmd0aCIsImxlbmd0aCIsImdldEFsbEJ1dEZpcnN0UGFydHMiLCJhbGxCdXRGaXJzdFBhcnRzIiwiYWRkUGFydCIsInBhcnQiLCJwdXNoIiwicGFyc2UiLCJub2RlcyIsImNvbnRleHQiLCJjYWxsYmFjayIsInBhcnNlZCIsImluZGV4IiwicGFyc2VQYXJ0cyIsImFzU3RyaW5nIiwicGFydHNTdHJpbmciLCJyZWR1Y2UiLCJwYXJ0U3RyaW5nIiwic3RyaW5nIiwicGFyc2VQYXJ0IiwicGFydHNOb2RlcyIsInBhcnRSdWxlTmFtZVBhcnRXaXRoTG9va0FoZWFkIiwicnVsZU5hbWVQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVpQixHQUFjLENBQWQsVUFBYztBQUNGLEdBQW9CLENBQXBCLE1BQW9CO0FBQ2IsR0FBbUIsQ0FBbkIsS0FBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTlDQSxVQUFVLGlCQUFoQixRQUFRO2FBQUZBLFVBQVUsQ0FDakJDLEtBQUs7O1FBQ2YsSUFBSSxDQUFDQSxLQUFLLEdBQUdBLEtBQUs7Ozs7WUFHcEJDLEdBQVEsRUFBUkEsQ0FBUTttQkFBUkEsUUFBUSxDQUFSQSxRQUFRLEdBQUcsQ0FBQztnQkFDVixNQUFNLENBQUMsSUFBSSxDQUFDRCxLQUFLO1lBQ25CLENBQUM7OztZQUVERSxHQUFZLEVBQVpBLENBQVk7bUJBQVpBLFFBQVEsQ0FBUkEsWUFBWSxHQUFHLENBQUM7Z0JBQ2QsR0FBSyxDQUFDQyxTQUFTLE9BYnNCLE1BQW9CLFFBYWpDLElBQUksQ0FBQ0gsS0FBSztnQkFFbEMsTUFBTSxDQUFDRyxTQUFTO1lBQ2xCLENBQUM7OztZQUVEQyxHQUFjLEVBQWRBLENBQWM7bUJBQWRBLFFBQVEsQ0FBUkEsY0FBYyxHQUFHLENBQUM7Z0JBQ2hCLEdBQUssQ0FBQ0MsV0FBVyxHQUFHLElBQUksQ0FBQ0wsS0FBSyxDQUFDTSxNQUFNO2dCQUVyQyxNQUFNLENBQUNELFdBQVc7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